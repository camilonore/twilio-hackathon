import styles from './Card.module.css'

function Card ({ username }) {
  return (
    <li>
      <p className={styles.username}>{username}</p>
    </li>
  )
}
export { Card }
