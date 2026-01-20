import type { ReactNode } from 'react'
import { SlideHeader } from './SlideHeader'
import { SlideFooter } from './SlideFooter'
import styles from '../styles/slides.module.css'

interface SlideLayoutProps {
  number: number
  title: string
  section?: string
  partNumber?: number
  background?: 'default' | 'alt'
  children: ReactNode
  totalSlides: number
  organization?: string
}

export function SlideLayout({
  number,
  title,
  section,
  partNumber,
  background = 'default',
  children,
  totalSlides,
  organization,
}: SlideLayoutProps) {
  const bgClass = background === 'alt' ? styles.slideAlt : styles.slideDefault
  const showDecorativeNumber = partNumber !== undefined

  // Format section: "1 · Introduction"
  const sectionDisplay = section && partNumber
    ? `${partNumber} · ${section}`
    : section

  return (
    <article
      className={`${styles.slideLayout} ${bgClass}`}
      aria-label={`Slide ${number} sur ${totalSlides} : ${title}`}
    >
      <SlideHeader organization={organization} />

      <div className={styles.slideMain}>
        {showDecorativeNumber && (
          <div className={styles.decorativeNumberContainer} aria-hidden="true">
            <span className={styles.decorativeNumber}>{partNumber}</span>
          </div>
        )}

        <div className={styles.slideContentArea}>
          {sectionDisplay && (
            <div className={styles.sectionIndicatorWrapper}>
              <div className={styles.sectionBar}></div>
              <div className={styles.sectionTextGroup}>
                <span className={styles.sectionLabel}>{sectionDisplay}</span>
              </div>
            </div>
          )}

          <header className={styles.slideTitleHeader}>
            <h1 className={styles.slideMainTitle}>{title}</h1>
          </header>

          <div className={styles.slideBody}>{children}</div>
        </div>
      </div>

      <SlideFooter />
    </article>
  )
}
