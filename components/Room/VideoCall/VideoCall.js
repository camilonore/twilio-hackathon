import { useContext, useState } from 'react'
import { RoomContext } from '../../../Context/RoomContext'
import { User } from '../../User/User'
import { useRouter } from 'next/router'
import styles from './VideoCall.module.css'
import { Footer } from '../Footer/Footer'
import { Participants } from '../../Participants/Participants'

function VideoCall () {
  const { room, users } = useContext(RoomContext)
  const [isParticipantsOpen, setIsParticipantsOpen] = useState(false)
  const router = useRouter()
  const { roomName } = router.query

  return (
    <div className={styles.room}>
      <main className={users.length > 0 ? styles.main : styles.alone}>
        {room && <User userStyles={'user'} participant={room.localParticipant}/>}
        {users.length > 0 && users.map(user => {
          return <User userStyles={'user'} participant={user} key={user.sid}/>
        })}
        {isParticipantsOpen && <Participants setIsParticipantsOpen={setIsParticipantsOpen}/>}
      </main>
      <Footer roomName={roomName} usersCount={users.length + 1} setIsParticipantsOpen={setIsParticipantsOpen}/>
    </div>
  )
}
export { VideoCall }
