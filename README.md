# Hello World React (Vite)

This is a minimal React app using Vite, preconfigured to build & deploy to **GitHub Pages** using GitHub Actions.

## Quick local steps

1. Install dependencies: `npm install` (no admin rights required if Node is already installed).
2. Start dev server: `npm run dev`.
3. Build for production: `npm run build` (output in `dist/`).

## Deploying to GitHub Pages

1. Create a repository on GitHub (public recommended) and add it as remote, e.g.:

```
git remote add origin https://github.com/<your-user>/<repo>.git
git push -u origin main
```

2. The GitHub Actions workflow in `.github/workflows/pages.yml` will automatically run on push to `main`, build the site and publish it to GitHub Pages.

3. After the workflow succeeds, your site will be available at `https://<your-user>.github.io/<repo>/` (it may take a few minutes).

If you have `gh` CLI installed and authenticated, you can also run:

```
gh repo create <repo> --public --source=. --remote=origin --push
```
