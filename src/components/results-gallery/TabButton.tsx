import { TabProps } from './types'
import styles from './styles.module.css'

export default function TabButton({ isActive, number, title, onClick }: TabProps) {
  return (
    <button
      className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}
      onClick={onClick}
    >
      <div className={styles.tabNumber}>{number}</div>
      <div>
        <div className={styles.tabTitle}>{title}</div>
      </div>
    </button>
  )
}
