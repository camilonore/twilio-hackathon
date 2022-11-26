import { createContext, useState } from 'react'

const VideoCallContext = createContext()

function VideoCallProvider ({ children }) {
  const [microOpen, setMicroOpen] = useState(true)
  const [isParticipantsOpen, setIsParticipantsOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <VideoCallContext.Provider value={{
      microOpen,
      setMicroOpen,
      isParticipantsOpen,
      setIsParticipantsOpen,
      isChatOpen,
      setIsChatOpen
    }}>
      {children}
    </VideoCallContext.Provider>
  )
}

export { VideoCallContext, VideoCallProvider }
