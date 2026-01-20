import yaml from 'js-yaml'
import { marked } from 'marked'
import type { SlideMetadata, SlideData, ParsedPresentation } from '../types/slides'

interface RawSlide {
  title: string
  section?: string
  partNumber?: number
  content: string
}

interface FrontMatterResult {
  data: Record<string, unknown>
  content: string
}

/**
 * Extrait le front-matter YAML du markdown
 */
function extractFrontMatter(markdown: string): FrontMatterResult {
  const frontMatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/
  const match = markdown.match(frontMatterRegex)

  if (!match) {
    return { data: {}, content: markdown }
  }

  try {
    const yamlContent = match[1] ?? ''
    const data = yaml.load(yamlContent) as Record<string, unknown>
    const content = match[2] ?? ''
    return { data: data ?? {}, content }
  } catch {
    return { data: {}, content: markdown }
  }
}

/**
 * Parse le front-matter YAML et retourne les métadonnées
 */
function parseMetadata(data: Record<string, unknown>): SlideMetadata {
  return {
    title: typeof data['title'] === 'string' ? data['title'] : 'Présentation',
    subtitle: typeof data['subtitle'] === 'string' ? data['subtitle'] : undefined,
    author: typeof data['author'] === 'string' ? data['author'] : undefined,
    role: typeof data['role'] === 'string' ? data['role'] : undefined,
    organization: typeof data['organization'] === 'string' ? data['organization'] : undefined,
    date: typeof data['date'] === 'string' ? data['date'] : undefined,
  }
}

/**
 * Découpe le contenu markdown en slides brutes
 * - `# Section` définit une nouvelle section
 * - `## Titre` définit une nouvelle slide
 */
function splitIntoRawSlides(content: string): RawSlide[] {
  const lines = content.split('\n')
  const slides: RawSlide[] = []

  let currentSection: string | undefined
  let currentPartNumber: number | undefined
  let partCounter = 0
  let currentSlide: RawSlide | null = null
  let contentLines: string[] = []

  const flushSlide = () => {
    if (currentSlide) {
      currentSlide.content = contentLines.join('\n').trim()
      if (currentSlide.title || currentSlide.content) {
        slides.push(currentSlide)
      }
    }
    contentLines = []
  }

  for (const line of lines) {
    // Section: # Titre
    const sectionMatch = line.match(/^#\s+(.+)$/)
    if (sectionMatch) {
      flushSlide()
      currentSection = sectionMatch[1]?.trim()
      partCounter++
      currentPartNumber = partCounter
      currentSlide = null
      continue
    }

    // Slide: ## Titre
    const slideMatch = line.match(/^##\s+(.+)$/)
    if (slideMatch) {
      flushSlide()
      currentSlide = {
        title: slideMatch[1]?.trim() ?? '',
        section: currentSection,
        partNumber: currentPartNumber,
        content: '',
      }
      continue
    }

    // Contenu normal
    if (currentSlide) {
      contentLines.push(line)
    }
  }

  // Flush dernière slide
  flushSlide()

  return slides
}

/**
 * Transforme les directives custom en HTML
 * :::callout[titre] ... :::
 * :::alert[type] ... :::
 */
function processDirectives(content: string): string {
  // :::callout[titre] ... :::
  content = content.replace(
    /:::callout(?:\[([^\]]*)\])?\s*([\s\S]*?):::/g,
    (_match, title: string | undefined, body: string) => {
      const titleHtml = title ? `<p class="fr-callout__title">${title}</p>` : ''
      return `<div class="fr-callout">${titleHtml}<p class="fr-callout__text">${body.trim()}</p></div>`
    }
  )

  // :::alert[type] ... :::
  content = content.replace(
    /:::alert(?:\[([^\]]*)\])?\s*([\s\S]*?):::/g,
    (_match, type: string | undefined, body: string) => {
      const severity = type ?? 'info'
      const validSeverities = ['info', 'warning', 'error', 'success']
      const finalSeverity = validSeverities.includes(severity) ? severity : 'info'
      return `<div class="fr-alert fr-alert--${finalSeverity}"><p>${body.trim()}</p></div>`
    }
  )

  // :::highlight ... ::: (texte surligné)
  content = content.replace(
    /:::highlight\s*([\s\S]*?):::/g,
    (_match, body: string) => {
      return `<mark class="fr-tag">${body.trim()}</mark>`
    }
  )

  return content
}

/**
 * Transforme les blockquotes simples en callouts DSFR
 */
function processBlockquotes(html: string): string {
  return html.replace(
    /<blockquote>\s*<p>([\s\S]*?)<\/p>\s*<\/blockquote>/g,
    (_match, content: string) => {
      return `<div class="fr-callout"><p class="fr-callout__text">${content}</p></div>`
    }
  )
}

/**
 * Ajoute les classes DSFR aux tables
 */
function processTable(html: string): string {
  return html
    .replace(/<table>/g, '<div class="fr-table"><table>')
    .replace(/<\/table>/g, '</table></div>')
}

/**
 * Convertit le markdown en HTML avec support DSFR
 */
function markdownToHtml(content: string): string {
  // Traiter les directives custom avant marked
  const processedContent = processDirectives(content)

  // Convertir le markdown en HTML
  let html = marked.parse(processedContent, { async: false }) as string

  // Post-traitement pour DSFR
  html = processBlockquotes(html)
  html = processTable(html)

  // Ajouter classes DSFR aux listes
  html = html.replace(/<ul>/g, '<ul class="fr-list">')
  html = html.replace(/<ol>/g, '<ol class="fr-list">')

  return html
}

/**
 * Parse une présentation markdown complète
 */
export function parseMarkdown(markdown: string): ParsedPresentation {
  // Extraire le front-matter
  const { data, content } = extractFrontMatter(markdown)

  // Parser les métadonnées
  const metadata = parseMetadata(data)

  // Découper en slides
  const rawSlides = splitIntoRawSlides(content)

  // Convertir en SlideData avec HTML
  // Toutes les slides ont un fond gris (alt) comme dans la présentation MCP de référence
  const slides: SlideData[] = rawSlides.map((raw, index) => ({
    id: index + 1,
    title: raw.title,
    section: raw.section,
    partNumber: raw.partNumber,
    content: markdownToHtml(raw.content),
    background: 'alt',
  }))

  return { metadata, slides }
}

/**
 * Charge et parse un fichier slides.md
 */
export async function loadSlides(url: string): Promise<ParsedPresentation> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to load slides: ${response.statusText}`)
  }
  const markdown = await response.text()
  return parseMarkdown(markdown)
}
