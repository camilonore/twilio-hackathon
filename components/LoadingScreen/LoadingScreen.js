import styles from './LoadingScreen.module.css'
import { Loading } from '../Svg/Loading'

function LoadingScreen () {
  return (
    <div className={styles.container}>
      <Loading/>
      <p>Cargando...</p>
    </div>
  )
}
export { LoadingScreen }
