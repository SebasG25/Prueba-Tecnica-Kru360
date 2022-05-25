import styles from '../Button/Button.module.css'

export const Button = ({ children: text, action, style }) => {
  return (
    <button
      className={styles.addButton}
      style={style}
      onClick={action}>
      {text}
    </button>
  )
}