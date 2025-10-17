'use client';

import { CompanyLogo } from '@/components/company-logo';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useI18n } from '@/contexts/i18n-context';
import type { Experience as ExperienceType } from '@/lib/schemas';
import Link from 'next/link';

interface ExperienceProps {
  dataEs: ExperienceType;
  dataEn: ExperienceType;
}

export function Experience({ dataEs, dataEn }: ExperienceProps) {
  const { locale } = useI18n();
  const experienceData = locale === 'en' ? dataEn : dataEs;

  return (
    <section id="experiencia" className="bg-muted/50 py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            {experienceData.title}
          </h2>

          <div className="space-y-6">
            {experienceData.items.map((exp) => {
              // Support both legacy single position and new multiple positions format
              const hasMultiplePositions = exp.positions && exp.positions.length > 0;
              
              return (
                <Card key={exp.id}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      {exp.logo && (
                        <div className="shrink-0 rounded-lg bg-white p-2 shadow-sm ring-1 ring-border">
                          <CompanyLogo
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            size={60}
                          />
                        </div>
                      )}
                      <div className="flex-1 space-y-1.5">
                        <CardTitle>
                          {exp.url ? (
                            <Link
                              href={exp.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-primary transition-colors"
                            >
                              {exp.company}
                            </Link>
                          ) : (
                            exp.company
                          )}
                        </CardTitle>
                        
                        {/* Single position (legacy) */}
                        {!hasMultiplePositions && exp.position && (
                          <CardDescription className="text-base">
                            {exp.position} · {exp.period}
                          </CardDescription>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Multiple positions (promotions) */}
                    {hasMultiplePositions ? (
                      <div className="space-y-6">
                        {exp.positions!.map((pos, index) => (
                          <div key={index} className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-primary">
                            <div className="space-y-2">
                              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                                <h4 className="font-semibold text-foreground">{pos.position}</h4>
                                <span className="text-sm text-muted-foreground">{pos.period}</span>
                              </div>
                              <p className="text-muted-foreground">{pos.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* Single position description (legacy) */
                      exp.description && (
                        <p className="text-muted-foreground">{exp.description}</p>
                      )
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
