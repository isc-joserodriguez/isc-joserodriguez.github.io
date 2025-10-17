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
    default: 'José Antonio Rodriguez Hernandez | Full-Stack Tech Lead',
    template: '%s | José Rodriguez',
  },
  description:
    'Full-Stack Tech Lead con 7+ años de experiencia. Especializado en arquitecturas escalables, liderazgo técnico, React, Next.js, NestJS, Node.js, TypeScript, PostgreSQL, GraphQL y AWS. Portfolio profesional con proyectos destacados.',
  keywords: [
    'Full-Stack Developer',
    'Tech Lead',
    'Team Lead',
    'React',
    'Next.js',
    'NestJS',
    'Node.js',
    'TypeScript',
    'JavaScript',
    'PostgreSQL',
    'MongoDB',
    'GraphQL',
    'Prisma',
    'AWS',
    'Docker',
    'React Native',
    'Web Development',
    'Mobile Development',
    'Arquitectura de Software',
    'Liderazgo Técnico',
    'José Rodriguez',
    'José Antonio Rodriguez',
    'isc-joserodriguez',
  ],
  authors: [{ name: 'José Antonio Rodriguez Hernandez', url: 'https://jose-rodriguez.dev' }],
  creator: 'José Antonio Rodriguez Hernandez',
  publisher: 'José Antonio Rodriguez Hernandez',
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
    alternateLocale: ['en_US'],
    url: 'https://jose-rodriguez.dev',
    title: 'José Antonio Rodriguez Hernandez | Full-Stack Tech Lead',
    description:
      'Full-Stack Tech Lead con 7+ años de experiencia en arquitecturas escalables, React, NestJS, TypeScript, PostgreSQL y AWS.',
    siteName: 'José Rodriguez Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'José Antonio Rodriguez Hernandez - Full-Stack Tech Lead',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'José Antonio Rodriguez Hernandez | Full-Stack Tech Lead',
    description:
      'Tech Lead con 7+ años de experiencia. React, NestJS, TypeScript, PostgreSQL, GraphQL, AWS.',
    images: ['/og-image.png'],
    creator: '@isc_jrodriguez',
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
    name: 'José Antonio Rodriguez Hernandez',
    alternateName: 'José Rodriguez',
    jobTitle: 'Full-Stack Tech Lead',
    description:
      'Full-Stack Tech Lead con más de 7 años de experiencia en desarrollo de software, arquitecturas escalables y liderazgo técnico. Especializado en React, Next.js, NestJS, Node.js, TypeScript, PostgreSQL, GraphQL y AWS.',
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
      'NestJS',
      'TypeScript',
      'JavaScript',
      'PostgreSQL',
      'MongoDB',
      'GraphQL',
      'Prisma',
      'AWS',
      'Docker',
      'React Native',
      'Full Stack Development',
      'Team Leadership',
      'Software Architecture',
      'Microservices',
      'RESTful APIs',
      'CI/CD',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Blackstone Studio',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'José Antonio Rodriguez Hernandez - Portfolio',
    description: 'Portfolio profesional de José Antonio Rodriguez Hernandez - Full-Stack Tech Lead con 7+ años de experiencia',
    url: 'https://jose-rodriguez.dev',
    author: {
      '@type': 'Person',
      name: 'José Antonio Rodriguez Hernandez',
    },
    inLanguage: ['es-MX', 'en-US'],
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://jose-rodriguez.dev?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
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
        <noscript>
          <div style={{
            padding: '2rem',
            maxWidth: '800px',
            margin: '0 auto',
            fontFamily: 'system-ui, sans-serif',
            lineHeight: '1.6'
          }}>
            <h1>José Antonio Rodriguez Hernandez</h1>
            <h2>Full-Stack Tech Lead | 7+ años de experiencia</h2>
            <p>
              Tech Lead especializado en arquitecturas escalables, liderazgo técnico y desarrollo Full Stack. 
              Experiencia con React, Next.js, Node.js, NestJS, TypeScript, PostgreSQL, MongoDB, GraphQL, y AWS.
            </p>
            <h3>Experiencia Destacada</h3>
            <ul>
              <li><strong>Blackstone Studio</strong> - Tech-Team Lead (2023-Actualidad)</li>
              <li><strong>Universidad Utel | U-Camp</strong> - Tech Lead (2021-2024)</li>
              <li><strong>DotDevs</strong> - Full Stack Developer (2020-2021)</li>
            </ul>
            <h3>Contacto</h3>
            <ul>
              <li>Email: isc.joserodriguez@gmail.com</li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/isc-joserodriguez">linkedin.com/in/isc-joserodriguez</a></li>
              <li>GitHub: <a href="https://github.com/isc-joserodriguez">github.com/isc-joserodriguez</a></li>
            </ul>
            <p><em>Este sitio requiere JavaScript para la experiencia completa e interactiva.</em></p>
          </div>
        </noscript>
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
