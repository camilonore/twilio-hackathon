import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import { useState } from 'react'
import styles from './UserLogged.module.css'

function UserLogged () {
  const [modalOpen, setModalOpen] = useState(false)
  const handleSignIn = () => {
    signIn()
  }
  const handleSignOut = () => {
    signOut()
  }
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <button className={styles.signOut} onClick={() => setModalOpen(prev => !prev)}>
          <Image src={session.user.image} alt={session.user.name} height={33} width={33} className={styles.image}/>
        </button>
        {modalOpen && (
          <button onClick={handleSignOut} className={styles.modal}>
            SignOut
          </button>
        )}
      </>
    )
  } else {
    return (
      <button className={styles.button} onClick={handleSignIn}>Acceder</button>
    )
  }
}
export { UserLogged }
