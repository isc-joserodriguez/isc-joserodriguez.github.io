'use client';

import { Button } from '@/components/ui/button';
import { getSocialIcon } from '@/lib/icons';
import type { SiteData } from '@/lib/schemas';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroProps {
  siteData: SiteData;
}

export function Hero({ siteData }: HeroProps) {
  const { hero, socials } = siteData;
  return (
    <section id="inicio" className="container flex min-h-[calc(100vh-4rem)] items-center py-12">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="mb-4 text-xl text-muted-foreground sm:text-2xl">
            {hero.subtitle}
          </p>
          <p className="mb-8 text-lg text-muted-foreground">
            {hero.location}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <p className="mx-auto max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
            {hero.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12 flex flex-wrap justify-center gap-4"
        >
          <Button asChild size="lg">
            <Link href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={hero.ctaSecondary.href}>{hero.ctaSecondary.label}</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-4"
          role="navigation"
          aria-label="Enlaces de redes sociales"
        >
          {socials.map((social) => {
            const Icon = getSocialIcon(social.key);
            return Icon ? (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm"
                aria-label={`Visitar mi perfil de ${social.name}`}
                title={social.name}
              >
                <Icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ) : null;
          })}
        </motion.div>
      </div>
    </section>
  );
}
