import { useState, useEffect } from 'react'
import { useSlideNavigation } from '../hooks/useSlideNavigation'
import { SlideLayout } from './SlideLayout'
import { SlideNavigation } from './SlideNavigation'
import { SlideProgress } from './SlideProgress'
import { SlideContent } from './SlideContent'
import { TitleSlide } from './TitleSlide'
import { loadSlides } from '../parser/parseMarkdown'
import type { ParsedPresentation } from '../types/slides'

export function SlideDeck() {
  const [presentation, setPresentation] = useState<ParsedPresentation | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadSlides('./slides.md')
      .then(setPresentation)
      .catch((err: Error) => setError(err.message))
      .finally(() => setIsLoading(false))
  }, [])

  const slides = presentation?.slides ?? []
  const metadata = presentation?.metadata

  // +1 pour la slide de titre
  const totalSlides = slides.length + 1

  const {
    currentSlide,
    nextSlide,
    prevSlide,
    isFirst,
    isLast,
  } = useSlideNavigation({ totalSlides: totalSlides || 1 })

  if (isLoading) {
    return (
      <div className="fr-container fr-py-8w" style={{ textAlign: 'center' }}>
        <p>Chargement de la présentation...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="fr-container fr-py-8w">
        <div className="fr-alert fr-alert--error">
          <p>Erreur lors du chargement : {error}</p>
        </div>
      </div>
    )
  }

  if (!metadata) {
    return (
      <div className="fr-container fr-py-8w">
        <div className="fr-alert fr-alert--warning">
          <p>Aucune présentation trouvée dans slides.md</p>
        </div>
      </div>
    )
  }

  // Slide 1 = Title slide
  if (currentSlide === 1) {
    return (
      <>
        <TitleSlide metadata={metadata} totalSlides={totalSlides} />

        <SlideProgress current={currentSlide} total={totalSlides} />

        <SlideNavigation
          current={currentSlide}
          total={totalSlides}
          onPrev={prevSlide}
          onNext={nextSlide}
          isFirst={isFirst}
          isLast={isLast}
        />
      </>
    )
  }

  // Autres slides (décalage de -1 pour l'index)
  const slide = slides[currentSlide - 2]

  if (!slide) {
    return <div>Slide non trouvée</div>
  }

  return (
    <>
      <SlideLayout
        number={currentSlide}
        title={slide.title}
        section={slide.section}
        partNumber={slide.partNumber}
        background={slide.background}
        totalSlides={totalSlides}
        organization={metadata.organization}
      >
        <SlideContent content={slide.content} />
      </SlideLayout>

      <SlideProgress current={currentSlide} total={totalSlides} />

      <SlideNavigation
        current={currentSlide}
        total={totalSlides}
        onPrev={prevSlide}
        onNext={nextSlide}
        isFirst={isFirst}
        isLast={isLast}
      />
    </>
  )
}
