import { videoChatToken } from '../../utils/videoChatToken'

export default function handler (req, res) {
  const sendTokenResponse = (token, res) => {
    return res.send(
      JSON.stringify({
        token: token.toJwt()
      })
    )
  }

  if (req.method === 'GET') {
    const identity = req.query.identity
    const room = req.query.room
    if (!identity || !room) {
      return res.status(400).send('Identity and Room required')
    }
    const token = videoChatToken(identity, room)
    sendTokenResponse(token, res)
  } else if (req.method === 'POST') {
    const identity = req.body.identity
    const room = req.body.room
    if (!identity || !room) {
      return res.status(400).send('Identity and Room required')
    }
    const token = videoChatToken(identity, room)
    sendTokenResponse(token, res)
  }
}
