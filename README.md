This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

## Login demo

This project now includes a login page at `/login` and a demo login API at `/api/auth/login`.

### Local environment setup

1. Copy `.env.example` to `.env.local`.
2. Update values as needed:

```bash
cp .env.example .env.local
```

Environment variables used:

- `NEXT_PUBLIC_APP_NAME`
- `NEXT_PUBLIC_APP_URL`
- `AUTH_DEMO_EMAIL`
- `AUTH_DEMO_PASSWORD`

`AUTH_DEMO_*` values are server-only and should never be exposed in client code.

### Vercel environment setup

In Vercel Project Settings -> Environment Variables, add the same keys from `.env.example`.

Recommended:

- set `NEXT_PUBLIC_APP_URL` to your Vercel production URL
- set `AUTH_DEMO_EMAIL` and `AUTH_DEMO_PASSWORD` to non-default values

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
