# Mika

Concept website for **Mika**, a members' club in Rotterdam built around a kitchen: chef-cooked meals, coached sessions and evenings at one long table.

Static HTML, CSS and JS. No build step.

## Pages

| Path | What it is |
|---|---|
| `/` (`index.html`) | The three homepage directions side by side (final) |
| `/landing.html` | Founding membership landing page |
| `/a.html` | Direction A · Journal |
| `/b.html` | Direction B · Red room |
| `/c.html` | Direction C · Index |

Shared files: `css/base.css` (tokens: red `#E1361C`, cream `#FFFCEE`, ink `#16120F`, square corners), `js/base.js` (wordmark symbol, scroll reveals, tabs), `fonts/`, `img/`. The wordmark is also in `brand/mika-wordmark.svg`.

## Deploy on Cloudflare

Workers & Pages → Create → connect `gonuova/mika`, production branch `main`.
No framework, no build command, output directory `/`. Then add a custom domain.

## Before going public

- Search engines are blocked on purpose (`robots.txt` and `X-Robots-Tag` in `_headers`). Remove both to allow indexing.
- `fonts/ppneue.woff2` is PP Neue Montreal, a commercial font: check the web licence covers this use.
- All prices, places, dates, addresses, events and member quotes are placeholder concept content.

Fonts: Instrument Serif (OFL), PP Neue Montreal (licensed). Wordmark drawn from Dela Gothic One (OFL).
