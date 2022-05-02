import styles from './Home.module.css'
import Image from 'next/image'
import Video from 'twilio-video'
import { Client } from 'twilio-chat'
import { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { RoomContext } from '../../Context/RoomContext'
import { UserLogged } from './UserLogged/UserLogged'
import { useSession, signIn } from 'next-auth/react'

function Home () {
  const { data: session } = useSession()
  const [loading, setLoading] = useState(false)
  const { setRoom, setUsers, room, setChannel, setMessages, messages } = useContext(RoomContext)
  const router = useRouter()

  useEffect(() => {
    if (room) {
      room?.disconnect()
      setRoom(undefined)
    }
    if (messages) {
      setMessages([])
      setChannel(undefined)
    }
  }, [])

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    if (!session) { signIn() }
    setLoading(true)

    const participantConnected = participant => {
      setUsers(prevParticipants => [...prevParticipants, participant])
    }
    const participantDisconnected = participant => {
      setUsers(prevParticipants =>
        prevParticipants.filter(p => p !== participant)
      )
    }
    const newMessage = message => {
      const messageParsed = {
        message: message.state.body,
        author: message.state.author,
        sid: message.state.sid
      }
      setMessages(prevMessages => {
        return [...prevMessages, messageParsed]
      })
    }
    const room = evt.target.room.value
    const data = await fetch('/api/get-token', {
      method: 'POST',
      body: JSON.stringify({
        identity: session.user.name,
        room
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const response = await data.json()
    const token = response.token
    const chatClient = new Client(token)
    Video.connect(token, {
      name: room
    }).then((room) => {
      setRoom(room)
      room.on('participantConnected', participantConnected)
      room.on('participantDisconnected', participantDisconnected)
      room.participants.forEach(participantConnected)
      router.push(`/${room.name}`)
    }).catch(err => {
      console.log(err)
      setLoading(false)
    })
    chatClient.on('stateChanged', async (state) => {
      if (state === 'initialized') {
        const generalChannel = await chatClient.getChannelByUniqueName('general')
        generalChannel.on('messageAdded', newMessage)
        if (generalChannel.status !== 'joined') {
          generalChannel.join()
          setChannel(generalChannel)
        }
        generalChannel.delete()
        setChannel(generalChannel)
      }
    })
  }
  const date = new Intl.DateTimeFormat('en-US').format(Date.now())
  return (
    <>
      <header className={styles.header}>
        <ul className={styles.list}>
          <li className={styles.logo}>
            <Image src='/meetLogo.png' alt='meet Logo' height={33} width={58}/>
            <p>
              Twilio
              <span> Meet</span>
            </p>
          </li>
          <li className={styles.date}>{date}</li>
          <li className={styles.user}>
            <UserLogged/>
          </li>
        </ul>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h3>
            Video conferencias premium. Ahora gratis para todos
          </h3>
          <p>
            Rediseñamos Google Meet, nuestro servicio de reuniones de negocios seguras, de modo que sea gratuito y esté disponible para todos.
          </p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input type="text" id='room' name='room' required placeholder='Nombre de la sala' />
            {!loading && <button>Ingresar!</button> }
            {loading && <button disabled={true} >Connectando...</button> }
          </form>
        </section>
        <aside className={styles.aside}>
          <Image src='/mainAside.svg' alt='Aside logo' width={330} height={330} />
          <h4>Obtén un vinculo para compartir</h4>
          <p>Ingresa a una nueva sala y obten un vínculo que puedas enviar a las personas con quienes quieras reunirte.</p>
        </aside>
      </main>

    </>
  )
}

export { Home }
