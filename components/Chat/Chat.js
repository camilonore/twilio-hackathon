import styles from './Chat.module.css'
import { useContext } from 'react'
import { RoomContext } from '../../Context/RoomContext'
import { Send } from '../Svg/Send'

function Chat ({ setIsChatOpen }) {
  const { room, users } = useContext(RoomContext)
  const handleClose = () => {
    setIsChatOpen(prev => !prev)
  }
  return (
      <aside className={styles.aside}>
        <header className={styles.header}>
          <p>Mensajes en la llamada</p>
          <button onClick={handleClose} className={styles.closeButton}>&times;</button>
        </header>
        <main className={styles.main}>
          <section className={styles.messages}>
            <p>Hello</p>
          </section>
          <form className={styles.form}>
            <div className={styles.inputContainer}>
              <input type="text" className={styles.input} placeholder='Envia un mensaje a todos'/>
              <button className={styles.button}>
                <Send/>
              </button>
            </div>
          </form>
        </main>
      </aside>
  )
}

export { Chat }
