import { createContext, useState } from 'react'

const RoomContext = createContext()

function RoomProvider ({ children }) {
  const [room, setRoom] = useState(undefined)
  const [token, setToken] = useState(undefined)
  const [users, setUsers] = useState([])
  const [channel, setChannel] = useState(undefined)
  const [messages, setMessages] = useState([])
  const [dominantSpeaker, setDominantSpeaker] = useState([])

  return (
    <RoomContext.Provider value={{
      room,
      setRoom,
      token,
      setToken,
      users,
      setUsers,
      messages,
      setMessages,
      channel,
      setChannel,
      dominantSpeaker,
      setDominantSpeaker
    }}>
      {children}
    </RoomContext.Provider>
  )
}

export { RoomContext, RoomProvider }
