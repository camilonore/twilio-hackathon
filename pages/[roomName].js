import { VideoCall } from '../components/Room/VideoCall/VideoCall'
import { useRouter } from 'next/router'
import { useConnectVideo } from '../hooks/useConnectVideo'
import { LoadingScreen } from '../components/LoadingScreen/LoadingScreen'
import { useEffect } from 'react'

export default function Handler () {
  const router = useRouter()
  const { roomName, room, setRoom } = router.query
  const { loading } = useConnectVideo(roomName)

  useEffect(() => {
    if (room === undefined) router.push('/')
    window.onbeforeunload = () => {
      room?.disconnect()
      setRoom(undefined)
    }
  }, [room, router])

  return (
    <>
      {loading && <LoadingScreen/>}
      <VideoCall roomName={roomName}/>
    </>
  )
}
