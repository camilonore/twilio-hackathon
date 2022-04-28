import { useContext } from 'react'
import { RoomContext } from '../../../Context/RoomContext'
import { User } from '../../User/User'
import { useRouter } from 'next/router'
import styles from './VideoCall.module.css'
import { Footer } from '../Footer/Footer'
import { useVideo } from '../../../hooks/useVideo'

function VideoCall () {
  const { room, users } = useContext(RoomContext)
  const router = useRouter()
  const { roomName } = router.query
  const { loading } = useVideo({ roomName })

  return (
    <div className={styles.room}>
      <main className={users.length > 0 ? styles.main : styles.alone}>
        {loading && <p style={{ color: 'white' }}>Loading...</p>}
        {room && <User userStyles={'user'} participant={room.localParticipant}/>}
        {users.length > 0 && users.map(user => {
          return <User userStyles={'user'} participant={user} key={user.sid}/>
        })}
      </main>
      <Footer roomName={roomName} usersCount={users.length + 1}/>
    </div>
  )
}
export { VideoCall }