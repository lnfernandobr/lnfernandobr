const SITE_URL = 'https://fernandolima.pro';

export default function sitemap() {
  const now = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          'pt-BR': `${SITE_URL}/`,
          'en-US': `${SITE_URL}/`,
        },
      },
    },
  ];
}
