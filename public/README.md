# fernandolimaindie — visual identity

Direção **C · Edition** — editorial moderno, sans grotesque tight, cobalto único, barra `/` como assinatura do sistema.

## Arquivos

```
dist/
├── logo.svg              — wordmark completo (vetor)
├── logo-mark.svg         — só o quadrado FL/ (vetor)
├── favicon.svg           — favicon vetorial (use como padrão)
├── favicon-16.png        — fallback 16×16
├── favicon-32.png        — fallback 32×32
├── favicon-192.png       — Android / PWA
├── favicon-512.png       — Android / PWA / share
├── apple-touch-icon.png  — iOS home screen (180×180)
├── og.png                — Open Graph / Twitter Card (1200×630)
├── twitter-banner.png    — header do Twitter/X (1500×500)
├── youtube-banner.png    — canal YouTube (2560×1440, com safe area)
├── tokens.css            — variáveis CSS prontas (cores, fontes, escala)
└── README.md
```

## Como usar no `<head>`

```html
<!-- Favicon (modern browsers) -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png">
<link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png">

<!-- Open Graph -->
<meta property="og:title" content="fernandolimaindie">
<meta property="og:description" content="an indie workspace for the work — writing, apis, small useful tools">
<meta property="og:image" content="https://fernandolimaindie.com/og.png">
<meta property="og:url" content="https://fernandolimaindie.com">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://fernandolimaindie.com/og.png">

<!-- Theme color (matches the cobalt) -->
<meta name="theme-color" content="#1b48e0">

<!-- Design tokens -->
<link rel="stylesheet" href="/tokens.css">
```

## Paleta

| Token             | Valor      | Uso                                  |
| ----------------- | ---------- | ------------------------------------ |
| `--fli-bg`        | `#f6f6f4`  | Background da página                 |
| `--fli-bg-2`      | `#e9e9e4`  | Superfícies secundárias, code blocks |
| `--fli-ink`       | `#0d0d0d`  | Texto principal                      |
| `--fli-ink-soft`  | `#5c5c58`  | Meta, kickers, texto secundário      |
| `--fli-accent`    | `#1b48e0`  | Links, a barra `/`, marcações        |
| `--fli-rule`      | `rgba(13,13,13,.14)` | Hairlines, separadores       |

## Tipografia

- **Display / corpo:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (400, 500, 600, 700)
- **Mono:** [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (400, 500) — meta, kickers, código

Carregado automaticamente pelo `tokens.css` via Google Fonts.

## A regra do `/`

A barra `/` é a assinatura do sistema. Sempre em `--fli-accent`, sempre **depois** do wordmark ou ao final de uma frase curta. Não use em outros lugares — é o ponto de cobalto único da identidade.

```html
<span class="fli-wordmark">fernandolimaindie</span>
<!-- renders: fernandolimaindie/  (the / is added automatically in --fli-accent) -->
```
