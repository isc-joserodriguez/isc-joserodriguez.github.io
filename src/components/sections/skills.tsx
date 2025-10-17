'use client';

import { TechIcon } from '@/components/tech-icon';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useI18n } from '@/contexts/i18n-context';
import type { Skills as SkillsType } from '@/lib/schemas';
import Link from 'next/link';

interface SkillsProps {
  dataEs: SkillsType;
  dataEn: SkillsType;
}

export function Skills({ dataEs, dataEn }: SkillsProps) {
  const { locale } = useI18n();
  const skillsData = locale === 'en' ? dataEn : dataEs;

  return (
    <section id="habilidades" className="container py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          {skillsData.title}
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.categories.map((category) => (
            <Card key={category.id}>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {category.items.map((skill) => {
                  const content = (
                    <>
                      <TechIcon iconKey={skill.iconKey} label={skill.label} size={16} />
                      {skill.label}
                    </>
                  );

                  if (skill.href) {
                    return (
                      <Link
                        key={skill.id}
                        href={skill.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Badge variant="secondary" className="inline-flex items-center gap-1.5 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                          {content}
                        </Badge>
                      </Link>
                    );
                  }

                  return (
                    <Badge key={skill.id} variant="secondary" className="inline-flex items-center gap-1.5">
                      {content}
                    </Badge>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
