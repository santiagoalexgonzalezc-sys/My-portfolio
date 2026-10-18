# Santiago's Portfolio

This is my personal developer portfolio, built with Next.js, React, and TypeScript. It brings together information about me, the projects I have created, and blog posts where I share what I am learning. I developed it while following a Platzi course, and continue to use it to practice and showcase my work.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Bun](https://bun.sh/) for the posts API

### Install dependencies

```bash
npm install
```

### Run the application

Start the Next.js app and Bun API together:

```bash
npm run dev:all
```

Then open [http://localhost:3000](http://localhost:3000).

Alternatively, start the services in separate terminals:

```bash
npm run dev
```

```bash
npm run server
```

## Testing

This project uses Jest and React Testing Library.

Run all tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Run tests and generate a coverage report:

```bash
npm run test:coverage
```

### Test configuration

- `jest.config.js` - Jest configuration for Next.js, TypeScript, and Tailwind CSS
- `jest.setup.js` - Test setup for `@testing-library/jest-dom`
- `jest.d.ts` - Type definitions for Jest matchers

### Existing tests

- `components/Header.test.tsx` - Tests the header logo, navigation links, and semantic structure
- `app/blog/[slug]/page.test.tsx` - Tests blog post rendering, related posts, and missing posts

## Project Structure

- `app/` - Next.js pages and global styles
- `components/` - Shared interface components
- `server.ts` - Bun server that provides the blog posts API

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub repository](https://github.com/vercel/next.js)

## Deployment

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for information about deploying the application.
