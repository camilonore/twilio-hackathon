import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState, useContext } from 'react'
import { RoomContext } from '../../../Context/RoomContext'
import styles from './Form.module.css'

function Form () {
  const { data: session } = useSession()
  const [loading, setLoading] = useState(false)
  const { setToken } = useContext(RoomContext)
  const router = useRouter()

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    if (!session) { signIn() }
    setLoading(true)
    const room = evt.target.room.value
    const data = await fetch('/api/get-token', {
      method: 'POST',
      body: JSON.stringify({
        identity: session.user.name,
        room
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    data.json().then(response => {
      const token = response.token
      setToken(token)
      router.push(`/${room}`)
    })
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input type="text" id='room' name='room' required placeholder='Nombre de la sala' />
      {!loading && <button>Ingresar!</button> }
      {loading && <button disabled={true} >Connectando...</button> }
    </form>
  )
}
export { Form }
