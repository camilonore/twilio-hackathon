import styles from './Chat.module.css'
import { useContext, useState, useRef } from 'react'
import { RoomContext } from '../../Context/RoomContext'
import { Send } from '../Svg/Send'
import { Card } from './Card/Card'
import { AsideModal } from '../AsideModal/AsideModal'

function Chat ({ setIsChatOpen }) {
  const { channel, messages } = useContext(RoomContext)
  const [disabled, setDisabled] = useState(false)
  const messagesRef = useRef(null)
  const handleClose = () => {
    setIsChatOpen(prev => !prev)
  }
  const handleSubmit = (evt) => {
    evt.preventDefault()
    setDisabled(true)
    const message = evt.target.message.value
    channel.sendMessage(message).then(() => {
      setDisabled(false)
      setTimeout(() => {
        messagesRef.current.lastChild.scrollIntoView()
      }, 0)
      evt.target.message.value = ''
    })
  }
  return (
    <AsideModal title='Mensajes en la llamada' handleClose={handleClose}>
      <section className={styles.messages} ref={messagesRef}>
        {messages.map(message => <Card message={message} key={message.sid}/>)}
      </section>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input type="text" className={styles.input} name='message' placeholder='Envia un mensaje a todos' required/>
          <button className={styles.button} disabled={disabled}>
            <Send/>
          </button>
        </div>
      </form>
    </AsideModal>
  )
}

export { Chat }
