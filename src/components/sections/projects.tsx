'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useI18n } from '@/contexts/i18n-context';
import type { ProjectFrontmatter } from '@/lib/schemas';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectsProps {
  projectsEs: Array<{ data: ProjectFrontmatter; content: string }>;
  projectsEn: Array<{ data: ProjectFrontmatter; content: string }>;
}

export function Projects({ projectsEs, projectsEn }: ProjectsProps) {
  const { locale } = useI18n();
  const projects = locale === 'en' ? projectsEn : projectsEs;
  const title = locale === 'en' ? 'Featured Projects' : 'Proyectos Destacados';
  const demoLabel = locale === 'en' ? 'Demo' : 'Demo';
  const codeLabel = locale === 'en' ? 'Code' : 'Código';

  return (
    <section id="proyectos" className="bg-muted/50 py-24">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.data.slug} className="flex flex-col overflow-hidden">
                {project.data.coverImage && (
                  <div className="relative aspect-video w-full overflow-hidden border-b">
                    <Image
                      src={project.data.coverImage}
                      alt={project.data.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{project.data.title}</CardTitle>
                  <CardDescription>{project.data.summary}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.data.stack.map((tech: string) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.data.links?.demo && (
                      <Button asChild size="sm" variant="outline" className="flex-1">
                        <Link href={project.data.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          {demoLabel}
                        </Link>
                      </Button>
                    )}
                    {project.data.links?.repo && (
                      <Button asChild size="sm" variant="outline" className="flex-1">
                        <Link href={project.data.links.repo} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          {codeLabel}
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
