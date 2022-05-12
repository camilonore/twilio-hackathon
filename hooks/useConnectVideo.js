import Video from 'twilio-video'
import { useContext, useEffect, useState } from 'react'
import { RoomContext } from '../Context/RoomContext'
import { useRouter } from 'next/router'

function useConnectVideo (roomName) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const { token, setUsers, setRoom, setDominantSpeaker } = useContext(RoomContext)

  useEffect(() => {
    if (!token) {
      router.push('/')
      return
    }
    setLoading(true)
    const participantConnected = participant => {
      setUsers(prevParticipants => {
        const participants = prevParticipants.filter(_participant => {
          return _participant.sid !== participant.sid
        })
        return [...participants, participant]
      })
    }
    const participantDisconnected = participant => {
      setUsers(prevParticipants => {
        return prevParticipants.filter(p => p !== participant)
      })
      setDominantSpeaker(prevDominantSpeaker => {
        return prevDominantSpeaker === participant ? null : prevDominantSpeaker
      })
    }
    const dominantSpeakerChanged = (speaker) => {
      setDominantSpeaker(speaker)
    }
    Video.connect(token, {
      name: roomName,
      dominantSpeaker: true
    }).then((room) => {
      room.on('dominantSpeakerChanged', dominantSpeakerChanged)
      room.on('participantConnected', participantConnected)
      room.on('participantDisconnected', participantDisconnected)
      room.participants.forEach(participantConnected)
      setRoom(room)
      setLoading(false)
    }).catch(err => {
      console.log(err)
      setLoading(false)
    })
  }, [roomName, token])

  return { loading }
}

export { useConnectVideo }
