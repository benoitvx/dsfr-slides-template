import styles from '../styles/slides.module.css'

interface SlideNavigationProps {
  current: number
  total: number
  onPrev: () => void
  onNext: () => void
  isFirst: boolean
  isLast: boolean
}

export function SlideNavigation({
  current,
  total,
  onPrev,
  onNext,
  isFirst,
  isLast,
}: SlideNavigationProps) {
  return (
    <nav className={styles.navigation} aria-label="Navigation des slides">
      <button
        className={styles.navButton}
        onClick={onPrev}
        disabled={isFirst}
        aria-label="Slide précédente"
      >
        ← Précédent
      </button>
      <span className={styles.counter} aria-live="polite">
        {current} / {total}
      </span>
      <button
        className={styles.navButton}
        onClick={onNext}
        disabled={isLast}
        aria-label="Slide suivante"
      >
        Suivant →
      </button>
    </nav>
  )
}
