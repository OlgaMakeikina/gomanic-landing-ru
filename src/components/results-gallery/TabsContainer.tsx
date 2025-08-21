import TabButton from './TabButton'
import styles from './styles.module.css'

interface TabsContainerProps {
  activeTab: 'portfolio' | 'before-after'
  onTabChange: (tab: 'portfolio' | 'before-after') => void
}

export default function TabsContainer({ activeTab, onTabChange }: TabsContainerProps) {
  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabs}>
        <TabButton
          isActive={activeTab === 'portfolio'}
          number="1"
          title="PORTFÓLIO"
          onClick={() => onTabChange('portfolio')}
        />
        
        <TabButton
          isActive={activeTab === 'before-after'}
          number="2"
          title="ANTES E DEPOIS"
          onClick={() => onTabChange('before-after')}
        />
      </div>
    </div>
  )
}
