# Innovation Sparring Landingpage

Production: [innovation.tarent.de/the-right-it](innovation.tarent.de/the-right-it)
Production Code Without Domain: [https://innovation-sparring.netlify.app/the-right-it](https://innovation-sparring.netlify.app/the-right-it)
Staging: [https://staging--innovation-sparring.netlify.app/the-right-it](https://staging--innovation-sparring.netlify.app/the-right-it)

## Start locally

```
npm run dev
```

## Setup in Netlify

The build configuration is done via [netlify.toml](/netlify.toml).
I had to set the the staging branch as a Branch deploy in the UI, though.

## Deploy

Just push to the repository's main branch. It's linked with netlify, which
triggers a build/deploy.

## Google Analytics and Google Tag Manager

We have two properties defined in GA:

- Innovation Sparring Production
- Innovation Sparring Staging

The tags are deployed via Google Tag Manager.
