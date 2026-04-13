import { getLeads } from '../actions'
import LeadsTable from './LeadsTable'
import styles from './page.module.css'

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; search?: string }>
}) {
  const { page: pageStr, search = '' } = await searchParams
  const page = Math.max(1, Number(pageStr) || 1)

  const { rows, total, stats } = await getLeads(page, search)
  const totalPages = Math.ceil(total / 10)

  return (
    <div className={styles.root}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarTop}>
          <div className={styles.brand}>
            <div className={styles.brandIcon}>
              <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
                <path d="M14 2L26 8V20L14 26L2 20V8L14 2Z" fill="#E0187F" fillOpacity="0.2" stroke="#E0187F" strokeWidth="1.5"/>
                <path d="M14 7L21 11V17L14 21L7 17V11L14 7Z" fill="#E0187F"/>
              </svg>
            </div>
            <div>
              <p className={styles.brandName}>PH Homes</p>
              <p className={styles.brandRole}>Admin Panel</p>
            </div>
          </div>

          <nav className={styles.nav}>
            <div className={styles.navLabel}>Main</div>
            <a href="/admin/dashboard" className={`${styles.navItem} ${styles.navActive}`}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="1" width="6" height="6" rx="1.5" fill="currentColor" fillOpacity="0.8"/>
                <rect x="9" y="1" width="6" height="6" rx="1.5" fill="currentColor" fillOpacity="0.4"/>
                <rect x="1" y="9" width="6" height="6" rx="1.5" fill="currentColor" fillOpacity="0.4"/>
                <rect x="9" y="9" width="6" height="6" rx="1.5" fill="currentColor" fillOpacity="0.4"/>
              </svg>
              Leads
              <span className={styles.navBadge}>{stats.total}</span>
            </a>
          </nav>
        </div>

        <div className={styles.sidebarBottom}>
          <div className={styles.adminInfo}>
            <div className={styles.adminAvatar}>A</div>
            <div>
              <p className={styles.adminName}>Admin</p>
              <p className={styles.adminEmail}>phomes.co.uk</p>
            </div>
          </div>
          <form action="/api/admin/logout" method="POST">
            <LogoutButton />
          </form>
        </div>
      </aside>

      {/* Main */}
      <main className={styles.main}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.pageTitle}>Leads</h1>
            <p className={styles.pageSub}>All contact form submissions from your website</p>
          </div>
        </header>

        {/* Stats */}
        <div className={styles.statsRow}>
          <div className={styles.stat}>
            <p className={styles.statLabel}>Total Leads</p>
            <p className={styles.statValue}>{stats.total}</p>
            <p className={styles.statHint}>all time</p>
          </div>
          <div className={styles.stat}>
            <p className={styles.statLabel}>This Month</p>
            <p className={styles.statValue}>{stats.this_month}</p>
            <p className={styles.statHint}>current month</p>
          </div>
          <div className={styles.stat}>
            <p className={styles.statLabel}>This Week</p>
            <p className={styles.statValue}>{stats.this_week}</p>
            <p className={styles.statHint}>last 7 days</p>
          </div>
        </div>

        {/* Table */}
        <LeadsTable
          rows={rows}
          total={total}
          page={page}
          totalPages={totalPages}
          search={search}
        />
      </main>
    </div>
  )
}

// Small client-boundary component just for the logout button
import LogoutButton from './LogoutButton'
