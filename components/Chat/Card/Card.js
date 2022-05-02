import styles from './Card.module.css'

function Card ({ message }) {
  return (
    <div className={styles.messageContainer}>
      <p className={styles.author}>{message.author}</p>
      <p className={styles.message}>{message.message}</p>
    </div>
  )
}

export { Card }
