# Imported component as both `component` and `pendingComponent` is left undefined after automatic code splitting

Made from the official `examples/react/start-bare` example. Changes: `src/routes/about.tsx` and `src/components/Page.tsx`.

```tsx
import { Page } from '~/components/Page'

export const Route = createFileRoute('/about')({
  loader: () => new Promise((r) => setTimeout(r, 500)),
  component: Page,
  pendingComponent: Page,
})
```

## Steps

```sh
pnpm install
pnpm vite build
grep -n 'pendingComponent' dist/server/assets/router-*.js   # pendingComponent: Page, with no import of Page
pnpm start   # open http://localhost:3000/about -> ReferenceError: Page is not defined
```

## Control

Use `pendingComponent: () => <p>Loading</p>` instead. The build output then has no free `Page` and `/about` renders.
