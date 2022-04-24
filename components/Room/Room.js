import { useContext, useEffect } from 'react'
import { RoomContext } from '../../Context/RoomContext'
import { User } from '../User/User'
import { useRouter } from 'next/router'

function Room ({ roomName }) {
  const { room } = useContext(RoomContext)
  const router = useRouter()
  console.log({ room, roomName })

  useEffect(() => {
    // PANTALLA DE PREPARACION
    if (!room) router.push('/')
  }, [room, router])

  return (
    <>
      {room && <User participant={room.localParticipant}/>}
    </>
  )
}
export { Room }
