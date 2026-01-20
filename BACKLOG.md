# Backlog

## 🎯 MVP (v0.1.0)

### Setup projet
- [ ] Init Vite + React + TypeScript
- [ ] Installer et configurer `@codegouvfr/react-dsfr`
- [ ] Structure dossiers selon `CLAUDE.md`
- [ ] Config TypeScript strict
- [ ] Git init + premier commit

### Récupérer code existant (depuis `atelier-mcp-slides`)
- [ ] Copier `Slide.tsx` → adapter pour contenu dynamique
- [ ] Copier `SlideNavigation.tsx` → réutiliser tel quel
- [ ] Copier `SlideProgress.tsx` → réutiliser tel quel
- [ ] Copier `useSlideNavigation.ts` → ajouter sync URL
- [ ] Copier `slides.module.css` → nettoyer styles inutilisés
- [ ] Ne PAS copier les slides individuelles (`src/slides/`)

### Parser Markdown (nouveau)
- [ ] Parser front-matter YAML (title, author, role, date)
- [ ] Parser sections (`# Section`)
- [ ] Parser slides (`## Slide`)
- [ ] Support markdown standard (bold, italic, listes, liens)
- [ ] Support tables markdown → `<Table>` DSFR
- [ ] Support blockquotes → `<Callout>` DSFR
- [ ] Support directives custom `:::callout` `:::alert`
- [ ] Support images `![alt](url)`

### Composants React
- [ ] Adapter `Slide` pour accepter du contenu parsé
- [ ] `SlideContent` - Rendu du markdown parsé (nouveau)
- [ ] `SlideDeck` - Orchestrateur principal (nouveau)

### Navigation
- [ ] Adapter `useSlideNavigation` pour sync URL (`?slide=5`)
- [ ] Vérifier navigation clavier (←→, Espace, Home, End, 1-9)
- [ ] Accessibilité : `aria-live`, focus management

### Styles
- [ ] Layout slide plein écran
- [ ] Alternance fonds `default` / `alt`
- [ ] Responsive (desktop prioritaire, mobile bonus)
- [ ] Print styles (bonus)

### GitHub Actions
- [ ] Workflow `deploy.yml` pour GitHub Pages
- [ ] Build automatique sur push `main`
- [ ] Config `vite.config.ts` pour base path dynamique

### Documentation
- [ ] `README.md` - Guide utilisateur complet
- [ ] `FORMAT.md` - Spec du format Markdown
- [ ] `slides.md` - Exemple de présentation

---

## 🚀 v0.2.0 - Améliorations

### Fonctionnalités
- [ ] Mode présentateur (notes, timer, preview slide suivante)
- [ ] Export PDF via `print`
- [ ] Vue grille (toutes les slides en miniature)
- [ ] Thèmes de couleur (garder DSFR mais variantes)
- [ ] Support code syntax highlighting

### DX
- [ ] Hot reload du fichier `slides.md`
- [ ] Validation du format MD avec messages d'erreur clairs
- [ ] CLI pour créer une nouvelle présentation

---

## 🌟 v0.3.0 - Extras

### Fonctionnalités avancées
- [ ] Animations de transition entre slides
- [ ] Fragments (révélation progressive dans une slide)
- [ ] Embed vidéos YouTube/Peertube
- [ ] Support mermaid.js pour diagrammes
- [ ] QR code auto-généré sur slide de fin

### Distribution
- [ ] Package npm (`npx create-dsfr-slides`)
- [ ] Template GitHub officiel
- [ ] App web "coller son MD" (zero install)

---

## 📝 Notes

### Priorités MVP
1. **Parser MD robuste** - C'est le cœur du projet
2. **Rendu DSFR correct** - Doit être irréprochable visuellement
3. **Navigation fluide** - UX de présentation classique
4. **GitHub Pages** - Déploiement zero-config

### Décisions techniques
- Parser : utiliser `gray-matter` pour front-matter + `marked` ou `remark` pour MD
- Pas de state management externe (useState/useReducer suffisent)
- Directives custom : parser maison simple, pas besoin de remark-directive

### Questions ouvertes
- [ ] Supporter les GIFs animés ? (poids des fichiers)
- [ ] Intégrer des SVG inline depuis le MD ?
- [ ] Permettre du JSX custom dans le MD ? (probablement non, trop complexe)
