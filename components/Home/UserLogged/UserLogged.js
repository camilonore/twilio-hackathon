import { useSession, signIn } from 'next-auth/react'
import Image from 'next/image'
import styles from './UserLogged.module.css'

function UserLogged () {
  const handleClick = () => {
    signIn()
  }
  const { data: session } = useSession()
  if (session) {
    return (
      <Image src={session.user.image} alt={session.user.name} height={33} width={33} className={styles.image}/>
    )
  } else {
    return (
      <button className={styles.button} onClick={handleClick}>Acceder</button>
    )
  }
}
export { UserLogged }
