# Format Markdown des Slides

Ce document décrit la syntaxe Markdown utilisée pour créer des présentations DSFR.

## Structure générale

```markdown
---
title: "Titre de la présentation"
subtitle: "Sous-titre optionnel"
author: "Nom de l'auteur"
role: "Poste"
organization: "Direction interministérielle du numérique"
date: "20 Janvier 2026"
---

# Nom de la section

## Titre de la slide

Contenu de la slide...
```

## Front-matter (métadonnées)

Le fichier commence par un bloc YAML délimité par `---` :

| Champ | Obligatoire | Description |
|-------|-------------|-------------|
| `title` | Oui | Titre de la présentation |
| `subtitle` | Non | Sous-titre (affiché en italique) |
| `author` | Non | Nom de l'auteur |
| `role` | Non | Poste de l'auteur |
| `organization` | Non | Organisation (affiché dans le header de chaque slide) |
| `date` | Non | Date de la présentation |

## Sections et Slides

- `# Titre` crée une **section** (groupe de slides)
- `## Titre` crée une **nouvelle slide**

Chaque slide hérite de la section courante.

## Éléments Markdown supportés

### Texte

```markdown
**Gras** et *italique*
`code inline`
[Lien](https://example.com)
```

### Listes

```markdown
- Item 1
- Item 2
  - Sous-item

1. Premier
2. Deuxième
```

### Images

```markdown
![Description de l'image](./images/mon-image.png)
```

Placez vos images dans le dossier `public/images/`.

### Tableaux

```markdown
| Colonne 1 | Colonne 2 |
|-----------|-----------|
| Valeur A  | Valeur B  |
```

Les tableaux sont automatiquement stylés avec le composant `<Table>` DSFR.

### Citations / Callouts

Une citation simple devient un callout DSFR :

```markdown
> Ceci est une citation qui sera affichée comme un callout.
```

### Directives custom

#### Callout avec titre

```markdown
:::callout[Titre du callout]
Contenu du callout avec des informations importantes.
:::
```

#### Alertes

```markdown
:::alert[info]
Message d'information.
:::

:::alert[warning]
Message d'avertissement.
:::

:::alert[error]
Message d'erreur.
:::

:::alert[success]
Message de succès.
:::
```

#### Texte surligné

```markdown
:::highlight
Texte important à mettre en évidence.
:::
```

## Exemple complet

```markdown
---
title: "Ma Présentation"
subtitle: "Formation DSFR"
author: "Jean Dupont"
role: "Designer UX"
organization: "Direction du Numérique"
date: "20 Janvier 2026"
---

# Introduction

## Bienvenue

Bienvenue dans cette présentation.

- Point clé 1
- Point clé 2

> Citation importante

# Contenu principal

## Détails techniques

:::alert[warning]
Attention à ce point important.
:::

| Critère | Valeur |
|---------|--------|
| Performance | Élevée |
| Accessibilité | RGAA |
```

## Bonnes pratiques

1. **Une idée par slide** : gardez vos slides concises
2. **Utilisez les sections** : organisez votre présentation
3. **Limitez le texte** : préférez les listes aux paragraphes
4. **Images optimisées** : compressez vos images pour le web
