import styles from '../styles/slides.module.css'

interface SlideHeaderProps {
  organization?: string
}

export function SlideHeader({ organization }: SlideHeaderProps) {
  return (
    <header className={styles.slideHeader}>
      <div className={styles.headerLeft}>
        <p className="fr-logo">
          GOUVERNEMENT
        </p>
      </div>
      {organization && (
        <div className={styles.headerRight}>
          <span className={styles.directionName}>{organization}</span>
        </div>
      )}
    </header>
  )
}
