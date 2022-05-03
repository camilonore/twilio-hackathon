import styles from './User.module.css'
import { useRef } from 'react'
import { useUser } from '../../hooks/useUser'

function User ({ participant }) {
  const videoRef = useRef()
  const audioRef = useRef()

  useUser({
    participant,
    videoRef,
    audioRef
  })
  return (
    <div className={styles.user}>
      <video autoPlay={true} ref={videoRef}/>
      <audio autoPlay={true} ref={audioRef}/>
      <p>{participant.identity}</p>
    </div>
  )
}
export { User }
