import { createContext, useState } from 'react'

const RoomContext = createContext()

function RoomProvider ({ children }) {
  const [room, setRoom] = useState(undefined)
  const [users, setUsers] = useState([])
  const [token, setToken] = useState(undefined)

  return (
    <RoomContext.Provider value={{
      room,
      setRoom,
      users,
      setUsers,
      token,
      setToken
    }}>
      {children}
    </RoomContext.Provider>
  )
}

export { RoomContext, RoomProvider }
