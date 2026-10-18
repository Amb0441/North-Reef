# North Reef

A mock property website built to showcase website development: search, listing pages, team and office directories, appraisals, calculators, a maintenance portal, and an on-site assistant.

North Reef is not a real agency. Names, suburbs, listings, phones, and market figures are placeholders.

## Run locally

**Prerequisites:** Node.js

1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev`
3. Open `http://localhost:3000`

## GitHub Pages

Pushes to `main` or `master` run `.github/workflows/pages.yml`, which builds the site and publishes it with GitHub Actions.

In the repository settings, open **Pages** and set the source to **GitHub Actions**. The site is served from `https://<user>.github.io/<repository>/`. A repository named `<user>.github.io` is served from the domain root.
