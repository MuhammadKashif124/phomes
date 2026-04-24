'use client'

import React, { useActionState } from 'react'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import styles from './page.module.css'
import { submitRegister, type RegisterState } from './actions'

const initialState: RegisterState = { success: false, message: '' }

const budgetOptions = [
  { value: '', label: 'Select Budget Range' },
  { value: 'under-100k', label: 'Under £100,000' },
  { value: '100k-250k', label: '£100,000 – £250,000' },
  { value: '250k-500k', label: '£250,000 – £500,000' },
  { value: '500k-1m', label: '£500,000 – £1,000,000' },
  { value: 'over-1m', label: 'Over £1,000,000' },
]

const propertyTypeOptions = [
  { id: 'vacant', label: 'Vacant' },
  { id: 'tenanted', label: 'Tenanted' },
  { id: 'hmo', label: 'HMO' },
  { id: 'distressed', label: 'Distressed' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'land', label: 'Other Land' },
]

export default function Register() {
  const [state, formAction, pending] = useActionState(submitRegister, initialState)

  return (
    <>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.headerBg}></div>
        <div className={styles.headerContent}>
          <FadeIn>
            <span className="eyebrow">Investor Registration</span>
            <h1 className={styles.headerTitle}>Register as<br />an Investor</h1>
            <p className={styles.headerSubtitle}>
              Access exclusive off-market property deals sourced by our expert team.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form Section */}
      <section className="section container">
        <div className={styles.formLayout}>
          {/* Left: Info */}
          <div className={styles.infoPanel}>
            <FadeIn>
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Why register with us?</h3>
                <ul className={styles.infoList}>
                  <li>Access exclusive off-market deals not available elsewhere</li>
                  <li>Deals sourced and vetted by our expert team</li>
                  <li>22 years of property sourcing experience</li>
                  <li>Support with mortgages and solicitors</li>
                  <li>Properties across all types and budgets</li>
                </ul>
              </div>

              <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <span className={styles.statNum}>22</span>
                  <span className={styles.statLbl}>Years Experience</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNum}>300+</span>
                  <span className={styles.statLbl}>Properties Sourced</span>
                </div>
              </div>

              <p className={styles.backLink}>
                <Link href="/invest" className="link-underline">← Back to Invest page</Link>
              </p>
            </FadeIn>
          </div>

          {/* Right: Form */}
          <div className={styles.formContainer}>
            <FadeIn delay={200}>
              {state.success ? (
                <div className={styles.successBox}>
                  <div className={styles.successIcon}>✓</div>
                  <h2 className={styles.successTitle}>You're Registered!</h2>
                  <p className={styles.successText}>{state.message}</p>
                  <Link href="/" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                    Back to Home
                  </Link>
                </div>
              ) : (
                <form className={styles.form} action={formAction}>
                  <h2 className={styles.formTitle}>Your Details</h2>

                  {state.message && !state.success && (
                    <p className={styles.errorMessage}>{state.message}</p>
                  )}

                  {/* Name Row */}
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="firstName" className={styles.label}>First Name *</label>
                      <input type="text" id="firstName" name="firstName" className={styles.input} required placeholder="e.g. John" />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="lastName" className={styles.label}>Last Name *</label>
                      <input type="text" id="lastName" name="lastName" className={styles.input} required placeholder="e.g. Smith" />
                    </div>
                  </div>

                  {/* Mobile */}
                  <div className={styles.formGroup}>
                    <label htmlFor="mobile" className={styles.label}>Mobile</label>
                    <input type="tel" id="mobile" name="mobile" className={styles.input} placeholder="e.g. 07700 900000" />
                  </div>

                  {/* Email */}
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email Address *</label>
                    <input type="email" id="email" name="email" className={styles.input} required placeholder="e.g. john@example.com" />
                  </div>

                  {/* Investment Budget */}
                  <div className={styles.formGroup}>
                    <label htmlFor="investmentBudget" className={styles.label}>Investment Budget</label>
                    <div className={styles.selectWrapper}>
                      <select id="investmentBudget" name="investmentBudget" className={styles.select}>
                        {budgetOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                      <span className={styles.selectArrow}>▾</span>
                    </div>
                  </div>

                  {/* Property Types */}
                  <div className={styles.formGroup}>
                    <p className={styles.label}>Property Types of Interest</p>
                    <div className={styles.checkboxGrid}>
                      {propertyTypeOptions.map((opt) => (
                        <label key={opt.id} className={styles.checkboxItem}>
                          <input type="checkbox" name="propertyTypes" value={opt.id} className={styles.checkbox} />
                          <span className={styles.checkboxLabel}>{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%' }} disabled={pending}>
                    {pending ? 'Registering...' : 'Register as Investor'}
                  </button>

                  <p className={styles.disclaimer}>
                    By registering you agree to receive property investment opportunities from Pennylane Sourcing.
                  </p>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
