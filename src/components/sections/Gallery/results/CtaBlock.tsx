import { CtaBlockProps } from './types'
import styles from './styles.module.css'
import { createDikidiLink } from '@/utils/dikidi-tracking'

export default function CtaBlock({ onCtaClick }: CtaBlockProps) {
  return (
    <div className={styles.ctaContainer}>
      <div className={styles.ctaBox}>
        <div className={styles.ctaGradient1}></div>
        <div className={styles.ctaGradient2}></div>
        
        <div className={styles.ctaContent}>
          <p className={styles.ctaText}>
            <span className={styles.ctaSecondary}>Запишитесь сейчас и</span><br />
            <span className={styles.ctaHighlight}>сэкономьте 50%</span>
          </p>
          
          <a
            href="https://dikidi.net/1921931?p=0.pi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-12 py-4 rounded-lg font-bold border-2 transition-all hover:opacity-90 hover:scale-105 uppercase tracking-wide whitespace-nowrap"
            style={{ 
              color: '#FEFEFE', 
              borderColor: '#FEFEFE',
              backgroundColor: 'transparent',
              fontFamily: 'Manrope, sans-serif',
              fontSize: '16px',
              letterSpacing: '0.1em',
              textDecoration: 'none'
            }}
            onClick={createDikidiLink("Хочу забронировать место сейчас", "Gallery Portfolio Section")}
          >
            Хочу забронировать место сейчас
          </a>
        </div>
      </div>
    </div>
  )
}
