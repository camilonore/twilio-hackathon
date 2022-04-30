import { createContext, useState } from 'react'

const RoomContext = createContext()

function RoomProvider ({ children }) {
  const [room, setRoom] = useState(undefined)
  const [users, setUsers] = useState([])
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <RoomContext.Provider value={{
      room,
      setRoom,
      users,
      setUsers,
      isChatOpen,
      setIsChatOpen
    }}>
      {children}
    </RoomContext.Provider>
  )
}

export { RoomContext, RoomProvider }
