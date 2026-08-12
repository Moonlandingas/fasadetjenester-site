import { LIVE, BASE, PRISER_GODKJENT } from '../lib/site'
export const dynamic = 'force-static'
export default function sitemap() {
  if (!LIVE) return []
  const now = new Date()
  const sider: { url: string; lastModified: Date; priority: number }[] = [
    { url: BASE + '/', lastModified: now, priority: 1 },
    { url: BASE + '/fasadevask', lastModified: now, priority: 0.95 },
    { url: BASE + '/verdt-a-vite', lastModified: now, priority: 0.7 },
    { url: BASE + '/verdt-a-vite/fasadevask', lastModified: now, priority: 0.9 },
    { url: BASE + '/verdt-a-vite/takrenner', lastModified: now, priority: 0.9 },
    { url: BASE + '/verdt-a-vite/istapper', lastModified: now, priority: 0.9 },
    { url: BASE + '/personvern', lastModified: now, priority: 0.2 },
  ]
  // Prissiden tas først inn i sitemap når tallene er godkjent.
  if (PRISER_GODKJENT) {
    sider.splice(2, 0, { url: BASE + '/fasadevask/pris', lastModified: now, priority: 0.9 })
  }
  return sider
}
