import twilio from 'twilio'
import { config } from '../config/config'
const AccessToken = twilio.jwt.AccessToken
const { VideoGrant } = AccessToken

const generateToken = () => {
  return new AccessToken(
    config.accountSid,
    config.apiKey,
    config.apiSecret
  )
}

const videoChatToken = (identity, room, config) => {
  let videoGrant
  if (typeof room !== 'undefined') {
    videoGrant = new VideoGrant({ room })
  } else {
    videoGrant = new VideoGrant()
  }
  const token = generateToken(config)
  token.addGrant(videoGrant)
  token.identity = identity
  return token
}

export { videoChatToken }
