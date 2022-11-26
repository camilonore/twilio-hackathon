import styles from './AsideModal.module.css'

function AsideModal ({ children, title, handleClose }) {
  return (
    <aside className={styles.aside}>
      <header className={styles.header}>
        <p>{title}</p>
        <button onClick={handleClose} className={styles.closeButton}>&times;</button>
      </header>
      <main className={styles.main}>
        {children}
      </main>
    </aside>
  )
}

export { AsideModal }
