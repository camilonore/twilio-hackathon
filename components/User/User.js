import styles from './User.module.css'
import { useRef } from 'react'
import { useUser } from '../../hooks/useUser'
import { Speaking } from './Speaking/Speaking'

function User ({ participant, speaking }) {
  const videoRef = useRef()
  const audioRef = useRef()

  useUser({
    participant,
    videoRef,
    audioRef
  })
  return (
    <div className={styles.user}>
      {speaking && <Speaking/>}
      <video autoPlay={true} ref={videoRef}/>
      <audio autoPlay={true} ref={audioRef}/>
      <p>{participant.identity}</p>
    </div>
  )
}
export { User }
