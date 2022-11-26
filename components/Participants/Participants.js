import { AsideModal } from '../AsideModal/AsideModal'
import styles from './Participants.module.css'
import { Card } from './Card/Card'
import { useContext } from 'react'
import { RoomContext } from '../../Context/RoomContext'

function Participants ({ setIsParticipantsOpen }) {
  const { room, users } = useContext(RoomContext)
  const handleClose = () => {
    setIsParticipantsOpen(prev => !prev)
  }
  return (
    <AsideModal title='Personas' handleClose={handleClose}>
      <p>En la llamada</p>
      <ul className={styles.list}>
        <Card username={`${room.localParticipant.identity} (Tú)`} />
        {users.map((user) => {
          return <Card key={user.sid} username={user.identity} />
        })}
      </ul>
    </AsideModal>
  )
}

export { Participants }
