'use server'

import { neon } from '@neondatabase/serverless'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

// ── Auth ────────────────────────────────────────────────────────────────────

export type LoginState = { error?: string }

export async function login(
  _prev: LoginState,
  formData: FormData
): Promise<LoginState> {
  const username = (formData.get('username') as string)?.trim()
  const password = (formData.get('password') as string)?.trim()

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const store = await cookies()
    store.set('admin_session', process.env.ADMIN_SECRET!, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })
    redirect('/admin/dashboard')
  }

  return { error: 'Invalid username or password.' }
}

export async function logout() {
  const store = await cookies()
  store.delete('admin_session')
  redirect('/admin')
}

// ── Leads ────────────────────────────────────────────────────────────────────

const PAGE_SIZE = 10

export type Lead = {
  id: number
  first_name: string
  last_name: string
  email: string
  phone: string | null
  message: string
  created_at: string
}

export type LeadsResult = {
  rows: Lead[]
  total: number
  stats: {
    total: number
    this_month: number
    this_week: number
  }
}

export async function getLeads(page = 1, search = ''): Promise<LeadsResult> {
  const sql = neon(process.env.DATABASE_URL!)
  const offset = (page - 1) * PAGE_SIZE
  const like = `%${search}%`

  const whereClause = search
    ? sql`WHERE first_name ILIKE ${like} OR last_name ILIKE ${like} OR email ILIKE ${like} OR message ILIKE ${like}`
    : sql``

  const [rows, countResult, statsResult] = await Promise.all([
    search
      ? sql`SELECT * FROM contact_submissions WHERE first_name ILIKE ${like} OR last_name ILIKE ${like} OR email ILIKE ${like} OR message ILIKE ${like} ORDER BY created_at DESC LIMIT ${PAGE_SIZE} OFFSET ${offset}`
      : sql`SELECT * FROM contact_submissions ORDER BY created_at DESC LIMIT ${PAGE_SIZE} OFFSET ${offset}`,

    search
      ? sql`SELECT COUNT(*)::int AS total FROM contact_submissions WHERE first_name ILIKE ${like} OR last_name ILIKE ${like} OR email ILIKE ${like} OR message ILIKE ${like}`
      : sql`SELECT COUNT(*)::int AS total FROM contact_submissions`,

    sql`
      SELECT
        COUNT(*)::int AS total,
        COUNT(*) FILTER (WHERE created_at >= date_trunc('month', NOW()))::int AS this_month,
        COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days')::int AS this_week
      FROM contact_submissions
    `,
  ])

  return {
    rows: rows as Lead[],
    total: countResult[0]?.total ?? 0,
    stats: statsResult[0] as LeadsResult['stats'],
  }
}

export async function deleteLead(id: number): Promise<void> {
  const sql = neon(process.env.DATABASE_URL!)
  await sql`DELETE FROM contact_submissions WHERE id = ${id}`
}

export async function updateLead(
  id: number,
  data: Omit<Lead, 'id' | 'created_at'>
): Promise<void> {
  const sql = neon(process.env.DATABASE_URL!)
  await sql`
    UPDATE contact_submissions
    SET
      first_name = ${data.first_name},
      last_name  = ${data.last_name},
      email      = ${data.email},
      phone      = ${data.phone || null},
      message    = ${data.message}
    WHERE id = ${id}
  `
}

export async function createLead(
  data: Omit<Lead, 'id' | 'created_at'>
): Promise<void> {
  const sql = neon(process.env.DATABASE_URL!)
  await sql`
    INSERT INTO contact_submissions (first_name, last_name, email, phone, message)
    VALUES (${data.first_name}, ${data.last_name}, ${data.email}, ${data.phone || null}, ${data.message})
  `
}
