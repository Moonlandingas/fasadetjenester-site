import { LIVE, BASE } from '../lib/site'
export const dynamic = 'force-static'
export default function sitemap() {
  if (!LIVE) return []
  const now = new Date()
  return [
    { url: BASE + '/', lastModified: now, priority: 1 },
    { url: BASE + '/verdt-a-vite', lastModified: now, priority: 0.7 },
    { url: BASE + '/personvern', lastModified: now, priority: 0.2 },
    { url: BASE + '/verdt-a-vite/fasadevask', lastModified: now, priority: 0.9 },
  ]
}
