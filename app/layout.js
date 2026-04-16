import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--mono',
  weight: ['300', '400', '500'],
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--serif-display',
  weight: ['400'],
  style: ['normal', 'italic'],
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
    'Fernando Lima é desenvolvedor fullstack com 9+ anos de experiência em Node.js, React, TypeScript e IA. Cofundador da Flavum Labs. Construindo produtos digitais de ponta a ponta.',
  applicationName: 'Fernando Lima',
  authors: [{ name: 'Fernando Lima', url: SITE_URL }],
  creator: 'Fernando Lima',
  publisher: 'Fernando Lima',
  keywords: [
    'Fernando Lima',
    'fullstack developer',
    'desenvolvedor fullstack',
    'Node.js',
    'React',
    'TypeScript',
    'Next.js',
    'JavaScript',
    'desenvolvedor remoto',
    'freelancer',
    'SaaS',
    'marketplace',
    'IA',
    'Flavum Labs',
    'Desconta.ai',
    'Mato Grosso do Sul',
    'Brasil',
  ],
  category: 'technology',
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/',
      'en-US': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: ['en_US'],
    url: SITE_URL,
    siteName: 'Fernando Lima',
    title: 'Fernando Lima — Fullstack Developer',
    description:
      'Desenvolvedor fullstack há 9+ anos. Node, React, TypeScript e IA. Cofundador da Flavum Labs. Produtos digitais de ponta a ponta.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fernando Lima — Fullstack Developer',
    description:
      'Desenvolvedor fullstack há 9+ anos. Node, React, TypeScript e IA. Cofundador da Flavum Labs.',
    creator: '@lnfernandobr',
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
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Fernando Lima',
  alternateName: 'lnfernandobr',
  url: SITE_URL,
  jobTitle: 'Fullstack Developer',
  description:
    'Desenvolvedor fullstack com 9+ anos de experiência em Node.js, React, TypeScript e IA. Cofundador da Flavum Labs.',
  knowsAbout: [
    'Node.js',
    'React',
    'TypeScript',
    'Next.js',
    'JavaScript',
    'Fullstack Development',
    'SaaS',
    'Artificial Intelligence',
  ],
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'MS',
    addressCountry: 'BR',
  },
  sameAs: [
    'https://github.com/lnfernandobr',
    'https://flavumlabs.com',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Flavum Labs',
    url: 'https://flavumlabs.com',
  },
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
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body>
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
