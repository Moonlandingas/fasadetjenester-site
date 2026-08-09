import { LIVE, BASE } from '../lib/site'
export const dynamic = 'force-static'
export default function robots() {
  if (!LIVE) return { rules: { userAgent: '*', disallow: '/' } }
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: BASE + '/sitemap.xml',
  }
}
