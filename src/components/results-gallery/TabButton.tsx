import { TabProps } from './types'
import styles from './styles.module.css'

export default function TabButton({ isActive, number, title, onClick, tabId, panelId }: TabProps) {
  return (
    <button
      className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}
      onClick={onClick}
      role="tab"
      aria-selected={isActive}
      aria-controls={panelId}
      id={tabId}
      type="button"
      tabIndex={isActive ? 0 : -1}
    >
      <div className={styles.tabNumber} aria-hidden="true">{number}</div>
      <div>
        <div className={styles.tabTitle}>{title}</div>
      </div>
    </button>
  )
}
