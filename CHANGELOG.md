# Changelog

Toutes les modifications notables de ce projet sont documentées ici.

Format basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/).

---

## [Unreleased]

### À venir
- Voir `BACKLOG.md`

---

## [0.1.0] - 2026-01-20

### 🎉 Initial Release

#### Ajouté
- Setup projet : React 18 + TypeScript + Vite
- Intégration DSFR (`@codegouvfr/react-dsfr`)
- Parser Markdown → Slides
  - Support front-matter (title, author, role, date)
  - Sections via `# Titre`
  - Slides via `## Titre`
  - Éléments spéciaux : callout, alert, tables
- Composants de base
  - `Slide` : conteneur avec layout DSFR
  - `SlideNavigation` : flèches + compteur
  - `SlideProgress` : barre de progression
  - `SlideContent` : rendu markdown
- Navigation clavier complète
- GitHub Action pour déploiement GitHub Pages
- Documentation
  - `README.md` : guide d'utilisation
  - `FORMAT.md` : spec du format Markdown
  - `CLAUDE.md` : instructions Claude Code
- Exemple de présentation (`slides.md`)

---

## Template de version

```markdown
## [X.Y.Z] - YYYY-MM-DD

### Ajouté
- Nouvelles fonctionnalités

### Modifié
- Changements dans les fonctionnalités existantes

### Déprécié
- Fonctionnalités qui seront supprimées

### Supprimé
- Fonctionnalités supprimées

### Corrigé
- Corrections de bugs

### Sécurité
- Corrections de vulnérabilités
```
