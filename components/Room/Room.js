import { useContext, useEffect } from 'react'
import { RoomContext } from '../../Context/RoomContext'
import { User } from '../User/User'
import { useRouter } from 'next/router'

function Room ({ roomName }) {
  const { room, users } = useContext(RoomContext)
  const router = useRouter()

  useEffect(() => {
    // PANTALLA DE PREPARACION
    if (!room) router.push('/')
  }, [room, router])

  return (
    <>
      <h1>{roomName}</h1>
      {room && <User participant={room.localParticipant}/>}
      {users.length > 0 && users.map(user => {
        return <User participant={user} key={user.sid}/>
      })}
    </>
  )
}
export { Room }
