import { useState, useEffect } from 'react'
import { trackMapToTrack } from '../utils/trackMapToTrack'

function useUser ({ videoTracks, audioTracks, videoRef, audioRef }) {
  const [userVideo, setUserVideo] = useState({})
  const [userAudio, setUserAudio] = useState({})

  useEffect(() => {
    setUserVideo(trackMapToTrack(videoTracks))
    setUserAudio(trackMapToTrack(audioTracks))
    return () => {
      setUserVideo([])
      setUserAudio([])
    }
  }, [videoTracks, audioTracks])

  useEffect(() => {
    const videoTrack = userVideo[0]
    if (videoTrack) {
      videoTrack.attach(videoRef.current)
      return () => {
        videoTrack.detach()
      }
    }
  }, [userVideo, videoRef])

  useEffect(() => {
    const audioTrack = userAudio[0]
    if (audioTrack) {
      audioTrack.attach(audioRef.current)
      return () => {
        audioTrack.detach()
      }
    }
  }, [userAudio, audioRef])

  return { userVideo, userAudio }
}

export { useUser }
