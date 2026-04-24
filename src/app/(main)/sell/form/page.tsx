'use client'

import React, { useActionState } from 'react'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import styles from './page.module.css'
import { submitSellForm, type SellFormState } from './actions'

const initialState: SellFormState = { success: false, message: '' }

const propertyTypeOptions = [
  { value: '', label: 'Select Property Type' },
  { value: 'vacant', label: 'Vacant' },
  { value: 'tenanted', label: 'Tenanted' },
  { value: 'upgrade', label: 'Upgrade' },
  { value: 'assisted', label: 'Assisted' },
  { value: 'portfolio', label: 'Portfolio' },
  { value: 'any', label: 'Any Good Deal' },
]

export default function SellForm() {
  const [state, formAction, pending] = useActionState(submitSellForm, initialState)

  return (
    <>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.headerBg}></div>
        <div className={styles.headerContent}>
          <FadeIn>
            <span className="eyebrow">Sell Your Property</span>
            <h1 className={styles.headerTitle}>Tell Us About<br />Your Property</h1>
            <p className={styles.headerSubtitle}>We'll be back in touch within 24 hours.</p>
          </FadeIn>
        </div>
      </section>

      {/* Form Section */}
      <section className="section container">
        <div className={styles.formLayout}>
          {/* Left: Info panel */}
          <div className={styles.infoPanel}>
            <FadeIn>
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>What happens next?</h3>
                <div className={styles.infoSteps}>
                  <div className={styles.infoStep}>
                    <span className={styles.infoStepNum}>1</span>
                    <p>We review your submission and contact you within 24 hours.</p>
                  </div>
                  <div className={styles.infoStep}>
                    <span className={styles.infoStepNum}>2</span>
                    <p>We arrange a property visit at your convenience.</p>
                  </div>
                  <div className={styles.infoStep}>
                    <span className={styles.infoStepNum}>3</span>
                    <p>We match your property with a qualified investor.</p>
                  </div>
                  <div className={styles.infoStep}>
                    <span className={styles.infoStepNum}>4</span>
                    <p>Complete your sale — in as little as four weeks.</p>
                  </div>
                </div>
              </div>

              <div className={styles.guaranteeCard}>
                <div className={styles.guaranteeIcon}>✓</div>
                <div>
                  <strong>No Selling Fees</strong>
                  <p>You only pay our fee when your sale completes successfully.</p>
                </div>
              </div>

              <p className={styles.backLink}>
                <Link href="/sell" className="link-underline">← Back to Sell page</Link>
              </p>
            </FadeIn>
          </div>

          {/* Right: Form */}
          <div className={styles.formContainer}>
            <FadeIn delay={200}>
              {state.success ? (
                <div className={styles.successBox}>
                  <div className={styles.successIcon}>✓</div>
                  <h2 className={styles.successTitle}>Enquiry Received!</h2>
                  <p className={styles.successText}>{state.message}</p>
                  <Link href="/" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                    Back to Home
                  </Link>
                </div>
              ) : (
                <form className={styles.form} action={formAction}>
                  <h2 className={styles.formTitle}>Property Details</h2>

                  {state.message && !state.success && (
                    <p className={styles.errorMessage}>{state.message}</p>
                  )}

                  {/* Property Type Dropdown */}
                  <div className={styles.formGroup}>
                    <label htmlFor="propertyType" className={styles.label}>Property Type</label>
                    <div className={styles.selectWrapper}>
                      <select id="propertyType" name="propertyType" className={styles.select}>
                        {propertyTypeOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                      <span className={styles.selectArrow}>▾</span>
                    </div>
                  </div>

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

                  {/* Property Address */}
                  <div className={styles.formGroup}>
                    <label htmlFor="propertyAddress" className={styles.label}>Address of Sale Property *</label>
                    <textarea
                      id="propertyAddress"
                      name="propertyAddress"
                      className={styles.textarea}
                      rows={3}
                      required
                      placeholder="Full address of the property you want to sell"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%' }} disabled={pending}>
                    {pending ? 'Submitting...' : 'Submit Property Enquiry'}
                  </button>

                  <p className={styles.disclaimer}>
                    By submitting this form you agree to be contacted by our team regarding your property enquiry.
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
