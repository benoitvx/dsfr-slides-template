import { SlideHeader } from './SlideHeader'
import type { SlideMetadata } from '../types/slides'
import styles from '../styles/slides.module.css'

interface TitleSlideProps {
  metadata: SlideMetadata
  totalSlides: number
}

export function TitleSlide({ metadata, totalSlides }: TitleSlideProps) {
  return (
    <article
      className={styles.titleSlide}
      aria-label={`Slide 1 sur ${totalSlides} : ${metadata.title}`}
    >
      <SlideHeader organization={metadata.organization} />

      <div className={styles.titleSlideContent}>
        <h1 className={styles.titleSlideTitle}>{metadata.title}</h1>

        {metadata.subtitle && (
          <p className={styles.titleSlideSubtitle}>{metadata.subtitle}</p>
        )}

        <div className={styles.titleSlideSeparator} />

        {(metadata.author || metadata.role) && (
          <div className={styles.titleSlideAuthor}>
            {metadata.author && (
              <p className={styles.titleSlideAuthorName}>{metadata.author}</p>
            )}
            {metadata.role && (
              <p className={styles.titleSlideAuthorRole}>{metadata.role}</p>
            )}
          </div>
        )}

        {metadata.date && (
          <p className={styles.titleSlideDate}>{metadata.date}</p>
        )}
      </div>
    </article>
  )
}
