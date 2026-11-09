import { createFileRoute } from '@tanstack/react-router'
import { Page } from '~/components/Page'

export const Route = createFileRoute('/about')({
  loader: () => new Promise((r) => setTimeout(r, 500)),
  component: Page,
  pendingComponent: Page,
})
