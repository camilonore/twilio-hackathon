import { VideoCall } from '../components/Room/VideoCall/VideoCall'
import { useRouter } from 'next/router'
import { useConnectVideo } from '../hooks/useConnectVideo'
import { LoadingScreen } from '../components/LoadingScreen/LoadingScreen'
import { useConnectChat } from '../hooks/useConnectChat'
import { VideoCallProvider } from '../Context/VideoCallContext'

export default function Handler () {
  const router = useRouter()
  const { roomName } = router.query
  const { loading: loadingVideo } = useConnectVideo(roomName)
  useConnectChat(roomName)

  return (
    <VideoCallProvider>
      {loadingVideo && <LoadingScreen/>}
      <VideoCall roomName={roomName}/>
    </VideoCallProvider>
  )
}
