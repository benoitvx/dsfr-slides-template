interface SlideContentProps {
  content: string
}

export function SlideContent({ content }: SlideContentProps) {
  // TODO: Implement markdown parsing and DSFR component rendering
  // For now, render content as HTML
  return (
    <div
      className="fr-text"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
