const SITE_URL = 'https://fernandolima.pro';

export default function sitemap() {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date('2026-05-14'),
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
