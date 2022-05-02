import { createContext, useState } from 'react'

const RoomContext = createContext()

function RoomProvider ({ children }) {
  const [room, setRoom] = useState(undefined)
  const [users, setUsers] = useState([])
  const [channel, setChannel] = useState(undefined)
  const [messages, setMessages] = useState([])

  return (
    <RoomContext.Provider value={{
      room,
      setRoom,
      users,
      setUsers,
      channel,
      setChannel,
      messages,
      setMessages
    }}>
      {children}
    </RoomContext.Provider>
  )
}

export { RoomContext, RoomProvider }
