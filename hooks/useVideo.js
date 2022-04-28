import { useEffect, useState, useContext } from 'react'
import { RoomContext } from '../Context/RoomContext'
import { useRouter } from 'next/router'
import Video from 'twilio-video'

function useVideo ({ roomName }) {
  const router = useRouter()
  const { setRoom, setUsers, token } = useContext(RoomContext)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const userConnected = user => {
      setUsers(prevUsers => [...prevUsers, user])
    }

    const userDisconnected = user => {
      console.log({ user })
      setUsers(prevUsers => {
        prevUsers.filter(p => p !== user)
      })
    }

    if (token) {
      Video.connect(token, {
        name: roomName
      }).then(room => {
        setRoom(room)
        setLoading(false)
        room.on('participantConnected', userConnected)
        room.on('participantDisconnected', userDisconnected)
        room.participants.forEach(userConnected)
      })
    } else {
      router.push('/')
    }

    return () => {
      setRoom(currentRoom => {
        if (currentRoom && currentRoom.localParticipant.state === 'connected') {
          currentRoom.localParticipant.tracks.forEach(trackPublication => {
            trackPublication.track.stop()
          })
          currentRoom.disconnect()
          return null
        } else {
          return currentRoom
        }
      })
    }
  }, [roomName, router, setRoom, setUsers, token])

  return { loading }
}

export { useVideo }
