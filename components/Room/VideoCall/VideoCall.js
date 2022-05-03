import { useContext, useState } from 'react'
import { RoomContext } from '../../../Context/RoomContext'
import { User } from '../../User/User'
import styles from './VideoCall.module.css'
import { Footer } from '../Footer/Footer'
import { Participants } from '../../Participants/Participants'
import { Chat } from '../../Chat/Chat'

function VideoCall ({ roomName }) {
  const { room, users } = useContext(RoomContext)
  const [isParticipantsOpen, setIsParticipantsOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div className={styles.room}>
      <main className={users?.length > 0 ? styles.main : styles.alone}>
        {room?.localParticipant.state === 'connected' && <User participant={room.localParticipant}/>}
        {users.length > 0 && users.map(user => {
          return <User participant={user} key={user.sid}/>
        })}
        {isParticipantsOpen && <Participants setIsParticipantsOpen={setIsParticipantsOpen}/>}
        {isChatOpen && <Chat setIsChatOpen={setIsChatOpen}/>}
      </main>
      <Footer roomName={roomName} usersCount={users.length + 1} setIsChatOpen={setIsChatOpen} setIsParticipantsOpen={setIsParticipantsOpen}/>
    </div>
  )
}
export { VideoCall }
