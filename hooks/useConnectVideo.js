import Video from 'twilio-video'
import { useContext } from 'react'
import { RoomContext } from '../Context/RoomContext'
import { useRouter } from 'next/router'

function useConnectVideo ({ roomName }) {
  const router = useRouter()
  const { token, setUsers, setRoom } = useContext(RoomContext)
  if (!token) router.push('/')
  const participantConnected = participant => {
    setUsers(prevParticipants => [...prevParticipants, participant])
  }
  const participantDisconnected = participant => {
    setUsers(prevParticipants =>
      prevParticipants.filter(p => p !== participant)
    )
  }

  Video.connect(token, {
    name: roomName
  }).then((room) => {
    setRoom(room)
    room.on('participantConnected', participantConnected)
    room.on('participantDisconnected', participantDisconnected)
    room.participants.forEach(participantConnected)
  }).catch(err => {
    console.log(err)
  })
}

export { useConnectVideo }
