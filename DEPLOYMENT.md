# Deploy Portfolio ke GitHub Pages

## Prerequisites

- Repository GitHub sudah dibuat
- Code sudah di-push ke GitHub

## Step 1: Install GitHub Pages Package

```bash
npm install --save-dev gh-pages
```

## Step 2: Update package.json

Tambahkan scripts berikut di `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d out"
  },
  "homepage": "https://yourusername.github.io/repository-name"
}
```

## Step 3: Update next.config.js

Buat atau update file `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

## Step 4: Deploy

```bash
npm run deploy
```

## Step 5: Enable GitHub Pages

1. Buka repository di GitHub
2. Go to Settings > Pages
3. Source: Deploy from a branch
4. Branch: gh-pages
5. Folder: / (root)
6. Save

## Automatic Deployment (Optional)

Buat file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## Troubleshooting

- Pastikan `basePath` sesuai dengan nama repository jika tidak menggunakan custom domain
- Check console browser untuk error 404 pada assets
- Tunggu 5-10 menit setelah deploy untuk perubahan terlihat

Website akan tersedia di: `https://yourusername.github.io/repository-name`
