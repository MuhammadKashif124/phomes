'use server'

import { neon } from '@neondatabase/serverless'

export type RegisterState = {
  success: boolean
  message: string
}

export async function submitRegister(
  _prevState: RegisterState,
  formData: FormData
): Promise<RegisterState> {
  const firstName = (formData.get('firstName') as string)?.trim()
  const lastName = (formData.get('lastName') as string)?.trim()
  const mobile = (formData.get('mobile') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const investmentBudget = (formData.get('investmentBudget') as string)?.trim()
  const propertyTypes = (formData.getAll('propertyTypes') as string[]).join(', ')

  if (!firstName || !lastName || !email) {
    return { success: false, message: 'Please fill in all required fields.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, message: 'Please enter a valid email address.' }
  }

  try {
    const sql = neon(process.env.DATABASE_URL!)

    await sql`
      CREATE TABLE IF NOT EXISTS investor_registrations (
        id                SERIAL PRIMARY KEY,
        first_name        TEXT NOT NULL,
        last_name         TEXT NOT NULL,
        mobile            TEXT,
        email             TEXT NOT NULL,
        investment_budget TEXT,
        property_types    TEXT,
        created_at        TIMESTAMPTZ DEFAULT NOW()
      )
    `

    await sql`
      INSERT INTO investor_registrations (first_name, last_name, mobile, email, investment_budget, property_types)
      VALUES (${firstName}, ${lastName}, ${mobile || null}, ${email}, ${investmentBudget || null}, ${propertyTypes})
    `

    return { success: true, message: "Welcome! You're now registered. We'll be in touch with exclusive opportunities soon." }
  } catch (error) {
    console.error('Register form DB error:', error)
    return { success: false, message: 'Something went wrong. Please try again later.' }
  }
}
