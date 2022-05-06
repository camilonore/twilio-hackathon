import { useState, useContext } from 'react'
import styles from './Footer.module.css'
import { Button } from '../../Button/Button'
import { Mic, MicOff } from '../../Svg/Mic'
import { Cam, CamOff } from '../../Svg/Cam'
import { EndCall } from '../../Svg/EndCall'
import { People } from '../../Svg/People'
import { Chat } from '../../Svg/Chat'
import { useLocalVideoToggle } from '../../../hooks/useToggleVideo'
import { useLocalAudioToggle } from '../../../hooks/useToggleAudio'
import { RoomContext } from '../../../Context/RoomContext'

function Footer ({ roomName, usersCount, setIsParticipantsOpen, setIsChatOpen }) {
  const { room, setToken, setUsers, setChannel, setMessages, setRoom } = useContext(RoomContext)
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
  const handleExit = () => {
    room.disconnect()
    setIsParticipantsOpen(false)
    setIsChatOpen(false)
    setRoom(undefined)
    setToken(undefined)
    setChannel(undefined)
    setUsers([])
    setMessages([])
  }
  const handlePeople = () => {
    setIsParticipantsOpen(prev => !prev)
  }
  const handleChat = () => {
    setIsChatOpen(prev => !prev)
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
              <Button status='false' onClick={handleExit} style={{ width: '60px' }}>
                <EndCall/>
              </Button>
            </li>
          </div>
          <div>
            <Button status='none' onClick={handlePeople}>
              <People/>
              <span className={styles.peopleCount}>
                {usersCount}
              </span>
            </Button>
            <li>
              <Button status='none' onClick={handleChat} style={{ width: '40px' }}>
                <Chat/>
              </Button>
            </li>
          </div>
        </ul>
      </footer>
  )
}

export { Footer }
