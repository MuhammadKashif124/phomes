'use client'

import { logout } from '../actions'
import styles from './page.module.css'

export default function LogoutButton() {
  return (
    <button className={styles.logoutBtn} type="button" onClick={() => logout()}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M5 2H2a1 1 0 00-1 1v8a1 1 0 001 1h3M9 10l3-3-3-3M12 7H5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      Sign out
    </button>
  )
}
