import styles from './Button.module.css'

function Button (props) {
  const isOff = {
    true: '#3c4043',
    false: 'rgb(234, 67, 53)',
    none: 'transparent'
  }
  return (
    <button {...props} className={styles.button} style={{ backgroundColor: isOff[props.status], ...props.style }}>
      {props.children}
    </button>
  )
}

export { Button }
