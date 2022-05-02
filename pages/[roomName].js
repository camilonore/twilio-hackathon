import { VideoCall } from '../components/Room/VideoCall/VideoCall'
import { useEffect, useContext } from 'react'
import { RoomContext } from '../Context/RoomContext'
import { useRouter } from 'next/router'

export default function Handler () {
  const { room, setRoom, channel, setChannel } = useContext(RoomContext)

  const router = useRouter()
  useEffect(() => {
    if (room === undefined) router.push('/')
    window.onbeforeunload = () => {
      room?.disconnect()
      setRoom(undefined)
      channel.leave()
      setChannel(undefined)
    }
  }, [room, router])
  return (
    <>
      <VideoCall/>
    </>
  )
}
