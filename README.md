# DSFR Slides Template

Template de présentation web conforme au **Design System de l'État (DSFR)**.

Écrivez vos slides en Markdown, déployez automatiquement sur GitHub Pages.

## Démo

👉 [Voir la présentation d'exemple](https://benoitvx.github.io/dsfr-slides-template/)

## Fonctionnalités

- ✅ **Markdown simple** — Écrivez vos slides en `.md`
- ✅ **Style DSFR** — Conforme au Design System de l'État
- ✅ **Déploiement auto** — GitHub Pages en un push
- ✅ **Navigation clavier** — Flèches, Espace, Home, End, 1-9
- ✅ **Responsive** — Desktop et tablette
- ✅ **Accessible** — Navigation clavier, ARIA

## Utilisation rapide

### 1. Créer votre repo

Cliquez sur **"Use this template"** sur GitHub ou forkez ce repo.

### 2. Déployer

Activez GitHub Pages dans les settings de votre repo :
1. Settings → Pages
2. Source : **GitHub Actions**
3. Push sur `main` → déploiement automatique

### 3. Éditer `slides.md` (à la racine du projet)

Ouvrez le fichier `slides.md` situé **à la racine du projet** et modifiez-le :

```markdown
---
title: "Ma Présentation"
subtitle: "Sous-titre optionnel"
author: "Votre Nom"
role: "Votre Poste"
organization: "Direction interministérielle du numérique"
date: "20 Janvier 2026"
---

# Introduction

## Bienvenue

Contenu de votre première slide...

- Point 1
- Point 2
- Point 3

## Deuxième slide

Autre contenu...
```

### Votre présentation est en ligne 
URL : https://votre-nom-d-utilisateur.github.io/nom-de-votre-repo/

## Format Markdown

Voir [`FORMAT.md`](FORMAT.md) pour la documentation complète.

### Structure de base

```markdown
# Section          → Définit une nouvelle partie (chiffre décoratif)
## Titre slide     → Nouvelle slide
Contenu...         → Paragraphes, listes, etc.
```

### Éléments supportés

| Syntaxe | Rendu |
|---------|-------|
| `**gras**` | **gras** |
| `*italique*` | *italique* |
| `[lien](url)` | Lien cliquable |
| `![alt](image.png)` | Image |
| `> citation` | Callout DSFR |
| `| tableau |` | Table DSFR |
| `:::callout[titre]` | Callout avec titre |
| `:::alert[warning]` | Alerte DSFR |

## Navigation clavier

| Touche | Action |
|--------|--------|
| `→` / `Espace` | Slide suivante |
| `←` | Slide précédente |
| `Home` | Première slide |
| `End` | Dernière slide |
| `1-9` | Aller à la slide N |

## Développement local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de dev
npm run dev

# Build production
npm run build

# Preview du build
npm run preview
```

## Stack technique

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript
- [@codegouvfr/react-dsfr](https://react-dsfr.codegouv.studio/)
- [marked](https://marked.js.org/) pour le parsing Markdown
- GitHub Actions pour le déploiement

## Personnalisation

### Organisation

Modifiez le champ `organization` dans le front-matter de `slides.md` :

```yaml
organization: "Votre Direction"
```

### Images

Placez vos images dans `public/images/` et référencez-les :

```markdown
![Description](images/mon-image.png)
```

## Licence

MIT — Utilisez librement pour vos présentations.

---

Créé avec ❤️ pour l'administration française.
