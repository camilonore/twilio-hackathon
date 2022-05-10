import styles from './Chat.module.css'
import { useState, useRef, useContext } from 'react'
import { Send } from '../Svg/Send'
import { Card } from './Card/Card'
import { AsideModal } from '../AsideModal/AsideModal'
import { RoomContext } from '../../Context/RoomContext'
import { VideoCallContext } from '../../Context/VideoCallContext'

function Chat () {
  const { setIsChatOpen } = useContext(VideoCallContext)
  const { messages, channel } = useContext(RoomContext)
  const [disabled, setDisabled] = useState(false)
  const messagesRef = useRef(null)
  const handleClose = () => {
    setIsChatOpen(prev => !prev)
  }
  const scrollToBottom = () => {
    const scrollHeight = messagesRef.current.scrollHeight
    messagesRef.current.scrollTo(0, scrollHeight)
  }
  const handleSubmit = (evt) => {
    evt.preventDefault()
    setDisabled(true)
    const message = evt.target.message.value
    channel.sendMessage(String(message).trim()).then(() => {
      scrollToBottom()
      evt.target.message.value = ''
      setDisabled(false)
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
