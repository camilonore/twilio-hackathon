import { useRouter } from 'next/router'
import { Room } from '../components/Room/Room'

export default function Handler () {
  const router = useRouter()
  const { roomName } = router.query

  return (
    <Room roomName={roomName}/>
  )
}
