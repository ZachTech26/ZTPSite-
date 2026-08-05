# ZachsTechPage (ZTP)

A fresh Astro build with a terminal-inspired theme: Home, Projects, Blog and About as separate pages.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:4321 in your browser.

## Add a new blog post

1. Duplicate `src/pages/blog/ztp-init.astro`
2. Rename the file to match your new post's URL, e.g. `src/pages/blog/my-new-post.astro`
3. Update the title, date and body content
4. Add it to the `posts` array in `src/pages/blog.astro` so it shows up in the listing

## Add a new project

Edit the `projects` array near the top of `src/pages/projects.astro` (and optionally `featuredProjects` in `src/pages/index.astro` if you want it on the homepage too).

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial ZTP site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

## Deploy on Cloudflare Pages

1. Log into Cloudflare, go to Workers & Pages, and click Create
2. Choose Pages, then Connect to Git, and select your GitHub repo
3. Build settings:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Click Save and Deploy

Once connected, every `git push` to `main` triggers a new deploy automatically.

## Connect your domain

In Cloudflare Pages, go to your project's Custom domains tab and add zachstechpage.com. Since your domain is already on Cloudflare, this step is usually just a couple of clicks and Cloudflare handles the DNS for you.
