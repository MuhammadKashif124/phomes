'use server'

import { neon } from '@neondatabase/serverless'

export type SellFormState = {
  success: boolean
  message: string
}

export async function submitSellForm(
  _prevState: SellFormState,
  formData: FormData
): Promise<SellFormState> {
  const propertyType = (formData.get('propertyType') as string)?.trim()
  const firstName = (formData.get('firstName') as string)?.trim()
  const lastName = (formData.get('lastName') as string)?.trim()
  const mobile = (formData.get('mobile') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const propertyAddress = (formData.get('propertyAddress') as string)?.trim()

  if (!firstName || !lastName || !email || !propertyAddress) {
    return { success: false, message: 'Please fill in all required fields.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, message: 'Please enter a valid email address.' }
  }

  try {
    const sql = neon(process.env.DATABASE_URL!)

    await sql`
      CREATE TABLE IF NOT EXISTS sell_submissions (
        id               SERIAL PRIMARY KEY,
        property_type    TEXT,
        first_name       TEXT NOT NULL,
        last_name        TEXT NOT NULL,
        mobile           TEXT,
        email            TEXT NOT NULL,
        property_address TEXT NOT NULL,
        created_at       TIMESTAMPTZ DEFAULT NOW()
      )
    `

    await sql`
      INSERT INTO sell_submissions (property_type, first_name, last_name, mobile, email, property_address)
      VALUES (${propertyType || null}, ${firstName}, ${lastName}, ${mobile || null}, ${email}, ${propertyAddress})
    `

    return { success: true, message: "Thank you! We'll be in touch within 24 hours to discuss your property." }
  } catch (error) {
    console.error('Sell form DB error:', error)
    return { success: false, message: 'Something went wrong. Please try again later.' }
  }
}
