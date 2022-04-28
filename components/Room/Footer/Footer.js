import { useState } from 'react'
import styles from './Footer.module.css'
import { Button } from '../../Button/Button'
import { Mic, MicOff } from '../../Svg/Mic'
import { Cam, CamOff } from '../../Svg/Cam'
import { EndCall } from '../../Svg/EndCall'
import { People } from '../../Svg/People'
import { Chat } from '../../Svg/Chat'
import { useLocalVideoToggle } from '../../../hooks/useToggleVideo'
import { useLocalAudioToggle } from '../../../hooks/useToggleAudio'

function Footer ({ roomName, usersCount }) {
  const [isOff, setIsOff] = useState({
    mic: false,
    cam: false
  })
  const { toggleVideo } = useLocalVideoToggle()
  const { toggleAudio } = useLocalAudioToggle()

  const handleMicClick = () => {
    setIsOff(prev => {
      return ({ ...prev, mic: !prev.mic })
    })
    toggleAudio()
  }
  const handleCamClick = () => {
    setIsOff(prev => {
      return ({ ...prev, cam: !prev.cam })
    })
    toggleVideo()
  }

  return (
    <footer className={styles.footer}>
        <ul className={styles.list}>
          <li className={styles.roomName}>{roomName}</li>
          <div>
            <li>
              <Button status={(isOff.mic).toString()} onClick={handleMicClick} style={{ width: '40px' }}>
                {isOff.mic === true ? <MicOff/> : <Mic/>}
              </Button>
            </li>
            <li>
              <Button status={(isOff.cam).toString()} onClick={handleCamClick} style={{ width: '40px' }}>
                {isOff.cam === true ? <CamOff/> : <Cam/>}
              </Button>
            </li>
            <li>
              <Button status='false' onClick={handleMicClick} style={{ width: '60px' }}>
                <EndCall/>
              </Button>
            </li>
          </div>
          <div>
            <li className={styles.people}>
              <People/>
              <span className={styles.peopleCount}>
                {usersCount}
              </span>
            </li>
            <li>
              <Button status='none' onClick={handleMicClick} style={{ width: '40px' }}>
                <Chat/>
              </Button>
            </li>
          </div>
        </ul>
      </footer>
  )
}

export { Footer }