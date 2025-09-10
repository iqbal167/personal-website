This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and enhanced with [shadcn/ui](https://ui.shadcn.com) components.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 🎨 shadcn/ui Components

This project is pre-configured with shadcn/ui for consistent, accessible UI components.

### Quick Component Installation

```bash
# Install essential components
npm run shadcn:basic

# Install form components
npm run shadcn:forms

# Install all essential components
npm run shadcn:all

# See all available options
npm run shadcn:help
```

### Available Scripts

- `npm run shadcn:basic` - Install basic components (button, card, input, label, badge)
- `npm run shadcn:forms` - Install form components (input, textarea, select, checkbox, etc.)
- `npm run shadcn:layout` - Install layout components (tabs, accordion, sheet, etc.)
- `npm run shadcn:feedback` - Install feedback components (alert, dialog, toast, etc.)
- `npm run shadcn:all` - Install all essential components

### Example Pages

Check the `examples/` folder for ready-to-use page examples:

- `shadcn-simple-page.tsx` - Simple page with shadcn/ui components
- `shadcn-interactive-page.tsx` - Interactive page with forms and tabs
- `shadcn-dashboard-page.tsx` - Complete dashboard example

### Quick Start with Examples

```bash
# Copy dashboard example to your app
mkdir -p src/app/dashboard
cp examples/shadcn-dashboard-page.tsx src/app/dashboard/page.tsx

# Visit http://localhost:3000/dashboard
```

## 📚 Documentation

- [shadcn/ui Setup Guide](./SHADCN-SETUP.md) - Complete setup and installation guide
- [Component Reference](./scripts/COMPONENT-LIST.md) - All available components
- [Examples Documentation](./examples/README.md) - Usage examples and patterns

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [shadcn/ui Documentation](https://ui.shadcn.com) - learn about the UI components.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
