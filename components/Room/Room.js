import { useContext, useEffect } from 'react'
import { RoomContext } from '../../Context/RoomContext'
import { User } from '../User/User'
import { useRouter } from 'next/router'
import styles from './Room.module.css'

function Room ({ roomName }) {
  const { room, users } = useContext(RoomContext)
  const router = useRouter()

  useEffect(() => {
    // PANTALLA DE PREPARACION
    if (!room) router.push('/')
  }, [room, router])

  return (
    <div className={styles.room}>
      <main className={styles.main}>
        {room && <User participant={room.localParticipant}/>}
        {users.length > 0 && users.map(user => {
          return <User participant={user} key={user.sid}/>
        })}
      </main>
      <footer className={styles.footer}>
        <ul className={styles.list}>
          <li>{roomName}</li>
          <div>
            <li>🎙</li>
            <li>📽</li>
            <li>📵</li>
          </div>
          <li>{users.length + 1}</li>
        </ul>
      </footer>
    </div>
  )
}
export { Room }
