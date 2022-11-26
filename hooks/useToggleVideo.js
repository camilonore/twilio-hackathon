import { useCallback, useContext, useState } from 'react'
import { RoomContext } from '../Context/RoomContext'

function useLocalVideoToggle () {
  const { room } = useContext(RoomContext)
  const [isOpen, setIsOpen] = useState(true)
  const localParticipant = room?.localParticipant ?? undefined

  const toggleVideo = useCallback(() => {
    if (localParticipant) {
      if (isOpen) {
        localParticipant.videoTracks.forEach(track => {
          track.track.disable()
          setIsOpen(false)
        })
      } else {
        localParticipant.videoTracks.forEach(track => {
          track.track.enable()
          setIsOpen(true)
        })
      }
    }
  }, [localParticipant, isOpen])

  return { toggleVideo }
}

export { useLocalVideoToggle }
