import { createContext, useState } from 'react'

const RoomContext = createContext()

function RoomProvider ({ children }) {
  const [room, setRoom] = useState(undefined)
  const [users, setUsers] = useState([])

  return (
    <RoomContext.Provider value={{
      room,
      setRoom,
      users,
      setUsers
    }}>
      {children}
    </RoomContext.Provider>
  )
}

export { RoomContext, RoomProvider }
