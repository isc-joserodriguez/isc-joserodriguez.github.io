import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { SkipToContent } from '@/components/SkipToContent';
import { ThemeProvider } from '@/components/theme-provider';
import { I18nProvider } from '@/contexts/i18n-context';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://jose-rodriguez.dev'),
  title: {
    default: 'José Rodriguez | Full-Stack Developer',
    template: '%s | José Rodriguez',
  },
  description:
    'Full-Stack Developer especializado en React, Next.js, Node.js y tecnologías modernas. Portafolio de proyectos y experiencia profesional.',
  keywords: [
    'Full-Stack Developer',
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'JavaScript',
    'Web Development',
  ],
  authors: [{ name: 'José Rodriguez', url: 'https://jose-rodriguez.dev' }],
  creator: 'José Rodriguez',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://jose-rodriguez.dev',
    title: 'José Rodriguez | Full-Stack Developer',
    description:
      'Full-Stack Developer especializado en React, Next.js, Node.js y tecnologías modernas.',
    siteName: 'José Rodriguez Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'José Rodriguez - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'José Rodriguez | Full-Stack Developer',
    description:
      'Full-Stack Developer especializado en React, Next.js, Node.js y tecnologías modernas.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD for Person and WebSite
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'José Rodriguez',
    jobTitle: 'Full-Stack Developer',
    description:
      'Ingeniero en Sistemas Computacionales especializado en desarrollo Full Stack con React, Next.js, Node.js y tecnologías modernas.',
    url: 'https://jose-rodriguez.dev',
    email: 'isc.joserodriguez@gmail.com',
    telephone: '+52-311-113-1755',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tepic',
      addressRegion: 'Nayarit',
      addressCountry: 'MX',
    },
    sameAs: [
      'https://www.linkedin.com/in/isc-joserodriguez',
      'https://github.com/isc-joserodriguez',
      'https://www.hackerrank.com/isc_jrodriguez',
      'https://codepen.io/isc-joserodriguez',
      'https://www.codewars.com/users/isc-joserodriguez',
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Instituto Tecnológico de Tepic',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'BEDU',
      },
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'MongoDB',
      'PostgreSQL',
      'Full Stack Development',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'José Rodriguez Portfolio',
    description: 'Portafolio profesional de José Rodriguez - Full-Stack Developer',
    url: 'https://jose-rodriguez.dev',
    author: {
      '@type': 'Person',
      name: 'José Rodriguez',
    },
    inLanguage: ['es-MX', 'en-US'],
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={inter.className}>
        <I18nProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <SkipToContent />
            <div className="flex min-h-screen flex-col">
              <Navigation />
              <main id="main-content" className="flex-1" tabIndex={-1}>
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
