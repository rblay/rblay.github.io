# rblay.github.io

Personal portfolio landing page hosted on GitHub Pages.

## Edit content

- Main page: `docs/index.html`
- Styles: `docs/styles.css`
- Not found page: `docs/404.html`

## Deploy

Push to `main`; GitHub Pages serves the site from the `docs/` folder.

## Cloudflare Web Analytics

This site uses Cloudflare Web Analytics through the standard beacon snippet embedded in the HTML pages.

1. In the Cloudflare dashboard, go to `Web Analytics` and add your site hostname.
2. Copy the site token from `Manage site`.
3. Replace the token in the Cloudflare beacon snippet in `docs/index.html` and `docs/404.html`.
4. Push to `main`.

Cloudflare's current docs say manual setup works for sites not proxied through Cloudflare, including static sites hosted elsewhere, by adding the beacon before the closing `body` tag:
- https://developers.cloudflare.com/web-analytics/get-started/
- https://developers.cloudflare.com/web-analytics/faq/
