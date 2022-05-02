const config = {
  accountSid: process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID,
  apiKey: process.env.NEXT_PUBLIC_TWILIO_API_KEY,
  apiSecret: process.env.NEXT_PUBLIC_TWILIO_API_SECRET,
  chatSid: process.env.NEXT_PUBLIC_TWILIO_CHAT_SERVICE_SID
}

export { config }
