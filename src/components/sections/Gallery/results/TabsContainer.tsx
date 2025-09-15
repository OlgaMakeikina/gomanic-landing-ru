import TabButton from './TabButton'
import styles from './styles.module.css'

interface TabsContainerProps {
  activeTab: 'portfolio' | 'before-after'
  onTabChange: (tab: 'portfolio' | 'before-after') => void
}

export default function TabsContainer({ activeTab, onTabChange }: TabsContainerProps) {
  return (
    <nav className={styles.tabsContainer} role="navigation" aria-label="Navegação da galeria">
      <div className={styles.tabs} role="tablist">
        <TabButton
          isActive={activeTab === 'portfolio'}
          number="1"
          title="ПОРТФОЛИО"
          onClick={() => onTabChange('portfolio')}
          tabId="portfolio-tab"
          panelId="portfolio-panel"
        />
        
        <TabButton
          isActive={activeTab === 'before-after'}
          number="2" 
          title="ДО И ПОСЛЕ"
          onClick={() => onTabChange('before-after')}
          tabId="before-after-tab"
          panelId="before-after-panel"
        />
      </div>
    </nav>
  )
}
