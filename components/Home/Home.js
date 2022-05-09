import styles from './Home.module.css'
import Image from 'next/image'
import { UserLogged } from './UserLogged/UserLogged'
import { Form } from './Form/Form'

function Home () {
  const date = new Intl.DateTimeFormat('en-US').format(Date.now())
  return (
    <>
      <header className={styles.header}>
        <ul className={styles.list}>
          <li className={styles.logo}>
            <Image src='/meetLogo.png' alt='meet Logo' height={33} width={58}/>
            <p>
              Twilio
              <span> Meet</span>
            </p>
          </li>
          <li className={styles.date}>{date}</li>
          <li className={styles.user}>
            <UserLogged/>
          </li>
        </ul>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h3>
            Video conferencias premium. Ahora gratis para todos
          </h3>
          <p>
            Rediseñamos Google Meet, nuestro servicio de reuniones de negocios seguras, de modo que sea gratuito y esté disponible para todos.
          </p>
          <Form/>
        </section>
        <aside className={styles.aside}>
          <Image src='/mainAside.svg' alt='Aside logo' width={330} height={330} priority />
          <h4>Obtén un vinculo para compartir</h4>
          <p>Ingresa a una nueva sala y obten un vínculo que puedas enviar a las personas con quienes quieras reunirte.</p>
        </aside>
      </main>

    </>
  )
}

export { Home }
