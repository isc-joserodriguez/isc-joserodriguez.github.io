import { z } from 'zod';

// Schema para enlaces sociales
export const socialLinkSchema = z.object({
  key: z.string(),
  name: z.string(),
  url: z.string().url(),
});

// Schema para navegación
export const navItemSchema = z.object({
  name: z.string(),
  href: z.string(),
});

// Schema para CTAs
export const ctaSchema = z.object({
  label: z.string(),
  href: z.string(),
});

// Schema para Hero
export const heroSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  location: z.string(),
  description: z.string(),
  ctaPrimary: ctaSchema,
  ctaSecondary: ctaSchema,
});

// Schema para Contact
export const contactSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  email: z.string().email(),
  phone: z.string(),
  location: z.string(),
  availability: z.string(),
  cvDownloadLabel: z.string(),
});

// Schema para Footer
export const footerSchema = z.object({
  copyright: z.string(),
  backToTop: z.string(),
});

// Schema para Site (archivo site.yaml completo)
export const siteSchema = z.object({
  site: z.object({
    name: z.string(),
    title: z.string(),
    description: z.string(),
    url: z.string().url(),
    locale: z.string(),
    timezone: z.string(),
  }),
  hero: heroSchema,
  socials: z.array(socialLinkSchema),
  navigation: z.array(navItemSchema),
  contact: contactSchema,
  footer: footerSchema,
});

// Schema para Education
export const educationItemSchema = z.object({
  id: z.number(),
  institution: z.string(),
  degree: z.string(),
  period: z.string(),
  description: z.string(),
  url: z.string().optional(), // Allow any string (including anchors like #proyectos)
  logo: z.string().optional(),
});

export const educationSchema = z.object({
  title: z.string(),
  items: z.array(educationItemSchema),
});

// Schema para Experience
export const experiencePositionSchema = z.object({
  position: z.string(),
  period: z.string(),
  description: z.string(),
});

export const experienceItemSchema = z.object({
  id: z.number(),
  company: z.string(),
  position: z.string().optional(), // For single position (legacy support)
  period: z.string().optional(), // For single position (legacy support)
  description: z.string().optional(), // For single position (legacy support)
  positions: z.array(experiencePositionSchema).optional(), // For multiple positions (promotions)
  url: z.string().optional(), // Allow any string (including anchors like #proyectos)
  logo: z.string().optional(),
});

export const experienceSchema = z.object({
  title: z.string(),
  items: z.array(experienceItemSchema),
});

// Schema para Skills
export const skillItemSchema = z.object({
  id: z.string(),
  label: z.string(),
  iconKey: z.string(),
  href: z.string().url().optional(),
});

export const skillCategorySchema = z.object({
  id: z.string(),
  title: z.string(),
  items: z.array(skillItemSchema),
});

export const skillsSchema = z.object({
  title: z.string(),
  categories: z.array(skillCategorySchema),
});

// Schema para Projects (frontmatter de MDX)
export const projectFrontmatterSchema = z.object({
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  coverImage: z.string().optional(),
  stack: z.array(z.string()),
  role: z.string(),
  date: z.string(),
  featured: z.boolean().optional(),
  links: z.object({
    demo: z.string().url().optional(),
    repo: z.string().url().optional(),
  }),
});

// Schema para About frontmatter
export const aboutFrontmatterSchema = z.object({
  title: z.string(),
  image: z.string().optional(),
  downloadLabel: z.string(),
});

// Schema para CV
export const certificationSchema = z.object({
  name: z.string(),
  issuer: z.string(),
  date: z.string(),
  url: z.string().url().optional(),
});

export const languageSchema = z.object({
  language: z.string(),
  level: z.string(),
  details: z.string().optional(),
});

export const cvConfigSchema = z.object({
  showPhoto: z.boolean(),
  showSocials: z.boolean(),
  sectionsOrder: z.array(z.string()),
});

export const cvSchema = z.object({
  summary: z.string(),
  objective: z.string().optional(),
  keySkills: z.array(z.string()),
  certifications: z.array(certificationSchema).optional(),
  languages: z.array(languageSchema),
  interests: z.array(z.string()).optional(),
  config: cvConfigSchema,
});

// Tipos TypeScript inferidos de los schemas
export type SocialLink = z.infer<typeof socialLinkSchema>;
export type NavItem = z.infer<typeof navItemSchema>;
export type Hero = z.infer<typeof heroSchema>;
export type Contact = z.infer<typeof contactSchema>;
export type Footer = z.infer<typeof footerSchema>;
export type SiteData = z.infer<typeof siteSchema>;
export type EducationItem = z.infer<typeof educationItemSchema>;
export type Education = z.infer<typeof educationSchema>;
export type ExperiencePosition = z.infer<typeof experiencePositionSchema>;
export type ExperienceItem = z.infer<typeof experienceItemSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type SkillItem = z.infer<typeof skillItemSchema>;
export type SkillCategory = z.infer<typeof skillCategorySchema>;
export type Skills = z.infer<typeof skillsSchema>;
export type ProjectFrontmatter = z.infer<typeof projectFrontmatterSchema>;
export type AboutFrontmatter = z.infer<typeof aboutFrontmatterSchema>;
export type Certification = z.infer<typeof certificationSchema>;
export type Language = z.infer<typeof languageSchema>;
export type CVConfig = z.infer<typeof cvConfigSchema>;
export type CV = z.infer<typeof cvSchema>;
