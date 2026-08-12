# Web Intro — Template riutilizzabile

Template riutilizzabile per web app: **React 19 + TypeScript + Material UI (MUI v9) + Vite**, con architettura a **containers** (logica) e **components** (presentazione), routing, tema chiaro/scuro e **installabile come PWA**.

## Comandi

```bash
npm run dev          # avvio in sviluppo (http://localhost:5173)
npm run build        # build di produzione (dist/)
npm run preview      # anteprima della build
npm run lint         # lint (oxlint)
npm run generate:pwa # rigenera icone PWA da public/logo.svg
```

## Installazione dell'app

La web app è una PWA: dal browser puoi installarla come app nativa.

- **Windows / macOS**: Chrome o Edge → icona "Install" nella barra degli indirizzi, oppure menu → Installa.
- **Android**: Chrome → menu → "Aggiungi a schermata Home".
- **iPhone / iPad**: Safari → condividi → "Aggiungi a Home".
- Nota: Safari desktop (macOS) non supporta l'installazione PWA; l'app resta comunque usabile via web.

Dopo `npm run build` e `npm run preview`, apri l'app e installa.

## Struttura del progetto

```
src/
├── app/                  # root dell'app: providers e rotte
│   ├── App.tsx           # ColorModeProvider + RouterProvider
│   └── router.tsx        # definizione delle rotte
├── theme/                # tema MUI, chiaro/scuro
├── containers/           # LOGICA: stato, fetch, orchestrazione
│   ├── home/             # (esempio: useLocalStorage)
│   ├── gallery/          # (esempio: stato complesso)
│   └── notFound/
├── components/           # PRESENTAZIONE: solo props, UI riusabile
│   ├── layout/           # AppLayout (AppBar + Drawer responsive)
│   ├── home/ gallery/
├── hooks/                # custom hooks condivisi (useLocalStorage)
└── types/                # tipi condivisi
```

### Regola dell'architettura

- I **containers** contengono tutta la logica (stato, eventi, chiamate API) e **non** conoscono dettagli di presentazione.
- I **components** sono puri: ricevono `props` e callback, sono riusabili e sostituibili.
- Tutto lo stato parte dal container e scende nei componenti.

Questa separazione rende la logica riutilizzabile anche per un futuro client mobile (es. Expo/React Native): si riusano i containers e si riscrivono solo i componenti.

## Come riusare questo template

1. Copia la cartella e rinominala.
2. Aggiorna i campi di `package.json` (nome, versione).
3. Aggiorna nome/descrizione nel manifest PWA in `vite.config.ts` e nei meta di `index.html`.
4. Sostituisci `public/logo.svg` con il tuo logo e run `npm run generate:pwa`.
5. Regola i colori del brand in `src/theme/theme.ts` (costante `BRAND_COLOR`).
6. Aggiungi le tue feature: nuova cartella in `containers/` con i relativi `components/`, e registra la rotta in `src/app/router.tsx`.

## Stack e note

- Vite 8, React 19, TypeScript strict, MUI v9, React Router v7, oxlint.
- Font Roboto incluso via `@fontsource` (nessun CDN esterno).
- PWA con `vite-plugin-pwa` (workbox, auto-update).
- Niente librerie di state: si usano i React hooks nativi. La struttura è pronta per aggiungere Zustand/Redux/TanStack Query quando necessario.