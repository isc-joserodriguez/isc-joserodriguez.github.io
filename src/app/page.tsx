import { HomeContent } from '@/components/home-content';
import {
    getAboutData,
    getAllProjects,
    getEducationData,
    getExperienceData,
    getSiteData,
    getSkillsData
} from '@/lib/content';

export default function Home() {
  const siteDataEs = getSiteData('es');
  const siteDataEn = getSiteData('en');
  const aboutDataEs = getAboutData('es')!;
  const aboutDataEn = getAboutData('en')!;
  const educationEs = getEducationData('es');
  const educationEn = getEducationData('en');
  const experienceEs = getExperienceData('es');
  const experienceEn = getExperienceData('en');
  const skillsEs = getSkillsData('es');
  const skillsEn = getSkillsData('en');
  const projectsEs = getAllProjects('es');
  const projectsEn = getAllProjects('en');

  return (
    <HomeContent 
      siteDataEs={siteDataEs} 
      siteDataEn={siteDataEn}
      aboutDataEs={aboutDataEs}
      aboutDataEn={aboutDataEn}
      educationEs={educationEs}
      educationEn={educationEn}
      experienceEs={experienceEs}
      experienceEn={experienceEn}
      skillsEs={skillsEs}
      skillsEn={skillsEn}
      projectsEs={projectsEs}
      projectsEn={projectsEn}
    />
  );
}
