import styles from '../styles/slides.module.css'

interface SlideProgressProps {
  current: number
  total: number
}

export function SlideProgress({ current, total }: SlideProgressProps) {
  const progress = (current / total) * 100

  return (
    <div
      className={styles.progressContainer}
      role="progressbar"
      aria-valuenow={current}
      aria-valuemin={1}
      aria-valuemax={total}
    >
      <div className={styles.progressBar} style={{ width: `${progress}%` }} />
    </div>
  )
}
