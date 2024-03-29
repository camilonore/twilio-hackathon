import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { RoomContext } from '../Context/RoomContext'
import { Client } from 'twilio-chat'

function useConnectChat (roomName) {
  const { setMessages, setChannel, token } = useContext(RoomContext)
  const router = useRouter()

  const handleMessageAdded = message => {
    setMessages(prevMessages => {
      const messages = prevMessages.filter(_message => {
        return _message.sid !== message.sid
      })
      return [...messages, message]
    })
  }

  const joinChannel = async (channel) => {
    if (channel.channelState.status !== 'joined') {
      await channel.join()
    }
    setChannel(channel)
    channel.on('messageAdded', handleMessageAdded)
  }

  useEffect(() => {
    if (!token) {
      router.push('/')
      return
    }

    (async () => {
      const client = await Client.create(token)
      client.on('tokenAboutToExpire', async () => {
        client.updateToken(token)
      })
      client.on('tokenExpired', async () => {
        client.updateToken(token)
      })
      try {
        const channel = await client.getChannelByUniqueName(roomName)
        joinChannel(channel)
        setChannel(channel)
      } catch (err) {
        try {
          const channel = await client.createChannel({
            uniqueName: roomName,
            friendlyName: roomName
          })
          joinChannel(channel)
        } catch {
          throw new Error('Unable to create channel, please reload this page')
        }
      }
    })()
  }, [])
}
export { useConnectChat }
