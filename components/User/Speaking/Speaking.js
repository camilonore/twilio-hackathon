import styles from './Speaking.module.css'

function Speaking () {
  return (
    <div className={styles.container}>
      <span className={styles.spanSide}/>
      <span className={styles.spanCenter}/>
      <span className={styles.spanSide}/>
    </div>
  )
}
export { Speaking }
