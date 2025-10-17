import { PrintButton } from '@/components/PrintButton';
import { getAllProjects, getCVData, getEducationData, getExperienceData, getSiteData, getSkillsData } from '@/lib/content';
import { getSocialIcon } from '@/lib/icons';
import { Mail, MapPin, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

interface CVPageProps {
  params: {
    lang: 'es' | 'en';
  };
}

export async function generateMetadata({ params }: CVPageProps): Promise<Metadata> {
  const { lang } = params;
  const title = lang === 'es' ? 'Curriculum Vitae - José Rodriguez' : 'Curriculum Vitae - José Rodriguez';
  const description =
    lang === 'es'
      ? 'CV profesional de José Rodriguez - Full-Stack Developer con experiencia en React, Next.js, Node.js y tecnologías modernas.'
      : 'Professional CV of José Rodriguez - Full-Stack Developer with experience in React, Next.js, Node.js and modern technologies.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'profile',
      locale: lang === 'es' ? 'es_MX' : 'en_US',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function CVPage({ params }: CVPageProps) {
  const { lang } = params;
  const siteData = getSiteData(lang);
  const cvData = getCVData(lang);
  const educationData = getEducationData(lang);
  const experienceData = getExperienceData(lang);
  const skillsData = getSkillsData(lang);
  const allProjects = getAllProjects(lang);
  const featuredProjects = allProjects.filter((p) => p.data.featured);

  const { hero, contact, socials } = siteData;

  return (
    <div className="min-h-screen bg-white">
      {/* Print button - only visible on screen */}
      <div className="print:hidden fixed top-4 right-4 z-50">
        <PrintButton text={lang === 'es' ? 'Descargar PDF' : 'Download PDF'} />
      </div>

      {/* CV Container - A4 size */}
      <div className="cv-container mx-auto bg-white shadow-xl print:shadow-none">
        {/* Header */}
        <header className="cv-header border-b-2 border-gray-900 pb-6 mb-8">
          <div className="flex justify-between items-start gap-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {hero.title.replace('Hola, soy ', '').replace('Hi, I\'m ', '')}
              </h1>
              <p className="text-xl text-gray-700 mb-4">{hero.subtitle}</p>
              
              <div className="flex flex-col gap-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{contact.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href={`mailto:${contact.email}`} className="hover:text-gray-900">
                    {contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="hover:text-gray-900">
                    {contact.phone}
                  </a>
                </div>
              </div>

              {cvData.config.showSocials && (
                <div className="flex gap-3 mt-3">
                  {socials.slice(0, 3).map((social) => {
                    const Icon = getSocialIcon(social.key);
                    return Icon ? (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900"
                        title={social.name}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ) : null;
                  })}
                </div>
              )}
            </div>

            {cvData.config.showPhoto && (
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden">
                  {/* Placeholder - replace with actual photo */}
                  <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-gray-400">
                    {hero.title.charAt(0)}
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Summary */}
        <section className="cv-section">
          <h2 className="cv-section-title">
            {lang === 'es' ? 'Resumen Profesional' : 'Professional Summary'}
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {cvData.summary}
          </p>
        </section>

        {/* Experience */}
        <section className="cv-section">
          <h2 className="cv-section-title">{experienceData.title}</h2>
          <div className="space-y-4">
            {experienceData.items.map((exp) => (
              <div key={exp.id} className="cv-entry">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-gray-900">{exp.company}</h3>
                  <span className="text-sm text-gray-600">{exp.period}</span>
                </div>
                <p className="text-gray-700 italic mb-2">{exp.position}</p>
                <p className="text-gray-600 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="cv-section">
          <h2 className="cv-section-title">{educationData.title}</h2>
          <div className="space-y-4">
            {educationData.items.map((edu) => (
              <div key={edu.id} className="cv-entry">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-gray-900">{edu.institution}</h3>
                  <span className="text-sm text-gray-600">{edu.period}</span>
                </div>
                <p className="text-gray-700 italic mb-2">{edu.degree}</p>
                <p className="text-gray-600 text-sm">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="cv-section">
          <h2 className="cv-section-title">{skillsData.title}</h2>
          <div className="grid grid-cols-2 gap-4">
            {skillsData.categories.map((category) => (
              <div key={category.id}>
                <h3 className="font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-sm text-gray-600">
                  {category.items.map((s) => s.label).join(', ')}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Skills */}
        {cvData.keySkills && cvData.keySkills.length > 0 && (
          <section className="cv-section">
            <h2 className="cv-section-title">
              {lang === 'es' ? 'Habilidades Clave' : 'Key Skills'}
            </h2>
            <ul className="grid grid-cols-2 gap-2">
              {cvData.keySkills.map((skill, index) => (
                <li key={index} className="text-sm text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="cv-section">
            <h2 className="cv-section-title">
              {lang === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}
            </h2>
            <div className="space-y-3">
              {featuredProjects.slice(0, 3).map((project) => (
                <div key={project.data.slug} className="cv-entry">
                  <h3 className="font-bold text-gray-900">{project.data.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{project.data.summary}</p>
                  <p className="text-xs text-gray-500">
                    <span className="font-medium">Stack:</span> {project.data.stack.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {cvData.certifications && cvData.certifications.length > 0 && (
          <section className="cv-section">
            <h2 className="cv-section-title">
              {lang === 'es' ? 'Certificaciones' : 'Certifications'}
            </h2>
            <div className="space-y-2">
              {cvData.certifications.map((cert, index) => (
                <div key={index} className="cv-entry">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-gray-900 text-sm">{cert.name}</h3>
                    <span className="text-xs text-gray-600">{cert.date}</span>
                  </div>
                  <p className="text-xs text-gray-600">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Languages */}
        {cvData.languages && cvData.languages.length > 0 && (
          <section className="cv-section">
            <h2 className="cv-section-title">
              {lang === 'es' ? 'Idiomas' : 'Languages'}
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {cvData.languages.map((language, index) => (
                <div key={index}>
                  <span className="font-semibold text-gray-900">{language.language}:</span>{' '}
                  <span className="text-gray-600 text-sm">{language.level}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="cv-footer mt-12 pt-4 border-t border-gray-300 text-center text-xs text-gray-500">
          <p>
            {lang === 'es'
              ? 'CV generado automáticamente desde '
              : 'CV automatically generated from '}
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              {siteData.site.url}
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}
