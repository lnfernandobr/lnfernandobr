import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--mono',
  weight: ['400', '500'],
  display: 'swap',
});

const SITE_URL = 'https://fernandolima.pro';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Fernando Lima',
    template: '%s | Fernando Lima',
  },
  description:
    'Fernando Lima — desenvolvedor e builder. Construindo produtos end-to-end com IA e mostrando tudo no caminho.',
  applicationName: 'Fernando Lima',
  authors: [{ name: 'Fernando Lima', url: SITE_URL }],
  creator: 'Fernando Lima',
  publisher: 'Fernando Lima',
  keywords: [
    'Fernando Lima',
    'desenvolvedor',
    'engenheiro de software',
    'builder',
    'indie hacker',
    'build in public',
    'IA',
    'inteligência artificial',
    'produtos digitais',
    'SaaS',
    'Next.js',
    'React',
    'JavaScript',
    'Mato Grosso do Sul',
    'Brasil',
  ],
  category: 'personal',
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/',
      'en-US': '/',
      'x-default': '/',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: ['en_US'],
    url: SITE_URL,
    siteName: 'Fernando Lima',
    title: 'Fernando Lima',
    description:
      'Desenvolvedor e builder. Construindo produtos end-to-end com IA e mostrando tudo no caminho.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Fernando Lima' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fernando Lima',
    description:
      'Desenvolvedor e builder. Construindo produtos end-to-end com IA e mostrando tudo no caminho.',
    creator: '@lnfernandobr',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport = {
  themeColor: '#0c0c0b',
  width: 'device-width',
  initialScale: 1,
};

const themeInitScript = `document.documentElement.setAttribute('data-theme', 'dark');`;

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Fernando Lima',
  alternateName: 'lnfernandobr',
  url: SITE_URL,
  description: 'Desenvolvedor e builder. Construindo produtos end-to-end com IA.',
  jobTitle: 'Software Engineer',
  knowsAbout: [
    'Software Development',
    'Artificial Intelligence',
    'Product Development',
    'Web Development',
    'React',
    'Next.js',
  ],
  image: `${SITE_URL}/me.jpeg`,
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'MS',
    addressCountry: 'BR',
  },
  sameAs: [
    'https://github.com/lnfernandobr',
    'https://twitter.com/lnfernandobr',
    'https://x.com/lnfernandobr',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Fernando Lima',
  url: SITE_URL,
  inLanguage: ['pt-BR', 'en-US'],
  author: {
    '@type': 'Person',
    name: 'Fernando Lima',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
