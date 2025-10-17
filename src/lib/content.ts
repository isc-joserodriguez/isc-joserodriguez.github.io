import fs from 'fs';
import matter from 'gray-matter';
import yaml from 'js-yaml';
import path from 'path';
import {
  aboutFrontmatterSchema,
  cvSchema,
  educationSchema,
  experienceSchema,
  projectFrontmatterSchema,
  siteSchema,
  skillsSchema,
  type AboutFrontmatter,
  type CV,
  type Education,
  type Experience,
  type ProjectFrontmatter,
  type SiteData,
  type Skills,
} from './schemas';

const contentDir = path.join(process.cwd(), 'content');

/**
 * Lee y parsea un archivo YAML
 */
function readYaml<T>(filePath: string, schema: any): T {
  const fullPath = path.join(contentDir, filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const data = yaml.load(fileContents);
  return schema.parse(data);
}

/**
 * Lee y parsea un archivo MDX con frontmatter
 */
function readMdx<T>(filePath: string, schema: any): { data: T; content: string } {
  const fullPath = path.join(contentDir, filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    data: schema.parse(data),
    content,
  };
}

/**
 * Obtiene los datos del sitio para un idioma específico
 */
export function getSiteData(locale: 'es' | 'en' = 'es'): SiteData {
  return readYaml<SiteData>(`site.${locale}.yaml`, siteSchema);
}

/**
 * Obtiene los datos de educación para un idioma específico
 */
export function getEducationData(locale: 'es' | 'en' = 'es'): Education {
  try {
    return readYaml<Education>(`education.${locale}.yaml`, educationSchema);
  } catch (error) {
    // Si el archivo no existe, retornar datos de fallback desde los componentes actuales
    console.warn(`Education data not found for locale ${locale}, using fallback`);
    return {
      title: locale === 'es' ? 'Educación' : 'Education',
      items: [],
    };
  }
}

/**
 * Obtiene los datos de experiencia para un idioma específico
 */
export function getExperienceData(locale: 'es' | 'en' = 'es'): Experience {
  try {
    return readYaml<Experience>(`experience.${locale}.yaml`, experienceSchema);
  } catch (error) {
    console.warn(`Experience data not found for locale ${locale}, using fallback`);
    return {
      title: locale === 'es' ? 'Experiencia Laboral' : 'Work Experience',
      items: [],
    };
  }
}

/**
 * Obtiene los datos de habilidades para un idioma específico
 */
export function getSkillsData(locale: 'es' | 'en' = 'es'): Skills {
  try {
    return readYaml<Skills>(`skills.${locale}.yaml`, skillsSchema);
  } catch (error) {
    console.warn(`Skills data not found for locale ${locale}, using fallback`);
    return {
      title: locale === 'es' ? 'Habilidades Técnicas' : 'Technical Skills',
      categories: [],
    };
  }
}

/**
 * Obtiene la lista de todos los proyectos para un idioma específico
 */
export function getAllProjects(
  locale: 'es' | 'en' = 'es'
): Array<{ data: ProjectFrontmatter; content: string }> {
  const projectsDir = path.join(contentDir, 'projects');

  try {
    const files = fs.readdirSync(projectsDir);
    const mdxFiles = files.filter(
      (file) =>
        file.endsWith(`.${locale}.mdx`) || (!file.includes('.en.') && !file.includes('.es.'))
    );

    return mdxFiles
      .map((filename) => {
        try {
          const filePath = path.join('projects', filename);
          return readMdx<ProjectFrontmatter>(filePath, projectFrontmatterSchema);
        } catch (error) {
          console.error(`Error reading project ${filename}:`, error);
          return null;
        }
      })
      .filter(
        (project): project is { data: ProjectFrontmatter; content: string } => project !== null
      )
      .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  } catch (error) {
    console.warn(`Projects directory not found, returning empty array`);
    return [];
  }
}

/**
 * Obtiene un proyecto específico por slug
 */
export function getProjectBySlug(
  slug: string,
  locale: 'es' | 'en' = 'es'
): { data: ProjectFrontmatter; content: string } | null {
  try {
    const filePath = path.join('projects', `${slug}.${locale}.mdx`);
    return readMdx<ProjectFrontmatter>(filePath, projectFrontmatterSchema);
  } catch (error) {
    console.error(`Project ${slug} not found for locale ${locale}`);
    return null;
  }
}

/**
 * Obtiene los slugs de todos los proyectos
 */
export function getAllProjectSlugs(): string[] {
  const projectsDir = path.join(contentDir, 'projects');

  try {
    const files = fs.readdirSync(projectsDir);
    const slugs = files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => file.replace(/\.(es|en)\.mdx$/, ''))
      .filter((slug, index, self) => self.indexOf(slug) === index);

    return slugs;
  } catch (error) {
    return [];
  }
}

/**
 * Obtiene el contenido de "Sobre mí" en MDX
 */
export function getAboutData(
  locale: 'es' | 'en' = 'es'
): { data: AboutFrontmatter; content: string } | null {
  try {
    return readMdx<AboutFrontmatter>(`about.${locale}.mdx`, aboutFrontmatterSchema);
  } catch (error) {
    console.warn(`About content not found for locale ${locale}`);
    return null;
  }
}

/**
 * Obtiene los datos del CV para un idioma específico
 */
export function getCVData(locale: 'es' | 'en' = 'es'): CV {
  try {
    return readYaml<CV>(`cv.${locale}.yaml`, cvSchema);
  } catch (error) {
    console.warn(`CV data not found for locale ${locale}`);
    throw error;
  }
}
