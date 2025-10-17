import { getAllProjectSlugs } from '@/lib/content';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jose-rodriguez.dev';
  const projectSlugs = getAllProjectSlugs();
  const now = new Date();

  const staticPages = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/cv/es`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cv/en`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];

  // Add project pages (both languages)
  const projectPages = projectSlugs.flatMap((slug) => [
    {
      url: `${baseUrl}/proyectos/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]);

  return [...staticPages, ...projectPages];
}
