'use client';

import { useI18n } from '@/contexts/i18n-context';
import type { AboutFrontmatter } from '@/lib/schemas';
import { About } from './about';

interface AboutSectionProps {
  dataEs: { data: AboutFrontmatter; content: string };
  dataEn: { data: AboutFrontmatter; content: string };
}

export function AboutSection({ dataEs, dataEn }: AboutSectionProps) {
  const { locale } = useI18n();
  const aboutData = locale === 'en' ? dataEn : dataEs;

  return (
    <About
      data={{
        title: aboutData.data.title,
        image: aboutData.data.image || '/images/perfil.svg',
        downloadLabel: aboutData.data.downloadLabel,
      }}
      content={aboutData.content}
    />
  );
}
