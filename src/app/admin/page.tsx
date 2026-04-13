'use client'

import { useActionState } from 'react'
import { login } from './actions'
import styles from './page.module.css'

export default function AdminLogin() {
  const [state, formAction, pending] = useActionState(login, {})

  return (
    <div className={styles.root}>
      <div className={styles.bg}>
        <div className={styles.grid} />
        <div className={styles.glow} />
      </div>

      <div className={styles.card}>
        <div className={styles.logoMark}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 2L26 8V20L14 26L2 20V8L14 2Z" fill="#E0187F" fillOpacity="0.2" stroke="#E0187F" strokeWidth="1.5"/>
            <path d="M14 7L21 11V17L14 21L7 17V11L14 7Z" fill="#E0187F"/>
          </svg>
        </div>

        <p className={styles.eyebrow}>PH Homes Admin</p>
        <h1 className={styles.heading}>Welcome back</h1>
        <p className={styles.sub}>Sign in to access your leads dashboard</p>

        <form className={styles.form} action={formAction}>
          {state?.error && (
            <div className={styles.errorBanner}>
              <span className={styles.errorDot} />
              {state.error}
            </div>
          )}

          <div className={styles.field}>
            <label className={styles.label} htmlFor="username">Username</label>
            <input
              className={styles.input}
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              placeholder="admin"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="password">Password</label>
            <input
              className={styles.input}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="••••••••••"
            />
          </div>

          <button className={styles.btn} type="submit" disabled={pending}>
            {pending ? (
              <span className={styles.spinner} />
            ) : (
              <>
                Sign In
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </>
            )}
          </button>
        </form>

        <p className={styles.footer}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect x="1" y="5" width="10" height="7" rx="1" stroke="#6b7280" strokeWidth="1.2"/>
            <path d="M3.5 5V3.5a2.5 2.5 0 015 0V5" stroke="#6b7280" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          Restricted access — authorised personnel only
        </p>
      </div>
    </div>
  )
}
