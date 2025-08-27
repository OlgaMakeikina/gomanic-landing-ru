import styles from './styles.module.css'

export default function GalleryHeader() {
  return (
    <header className={styles.header}>
      <p className={styles.overline}>РЕЗУЛЬТАТЫ</p>
      <h2 id="gallery-heading" className={styles.title}>
        ВАШИ НОГТИ БУДУТ<br />
        ВЫГЛЯДЕТЬ ТАК УЖЕ ЗАВТРА
      </h2>
      <p className={styles.subtitle}>
        Наши мастера воспроизведут тот же уровень <strong>блеска и совершенства</strong> на ваших руках.
      </p>
    </header>
  )
}
