'use client'

import { useState, useTransition, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { deleteLead, updateLead, createLead, type Lead } from '../actions'
import styles from './page.module.css'

type Props = {
  rows: Lead[]
  total: number
  page: number
  totalPages: number
  search: string
}

type ModalMode = 'edit' | 'create' | null

const emptyForm = { first_name: '', last_name: '', email: '', phone: '', message: '' }

export default function LeadsTable({ rows, total, page, totalPages, search }: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const [modalMode, setModalMode] = useState<ModalMode>(null)
  const [editTarget, setEditTarget] = useState<Lead | null>(null)
  const [form, setForm] = useState(emptyForm)
  const [deleteTarget, setDeleteTarget] = useState<Lead | null>(null)
  const [toast, setToast] = useState<{ msg: string; type: 'ok' | 'err' } | null>(null)
  const [searchVal, setSearchVal] = useState(search)
  const searchRef = useRef<HTMLInputElement>(null)

  function showToast(msg: string, type: 'ok' | 'err' = 'ok') {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3000)
  }

  function refresh() {
    startTransition(() => router.refresh())
  }

  // ── Search ────────────────────────────────────────────────────────────────
  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    router.push(`/admin/dashboard?search=${encodeURIComponent(searchVal)}&page=1`)
  }

  function clearSearch() {
    setSearchVal('')
    router.push('/admin/dashboard')
  }

  // ── Delete ────────────────────────────────────────────────────────────────
  async function confirmDelete() {
    if (!deleteTarget) return
    try {
      await deleteLead(deleteTarget.id)
      setDeleteTarget(null)
      showToast('Lead deleted.')
      refresh()
    } catch {
      showToast('Delete failed.', 'err')
    }
  }

  // ── Edit ──────────────────────────────────────────────────────────────────
  function openEdit(lead: Lead) {
    setEditTarget(lead)
    setForm({
      first_name: lead.first_name,
      last_name: lead.last_name,
      email: lead.email,
      phone: lead.phone ?? '',
      message: lead.message,
    })
    setModalMode('edit')
  }

  function openCreate() {
    setEditTarget(null)
    setForm(emptyForm)
    setModalMode('create')
  }

  async function handleSave() {
    if (!form.first_name || !form.last_name || !form.email || !form.message) {
      showToast('Fill in all required fields.', 'err')
      return
    }
    try {
      if (modalMode === 'edit' && editTarget) {
        await updateLead(editTarget.id, form)
        showToast('Lead updated.')
      } else {
        await createLead(form)
        showToast('Lead created.')
      }
      setModalMode(null)
      refresh()
    } catch {
      showToast('Save failed.', 'err')
    }
  }

  // ── Pagination ────────────────────────────────────────────────────────────
  function goPage(p: number) {
    router.push(`/admin/dashboard?search=${encodeURIComponent(search)}&page=${p}`)
  }

  const from = total === 0 ? 0 : (page - 1) * 10 + 1
  const to = Math.min(page * 10, total)

  return (
    <>
      {/* Toolbar */}
      <div className={styles.toolbar}>
        <form className={styles.searchForm} onSubmit={handleSearch}>
          <div className={styles.searchWrap}>
            <svg className={styles.searchIcon} width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.3"/>
              <path d="M9.5 9.5L12 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            <input
              ref={searchRef}
              className={styles.searchInput}
              placeholder="Search by name, email, message…"
              value={searchVal}
              onChange={e => setSearchVal(e.target.value)}
            />
            {searchVal && (
              <button type="button" className={styles.clearBtn} onClick={clearSearch}>✕</button>
            )}
          </div>
          <button className={styles.searchBtn} type="submit">Search</button>
        </form>

        <button className={styles.addBtn} onClick={openCreate}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
          Add Lead
        </button>
      </div>

      {/* Table */}
      <div className={styles.tableWrap}>
        {rows.length === 0 ? (
          <div className={styles.empty}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect x="6" y="8" width="28" height="24" rx="3" stroke="#333348" strokeWidth="1.5"/>
              <path d="M12 16h16M12 21h10" stroke="#333348" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <p>{search ? `No leads match "${search}"` : 'No leads yet'}</p>
          </div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((lead) => (
                <tr key={lead.id} className={styles.row}>
                  <td className={styles.idCell}>{lead.id}</td>
                  <td className={styles.nameCell}>
                    <div className={styles.avatar}>
                      {lead.first_name[0]}{lead.last_name[0]}
                    </div>
                    <span>{lead.first_name} {lead.last_name}</span>
                  </td>
                  <td className={styles.monoCell}>
                    <a href={`mailto:${lead.email}`} className={styles.emailLink}>{lead.email}</a>
                  </td>
                  <td className={styles.monoCell}>{lead.phone || <span className={styles.nil}>—</span>}</td>
                  <td className={styles.msgCell} title={lead.message}>
                    {lead.message.length > 60 ? lead.message.slice(0, 60) + '…' : lead.message}
                  </td>
                  <td className={styles.monoCell}>
                    {new Date(lead.created_at).toLocaleDateString('en-GB', {
                      day: '2-digit', month: 'short', year: 'numeric'
                    })}
                  </td>
                  <td>
                    <div className={styles.actions}>
                      <button className={styles.editBtn} onClick={() => openEdit(lead)} title="Edit">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M9.5 2.5l2 2L4 12H2v-2L9.5 2.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <button className={styles.delBtn} onClick={() => setDeleteTarget(lead)} title="Delete">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 4h10M5 4V2.5h4V4M5.5 6.5v4M8.5 6.5v4M3 4l.7 7.5h6.6L11 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <span className={styles.paginationInfo}>
            {from}–{to} of {total} leads
          </span>
          <div className={styles.paginationBtns}>
            <button
              className={styles.pageBtn}
              onClick={() => goPage(page - 1)}
              disabled={page <= 1}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L5 7l4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
              const p = totalPages <= 7 ? i + 1 : i + Math.max(1, page - 3)
              if (p > totalPages) return null
              return (
                <button
                  key={p}
                  className={`${styles.pageBtn} ${p === page ? styles.pageBtnActive : ''}`}
                  onClick={() => goPage(p)}
                >
                  {p}
                </button>
              )
            })}
            <button
              className={styles.pageBtn}
              onClick={() => goPage(page + 1)}
              disabled={page >= totalPages}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 2l4 5-4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* ── Edit / Create Modal ─────────────────────────────────────────────── */}
      {modalMode && (
        <div className={styles.overlay} onClick={() => setModalMode(null)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>
                {modalMode === 'edit' ? 'Edit Lead' : 'Add New Lead'}
              </h2>
              <button className={styles.modalClose} onClick={() => setModalMode(null)}>✕</button>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalRow}>
                <div className={styles.modalField}>
                  <label className={styles.modalLabel}>First Name *</label>
                  <input
                    className={styles.modalInput}
                    value={form.first_name}
                    onChange={e => setForm(f => ({ ...f, first_name: e.target.value }))}
                  />
                </div>
                <div className={styles.modalField}>
                  <label className={styles.modalLabel}>Last Name *</label>
                  <input
                    className={styles.modalInput}
                    value={form.last_name}
                    onChange={e => setForm(f => ({ ...f, last_name: e.target.value }))}
                  />
                </div>
              </div>

              <div className={styles.modalField}>
                <label className={styles.modalLabel}>Email *</label>
                <input
                  className={styles.modalInput}
                  type="email"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                />
              </div>

              <div className={styles.modalField}>
                <label className={styles.modalLabel}>Phone</label>
                <input
                  className={styles.modalInput}
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                />
              </div>

              <div className={styles.modalField}>
                <label className={styles.modalLabel}>Message *</label>
                <textarea
                  className={styles.modalTextarea}
                  rows={4}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                />
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button className={styles.cancelBtn} onClick={() => setModalMode(null)}>Cancel</button>
              <button className={styles.saveBtn} onClick={handleSave}>
                {modalMode === 'edit' ? 'Save Changes' : 'Create Lead'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Delete Confirm ──────────────────────────────────────────────────── */}
      {deleteTarget && (
        <div className={styles.overlay} onClick={() => setDeleteTarget(null)}>
          <div className={`${styles.modal} ${styles.modalSm}`} onClick={e => e.stopPropagation()}>
            <div className={styles.deleteIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" stroke="#E0187F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 11v5M14 11v5" stroke="#E0187F" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h2 className={styles.modalTitle}>Delete Lead?</h2>
            <p className={styles.deleteMsg}>
              This will permanently remove <strong>{deleteTarget.first_name} {deleteTarget.last_name}</strong> from your database. This cannot be undone.
            </p>
            <div className={styles.modalFooter}>
              <button className={styles.cancelBtn} onClick={() => setDeleteTarget(null)}>Cancel</button>
              <button className={styles.deleteConfirmBtn} onClick={confirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Toast ──────────────────────────────────────────────────────────── */}
      {toast && (
        <div className={`${styles.toast} ${toast.type === 'err' ? styles.toastErr : ''}`}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            {toast.type === 'ok'
              ? <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              : <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            }
          </svg>
          {toast.msg}
        </div>
      )}
    </>
  )
}
