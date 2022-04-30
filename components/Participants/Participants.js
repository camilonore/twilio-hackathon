import styles from './Participants.module.css'
import { useContext } from 'react'
import { RoomContext } from '../../Context/RoomContext'
import { Card } from './Card/Card'

function Participants () {
  const { users, room } = useContext(RoomContext)
  return (
    <aside className={styles.aside}>
      <header className={styles.header}>
        <p>Personas</p>
        <button className={styles.closeButton}>&times;</button>
      </header>
      <main className={styles.main}>
        <p>En la llamada</p>
        <ul className={styles.list}>
          <Card username={`${room.localParticipant.identity} (Tú)`} />
          {users.lenght > 0 && users.map((user) => {
            return <Card key={user.sid} username={user.identity} />
          })}
        </ul>
      </main>
    </aside>
  )
}

export { Participants }
