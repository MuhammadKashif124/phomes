'use server'

import { neon } from '@neondatabase/serverless'

export type ContactState = {
  success: boolean
  message: string
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const firstName = (formData.get('firstName') as string)?.trim()
  const lastName = (formData.get('lastName') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const phone = (formData.get('phone') as string)?.trim()
  const message = (formData.get('message') as string)?.trim()

  if (!firstName || !lastName || !email || !message) {
    return { success: false, message: 'Please fill in all required fields.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, message: 'Please enter a valid email address.' }
  }

  try {
    const sql = neon(process.env.DATABASE_URL!)

    await sql`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        first_name TEXT NOT NULL,
        last_name  TEXT NOT NULL,
        email      TEXT NOT NULL,
        phone      TEXT,
        message    TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `

    await sql`
      INSERT INTO contact_submissions (first_name, last_name, email, phone, message)
      VALUES (${firstName}, ${lastName}, ${email}, ${phone || null}, ${message})
    `

    return { success: true, message: 'Thank you! We\'ll be in touch shortly.' }
  } catch (error) {
    console.error('Contact form DB error:', error)
    return { success: false, message: 'Something went wrong. Please try again later.' }
  }
}
