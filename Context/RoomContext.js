import { createContext, useState } from 'react'

const RoomContext = createContext()

function RoomProvider ({ children }) {
  const [room, setRoom] = useState(undefined)

  return (
    <RoomContext.Provider value={{
      room,
      setRoom
    }}>
      {children}
    </RoomContext.Provider>
  )
}

export { RoomContext, RoomProvider }
