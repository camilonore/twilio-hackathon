import { useContext } from 'react'
import { RoomContext } from '../../../Context/RoomContext'
import { User } from '../../User/User'
import styles from './VideoCall.module.css'
import { Footer } from '../Footer/Footer'
import { Participants } from '../../Participants/Participants'
import { Chat } from '../../Chat/Chat'
import { VideoCallContext } from '../../../Context/VideoCallContext'

function VideoCall ({ roomName }) {
  const { room, users } = useContext(RoomContext)
  const { isChatOpen, isParticipantsOpen } = useContext(VideoCallContext)

  return (
    <div className={styles.room}>
      <main className={users?.length > 0 ? styles.main : styles.alone}>
        {room?.localParticipant.state === 'connected' && <User participant={room.localParticipant}/>}
        {users.length > 0 && users.map(user => {
          return <User participant={user} key={user.sid}/>
        })}
        {isParticipantsOpen && <Participants />}
        {isChatOpen && <Chat/>}
      </main>
      <Footer roomName={roomName} usersCount={users.length + 1} />
    </div>
  )
}
export { VideoCall }
