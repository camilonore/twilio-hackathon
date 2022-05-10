import styles from './User.module.css'
import { useRef, useContext } from 'react'
import { useUser } from '../../hooks/useUser'
import { Speaking } from './Speaking/Speaking'
import { VideoCallContext } from '../../Context/VideoCallContext'

function User ({ participant }) {
  const { microOpen } = useContext(VideoCallContext)
  const videoRef = useRef()
  const audioRef = useRef()

  useUser({
    participant,
    videoRef,
    audioRef
  })
  return (
    <div className={styles.user}>
      {microOpen && <Speaking/>}
      <video autoPlay={true} ref={videoRef}/>
      <audio autoPlay={true} ref={audioRef}/>
      <p>{participant.identity}</p>
    </div>
  )
}
export { User }
