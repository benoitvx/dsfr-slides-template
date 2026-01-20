# Backlog

## 🎯 MVP (v0.1.0) ✅

### Setup projet
- [x] Init Vite + React + TypeScript
- [x] Installer et configurer `@codegouvfr/react-dsfr`
- [x] Structure dossiers selon `CLAUDE.md`
- [x] Config TypeScript strict
- [x] Git init + premier commit

### Récupérer code existant (depuis `atelier-mcp-slides`)
- [x] Copier `Slide.tsx` → adapter pour contenu dynamique
- [x] Copier `SlideNavigation.tsx` → réutiliser tel quel
- [x] Copier `SlideProgress.tsx` → réutiliser tel quel
- [x] Copier `useSlideNavigation.ts` → ajouter sync URL
- [x] Copier `slides.module.css` → nettoyer styles inutilisés
- [x] Ne PAS copier les slides individuelles (`src/slides/`)

### Parser Markdown (nouveau)
- [x] Parser front-matter YAML (title, author, role, date)
- [x] Parser sections (`# Section`)
- [x] Parser slides (`## Slide`)
- [x] Support markdown standard (bold, italic, listes, liens)
- [x] Support tables markdown → `<Table>` DSFR
- [x] Support blockquotes → `<Callout>` DSFR
- [x] Support directives custom `:::callout` `:::alert`
- [x] Support images `![alt](url)`

### Composants React
- [x] Adapter `Slide` pour accepter du contenu parsé
- [x] `SlideContent` - Rendu du markdown parsé (nouveau)
- [x] `SlideDeck` - Orchestrateur principal (nouveau)
- [x] `SlideLayout` - Layout complet avec header, section, chiffre décoratif
- [x] `TitleSlide` - Slide de titre avec fond bleu
- [x] `SlideHeader` - Header DSFR avec logo gouvernement
- [x] `SlideFooter` - Footer avec ligne bleue

### Navigation
- [x] Adapter `useSlideNavigation` pour sync URL (`?slide=5`)
- [x] Vérifier navigation clavier (←→, Espace, Home, End, 1-9)
- [x] Accessibilité : `aria-live`, focus management

### Styles
- [x] Layout slide plein écran
- [x] Fond gris uniforme (style DINUM)
- [x] Responsive (desktop prioritaire, mobile bonus)
- [ ] Print styles (bonus)

### GitHub Actions
- [x] Workflow `deploy.yml` pour GitHub Pages
- [x] Build automatique sur push `main`
- [x] Config `vite.config.ts` pour base path dynamique

### Documentation
- [x] `README.md` - Guide utilisateur complet
- [x] `FORMAT.md` - Spec du format Markdown
- [x] `slides.md` - Exemple de présentation

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
1. **Parser MD robuste** - C'est le cœur du projet ✅
2. **Rendu DSFR correct** - Doit être irréprochable visuellement ✅
3. **Navigation fluide** - UX de présentation classique ✅
4. **GitHub Pages** - Déploiement zero-config ✅

### Décisions techniques
- Parser : `js-yaml` pour front-matter + `marked` pour MD (gray-matter non compatible browser)
- Pas de state management externe (useState/useReducer suffisent)
- Directives custom : parser maison simple avec regex, pas besoin de remark-directive

### Questions ouvertes
- [ ] Supporter les GIFs animés ? (poids des fichiers)
- [ ] Intégrer des SVG inline depuis le MD ?
- [ ] Permettre du JSX custom dans le MD ? (probablement non, trop complexe)
