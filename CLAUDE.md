# DSFR Slides Template

## Contexte

Template de présentation web (format slides) conforme au **Design System de l'État (DSFR)**.

**Objectif** : Permettre à n'importe qui de créer une présentation DSFR en écrivant simplement un fichier Markdown.

**Workflow utilisateur** :
1. Fork ce repo
2. Éditer `slides.md` (ou le générer avec un LLM + `FORMAT.md`)
3. Push → GitHub Action → URL publique sur GitHub Pages

## Code de référence

Le projet `atelier-mcp-slides` contient des composants fonctionnels à réutiliser :

**Chemin** : `~/Library/Mobile Documents/com~apple~CloudDocs/Dev/atelier-mcp-slides/`

**Composants à reprendre et adapter** :
| Fichier | Ce qu'il fait | Adaptation nécessaire |
|---------|---------------|----------------------|
| `src/components/Slide.tsx` | Conteneur slide avec layout DSFR | Accepter contenu dynamique (plus de props hardcodées) |
| `src/components/SlideNavigation.tsx` | Barre nav (flèches, compteur) | Aucune, réutiliser tel quel |
| `src/components/SlideProgress.tsx` | Barre de progression | Aucune, réutiliser tel quel |
| `src/hooks/useSlideNavigation.ts` | Gestion clavier + état | Ajouter sync URL (`?slide=5`) |
| `src/styles/slides.module.css` | Styles spécifiques slides | Nettoyer styles inutilisés |

**Ne pas reprendre** :
- Les slides individuelles (`src/slides/`) → remplacées par le parser MD
- Le contenu hardcodé → tout vient de `slides.md`

**Principe** : Garder la mécanique de navigation, remplacer le contenu statique par du markdown parsé.

## Stack

- React 18 + TypeScript + Vite
- **@codegouvfr/react-dsfr** (obligatoire)
- CSS modules uniquement (pas de Tailwind)
- GitHub Actions pour déploiement

## Commandes

```bash
npm install        # Install dépendances
npm run dev        # Dev server local
npm run build      # Build production (dist/)
npm run preview    # Preview du build
```

## Architecture

```
dsfr-slides-template/
├── .github/workflows/deploy.yml   # GitHub Pages auto
├── src/
│   ├── components/
│   │   ├── Slide.tsx              # Conteneur d'une slide
│   │   ├── SlideNavigation.tsx    # Barre nav (flèches, compteur)
│   │   ├── SlideProgress.tsx      # Barre de progression
│   │   └── SlideContent.tsx       # Rendu du markdown
│   ├── hooks/
│   │   └── useSlideNavigation.ts  # Gestion clavier + état
│   ├── parser/
│   │   └── parseMarkdown.ts       # MD → structure slides
│   ├── types/
│   │   └── slides.ts              # Types TypeScript
│   ├── styles/
│   │   └── slides.module.css      # Styles spécifiques
│   ├── App.tsx
│   └── main.tsx
├── public/
│   └── images/                    # Images utilisateur
├── slides.md                      # Contenu de la présentation
├── FORMAT.md                      # Spec du format MD
└── README.md
```

## Règles DSFR

1. **Toujours utiliser les composants DSFR** (`<Button>`, `<Card>`, `<Alert>`, `<Table>`, `<Callout>`, etc.)
2. **Jamais de styles custom** qui override le DSFR
3. **Tokens CSS uniquement** : `--blue-france-sun-113-625`, `--background-alt-grey`, etc.
4. **Accessibilité** : navigation clavier complète, `aria-*`, contrastes RGAA

### Références DSFR

- Doc : https://react-dsfr.codegouv.studio/
- Storybook : https://components.react-dsfr.codegouv.studio/

## Format Markdown des slides

Voir `FORMAT.md` pour la spec complète. Structure de base :

```markdown
---
title: "Titre"
author: "Nom"
role: "Poste"
date: "2026-XX-XX"
---

# Section 1 : Nom

## Titre de la slide
Contenu...
```

### Éléments spéciaux supportés

| Syntaxe | Rendu DSFR |
|---------|------------|
| `> citation` | `<Callout>` |
| `:::callout ... :::` | `<Callout>` avec titre |
| `:::alert[warning] ... :::` | `<Alert severity="warning">` |
| `| tableau |` | `<Table>` DSFR |
| `![alt](url)` | Image centrée |
| `- [ ] item` | Checklist |

## Navigation clavier

| Touche | Action |
|--------|--------|
| `→` / `Espace` / `PageDown` | Slide suivante |
| `←` / `PageUp` | Slide précédente |
| `Home` | Première slide |
| `End` | Dernière slide |
| `1-9` | Aller à la slide N |

## Conventions de code

- Un composant = un fichier
- TypeScript strict, pas de `any`
- Composants fonctionnels uniquement
- Nommage : PascalCase pour composants, camelCase pour fonctions

## À ne pas faire

- ❌ Tailwind ou autre framework CSS
- ❌ Animations complexes (garder simple et accessible)
- ❌ Dépendances externes non nécessaires
- ❌ Override des styles DSFR
- ❌ Logique métier dans les composants (séparer parsing/rendu)
