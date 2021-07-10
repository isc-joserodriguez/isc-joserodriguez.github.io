import { React, useState } from 'react';

import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Work from './components/Work';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { strings } from './shared/strings';

function App() {
  const [lang, setLang] = useState('es');

  const changeLang = (lang) => setLang(lang);

  return (
    <>
      <Navigation
        nav={strings[lang].nav}
        langs={strings[lang].langs}
        lang={strings[lang].lang}
        changeLang={changeLang}
      />
      <Home
        title={strings[lang].title}
        subtitle={strings[lang].subtitle}
        description={strings[lang].description}
        lang={lang}
        sites={strings[lang].sites}
      />
      <About
        title={strings[lang].about.title}
        image={strings[lang].about.image}
        description={strings[lang].about.description}
        downloadMessage={strings[lang].about.downloadMessage}
      />
      <Education
        title={strings[lang].education.title}
        educations={strings[lang].education.educations}
      />
      <Work
        title={strings[lang].work.title}
        works={strings[lang].work.works}
        more={strings[lang].work.more}
      />
      <Skills
        title={strings[lang].skills.title}
        language={strings[lang].skills.technologies.language}
        db={strings[lang].skills.technologies.db}
        css={strings[lang].skills.technologies.css}
        framework={strings[lang].skills.technologies.framework}
        cloud={strings[lang].skills.technologies.cloud}
        other={strings[lang].skills.technologies.other}
      />
      <Projects
        title={strings[lang].projects.title}
        projects={strings[lang].projects.projects}
      />
      <Contact
        title={strings[lang].contact.title}
        phone={strings[lang].contact.phone}
        email={strings[lang].contact.email}
        country={strings[lang].contact.country}
      />
      <Footer
        sites={strings[lang].sites}
        copyright={strings[lang].copyright}
      />
    </>
  );
}

export default App;
