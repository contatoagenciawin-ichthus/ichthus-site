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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Contact backend

The Ichthus 2.0 contact form submits to `/api/contact`.

Required environment variables:

- `DATABASE_URL` — pooled Neon connection string for the dedicated `ichthus_commercial` database using the `ichthus_site` role.
- `RESEND_API_KEY` — optional for deployment validation, required for email notification in production.
- `CONTACT_TO_EMAIL` — defaults to `contato@ichthusmkt.com.br`.
- `CONTACT_FROM_EMAIL` — sender identity used by Resend.

Database schema is versioned at `database/001_contact_leads.sql`.

The production database lives inside the generic `proxy-service-platform` Neon project, isolated as its own PostgreSQL database `ichthus_commercial`. The website role only has SELECT, INSERT and UPDATE access to `contact_leads`.

If `RESEND_API_KEY` is unavailable, leads are still persisted and marked with `notification_status = 'skipped'`. If `DATABASE_URL` is unavailable, the API returns a service-unavailable response and the form exposes the contact email as fallback.
