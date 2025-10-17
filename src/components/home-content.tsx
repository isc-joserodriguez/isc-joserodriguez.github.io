'use client';

import { AboutSection } from '@/components/sections/about-section';
import { Contact } from '@/components/sections/contact';
import { Education } from '@/components/sections/education';
import { Experience } from '@/components/sections/experience';
import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { useI18n } from '@/contexts/i18n-context';
import type {
    AboutFrontmatter,
    Education as EducationType,
    Experience as ExperienceType,
    ProjectFrontmatter,
    SiteData,
    Skills as SkillsType
} from '@/lib/schemas';

interface HomeContentProps {
  siteDataEs: SiteData;
  siteDataEn: SiteData;
  aboutDataEs: { data: AboutFrontmatter; content: string };
  aboutDataEn: { data: AboutFrontmatter; content: string };
  educationEs: EducationType;
  educationEn: EducationType;
  experienceEs: ExperienceType;
  experienceEn: ExperienceType;
  skillsEs: SkillsType;
  skillsEn: SkillsType;
  projectsEs: Array<{ data: ProjectFrontmatter; content: string }>;
  projectsEn: Array<{ data: ProjectFrontmatter; content: string }>;
}

export function HomeContent({ 
  siteDataEs, 
  siteDataEn, 
  aboutDataEs, 
  aboutDataEn,
  educationEs,
  educationEn,
  experienceEs,
  experienceEn,
  skillsEs,
  skillsEn,
  projectsEs,
  projectsEn
}: HomeContentProps) {
  const { locale } = useI18n();
  const siteData = locale === 'en' ? siteDataEn : siteDataEs;

  return (
    <>
      <Hero siteData={siteData} />
      <AboutSection dataEs={aboutDataEs} dataEn={aboutDataEn} />
      <Education dataEs={educationEs} dataEn={educationEn} />
      <Experience dataEs={experienceEs} dataEn={experienceEn} />
      <Skills dataEs={skillsEs} dataEn={skillsEn} />
      <Projects projectsEs={projectsEs} projectsEn={projectsEn} />
      <Contact siteDataEs={siteDataEs} siteDataEn={siteDataEn} />
    </>
  );
}
