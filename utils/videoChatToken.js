import twilio from 'twilio'
import { config } from '../config/config'
const AccessToken = twilio.jwt.AccessToken
const { VideoGrant } = AccessToken
const { ChatGrant } = AccessToken

const CHAT_SID = config.chatSid

const generateToken = () => {
  return new AccessToken(
    config.accountSid,
    config.apiKey,
    config.apiSecret
  )
}

const videoChatToken = (identity, room, config) => {
  let videoGrant
  let chatGrant
  if (typeof room !== 'undefined') {
    videoGrant = new VideoGrant({ room })
    chatGrant = new ChatGrant({ serviceSid: CHAT_SID })
  } else {
    videoGrant = new VideoGrant()
    chatGrant = new ChatGrant()
  }
  const token = generateToken(config)
  token.addGrant(videoGrant)
  token.addGrant(chatGrant)
  token.identity = identity
  return token
}

export { videoChatToken }
