import { useCallback, useContext, useState } from 'react'
import { RoomContext } from '../Context/RoomContext'

function useLocalAudioToggle () {
  const { room } = useContext(RoomContext)
  const [isOpen, setIsOpen] = useState(true)
  const localParticipant = room?.localParticipant ?? undefined

  const toggleAudio = useCallback(() => {
    if (localParticipant) {
      if (isOpen) {
        localParticipant.audioTracks.forEach(track => {
          track.track.disable()
          setIsOpen(false)
        })
      } else {
        localParticipant.audioTracks.forEach(track => {
          track.track.enable()
          setIsOpen(true)
        })
      }
    }
  }, [localParticipant, isOpen])

  return { toggleAudio }
}

export { useLocalAudioToggle }
