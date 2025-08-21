import styles from './styles.module.css'

export default function GalleryHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.overline}>RESULTADOS</div>
      <h2 className={styles.title}>SUAS UNHAS ESTARÃO ASSIM JÁ AMANHÃ</h2>
      <p className={styles.subtitle}>
        Nossas manicures vão reproduzir esse mesmo nível de <strong>brilho e perfeição</strong> nas suas mãos.
      </p>
    </div>
  )
}
