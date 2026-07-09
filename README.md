# ASSOYAH — Digital Flagship (Phase 1)

Site vitrine bilingue (FR/EN) pour ASSOYAH SARL, construit avec Next.js 14 (App Router),
TypeScript, Tailwind CSS et Framer Motion — prêt pour un déploiement Netlify.

## 1. Installer les dépendances

```bash
npm install
```

## 2. Lancer en local

```bash
npm run dev
```

Ouvrir http://localhost:3000 — vous serez automatiquement redirigé vers `/fr`.

## 3. Structure du projet

```
src/
  app/
    [locale]/           → toutes les pages, dupliquées pour /fr et /en
      page.tsx           → Accueil
      about/              → La Maison
      fashion/            → Collections
      african-heritage/   → Héritage Africain
      private-atelier/    → Atelier Privé
      uniforms/           → Uniformes
      manufacturing/      → Manufacture
      journal/            → Journal
      contact/            → Contact (formulaire Netlify Forms)
    layout.tsx           → layout racine
    not-found.tsx         → page 404 bilingue
  components/            → Header, Footer, cartes, animations, etc.
  i18n/
    dictionaries/fr.ts    → tout le contenu texte en français (langue principale)
    dictionaries/en.ts    → tout le contenu texte en anglais (équivalent complet)
  middleware.ts           → redirige "/" vers la langue par défaut (FR)
public/
  images/                 → emplacements prévus pour les photos définitives
    fashion/
    african-heritage/
    uniforms/
    manufacturing/
```

## 4. Remplacer les images

Le Phase 1 utilise des **placeholders** identifiés par leur chemin final
(ex. `/images/hero-home.jpg`, `/images/director.jpg`, `/images/workshop.jpg`).
Il suffit de déposer les photos définitives dans `public/images/` en respectant
exactement ces noms de fichiers pour qu'elles apparaissent automatiquement
(composant `ImagePlaceholder` → à remplacer par une balise `<Image>` de Next.js
une fois les visuels disponibles).

## 5. Modifier les textes

Tout le contenu textuel (FR et EN) est centralisé dans :
- `src/i18n/dictionaries/fr.ts`
- `src/i18n/dictionaries/en.ts`

Aucune modification de composant n'est nécessaire pour changer un texte.

## 6. Déploiement sur Netlify

Le fichier `netlify.toml` est déjà configuré avec le plugin officiel
`@netlify/plugin-nextjs`.

**Option A — via Git (recommandé)**
1. Poussez ce projet sur GitHub/GitLab/Bitbucket.
2. Sur Netlify : "Add new site" → "Import an existing project".
3. Netlify détecte automatiquement `npm run build` et le plugin Next.js.
4. Déployez.

**Option B — déploiement manuel (Netlify CLI)**
```bash
npm install -g netlify-cli
netlify deploy --build --prod
```

## 7. Formulaire de contact

Le formulaire de la page Contact est déjà compatible **Netlify Forms**
(attribut `data-netlify="true"`, champ anti-spam caché). Après le premier
déploiement, les soumissions apparaîtront automatiquement dans
Netlify → Site → Forms. Vous pouvez y ajouter une notification par email
depuis le tableau de bord Netlify, sans code supplémentaire.

## 8. Prochaines étapes (Phase 2 suggérée)

- Lookbook digital complet (galeries par collection)
- Bibliothèque de tissus
- Portail client / suivi de commande
- Boutique en ligne
- Concierge IA
- Marchés internationaux additionnels

## Stack technique

- Next.js 14 (App Router, Static Generation via `generateStaticParams`)
- TypeScript
- Tailwind CSS (tokens de marque dans `tailwind.config.ts`)
- Framer Motion (révélations au scroll, menu mobile)
- Polices : Cormorant Garamond (titres) + Manrope (texte courant), via `next/font/google`
