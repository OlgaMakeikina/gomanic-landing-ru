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
            Такой же результат может быть у вас.<br />
            <span className={styles.ctaSecondary}>Запишитесь сейчас и</span><br />
            <span className={styles.ctaHighlight}>сэкономьте 50%</span>
          </p>
          
          <button
            onClick={onCtaClick}
            className={styles.ctaButton}
          >
            Хочу забронировать место сейчас
          </button>
        </div>
      </div>
    </div>
  )
}
