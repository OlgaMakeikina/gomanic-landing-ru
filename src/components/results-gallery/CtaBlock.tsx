import { CtaBlockProps } from './types'
import styles from './styles.module.css'

export default function CtaBlock({ onCtaClick }: CtaBlockProps) {
  return (
    <div className={styles.ctaContainer}>
      <div className={styles.ctaBox}>
        <div className={styles.ctaGradient1}></div>
        <div className={styles.ctaGradient2}></div>
        
        <div className={styles.ctaContent}>
          <p className={styles.ctaText}>
            O mesmo resultado pode ser seu.<br />
            <span className={styles.ctaSecondary}>Reserve agora e</span><br />
            <span className={styles.ctaHighlight}>economize 50%</span>
          </p>
          
          <button
            onClick={onCtaClick}
            className={styles.ctaButton}
          >
            Quero garantir minha vaga agora
          </button>
        </div>
      </div>
    </div>
  )
}
