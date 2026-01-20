import type { ReactNode } from 'react'
import styles from '../styles/slides.module.css'

interface SlideProps {
  number: number
  title: string
  section?: string
  background?: 'default' | 'alt'
  children: ReactNode
  totalSlides: number
}

export function Slide({
  number,
  title,
  section,
  background = 'default',
  children,
  totalSlides,
}: SlideProps) {
  const bgClass = background === 'alt' ? styles.slideAlt : styles.slideDefault

  return (
    <article
      className={`${styles.slide} ${bgClass}`}
      aria-label={`Slide ${number} sur ${totalSlides} : ${title}`}
    >
      <div className={styles.slideContent}>
        <header className={styles.slideContentHeader}>
          {section && <p className={styles.slideSection}>{section}</p>}
          <h1 className={`fr-h2 ${styles.slideTitle}`}>{title}</h1>
        </header>
        <div className={styles.slideBody}>{children}</div>
      </div>
    </article>
  )
}
