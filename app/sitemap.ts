import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://deskio.dk'
  const now = new Date()

  const nichePages = [
    'frisoer',
    'klinik',
    'fitness',
    'restaurant',
    'tandlaege',
    'konsulent',
    'tatovering',
    'autovaerksted',
    'escape-room',
    'coworking',
  ]

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${base}/#funktioner`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/#priser`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://dashboard.deskio.dk/register',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: `${base}/handelsbetingelser`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    },
    // Niche landing pages — high SEO priority
    ...nichePages.map((slug) => ({
      url: `${base}/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ]
}
