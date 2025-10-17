'use client';

import { CompanyLogo } from '@/components/company-logo';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useI18n } from '@/contexts/i18n-context';
import type { Education as EducationType } from '@/lib/schemas';
import Link from 'next/link';

interface EducationProps {
  dataEs: EducationType;
  dataEn: EducationType;
}

export function Education({ dataEs, dataEn }: EducationProps) {
  const { locale } = useI18n();
  const educationData = locale === 'en' ? dataEn : dataEs;

  return (
    <section id="educacion" className="container py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          {educationData.title}
        </h2>

        <div className="space-y-6">
          {educationData.items.map((edu) => (
            <Card key={edu.id}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  {edu.logo && (
                    <div className="shrink-0 rounded-lg bg-white p-2 shadow-sm ring-1 ring-border">
                      <CompanyLogo
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        size={60}
                      />
                    </div>
                  )}
                  <div className="flex-1 space-y-1.5">
                    <CardTitle>
                      {edu.url ? (
                        <Link
                          href={edu.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          {edu.institution}
                        </Link>
                      ) : (
                        edu.institution
                      )}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {edu.degree} · {edu.period}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
