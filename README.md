# pm pricing POC

![Deploy with ZEIT Now](https://zeit.co/button)

## Basic installation

- `npm install` install the dependencies
- `npm run dev` runs the dev server
- `npm run build` produce the **build** and the **export**, once built the solution can be visited running `npm start`

## Technologies

- [NextJS](https://nextjs.org/)
- [Zeit Now](https://zeit.co/)
- [ReacJS](https://reactjs.org/)

## Live preview website

This POC has been depoloyed with Zeit Now

[https://pm-pricing.bernardodestefano.now.sh/](https://pm-pricing.bernardodestefano.now.sh/)

## Considerations

Nextjs has 3 ways of building your website. For this specific case I'm using the **SSG** (Static Site Generation). All data needed is fetched at build time and renders the page to static html. In case a service fails (i.e. an API we rely on for fetching new content) the build process fails and our live page is safe since it doesn't get rebuild.
