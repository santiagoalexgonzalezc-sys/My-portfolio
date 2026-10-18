


This is my personal developer portfolio, built with Next.js, React, and TypeScript. It brings together information about me, the projects I have created, and blog posts where I share what I am learning. I developed it while following and learning from a Platzi course, and continue to use it to practice and showcase my work.



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Testing

This project uses Jest and React Testing Library for unit testing.

### Dependencies

- `jest` - Testing framework
- `@testing-library/react` - React testing utilities
- `@testing-library/jest-dom` - Custom Jest matchers for DOM elements
- `@testing-library/user-event` - User interaction simulation
- `jest-environment-jsdom` - Jest DOM environment

### Configuration

- `jest.config.js` - Jest configuration for Next.js 16 with TypeScript and Tailwind CSS
- `jest.setup.js` - Setup file for @testing-library/jest-dom matchers
- `jest.d.ts` - TypeScript type definitions for Jest matchers

### Running Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

### Existing Tests

- `components/Header.test.tsx` - Tests for Header component:
  - Renders logo with correct text
  - Renders navigation links
  - Navigation links have correct href attributes
  - Renders with correct semantic structure

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
