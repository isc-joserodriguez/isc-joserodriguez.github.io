'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Briefcase, Code2, Download, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

interface AboutProps {
  data: {
    title: string;
    image: string;
    downloadLabel: string;
  };
  content: string;
  stats?: {
    experience: string;
    projects: string;
    technologies: string;
  };
}

export function About({ data, content, stats }: AboutProps) {
  const defaultStats = stats || {
    experience: '7+ años',
    projects: '30+ proyectos',
    technologies: '20+ tecnologías',
  };

  return (
    <section id="sobre-mi" className="container py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl"
        >
          {data.title}
        </motion.h2>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Columna izquierda: Imagen y stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="sticky top-24">
              <CardContent className="p-6">
                {/* Imagen de perfil */}
                <div className="mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={data.image}
                    alt="José Rodriguez"
                    width={400}
                    height={400}
                    className="aspect-square object-cover"
                    priority
                    unoptimized
                  />
                </div>

                {/* Estadísticas */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 rounded-lg bg-muted p-3">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Experiencia</p>
                      <p className="font-semibold">{defaultStats.experience}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-lg bg-muted p-3">
                    <Code2 className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Proyectos</p>
                      <p className="font-semibold">{defaultStats.projects}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-lg bg-muted p-3">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Tecnologías</p>
                      <p className="font-semibold">{defaultStats.technologies}</p>
                    </div>
                  </div>
                </div>

                {/* Botón de descarga */}
                <div className="mt-6">
                  <Button asChild className="w-full">
                    <Link href="/cv/es" target="_blank">
                      <Download className="mr-2 h-4 w-4" />
                      {data.downloadLabel}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Columna derecha: Contenido Markdown */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card>
              <CardContent className="p-8">
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <ReactMarkdown
                    components={{
                      h2: (props) => (
                        <h2 className="mb-4 mt-8 text-2xl font-bold tracking-tight" {...props} />
                      ),
                      h3: (props) => (
                        <h3 className="mb-3 mt-6 text-xl font-semibold" {...props} />
                      ),
                      p: (props) => <p className="mb-4 leading-relaxed" {...props} />,
                      ul: (props) => (
                        <ul className="mb-4 ml-6 list-disc space-y-2" {...props} />
                      ),
                      li: (props) => <li className="leading-relaxed" {...props} />,
                      strong: (props) => (
                        <strong className="font-semibold text-foreground" {...props} />
                      ),
                      code: (props) => (
                        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm" {...props} />
                      ),
                    }}
                  >
                    {content}
                  </ReactMarkdown>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
