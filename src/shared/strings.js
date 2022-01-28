import { FaHackerrank, FaCodepen, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiCodewars } from 'react-icons/si';

import LogoBlackstone from '../assets/images/Blackstone.svg';
import LogoBedu from '../assets/images/bedu.svg';
import LogoITTepic from '../assets/images/ittepic.svg';
import LogoCetis from '../assets/images/dgeti.svg';
import Perfil from '../assets/images/perfil.svg';
import LogoUCamp from '../assets/images/UCamp.svg';
import LogoFree from '../assets/images/FreeLance.svg';
import LogoUV from '../assets/images/UV.svg';
import LogoRaise from '../assets/images/RaiseTechnology.svg';

import LogoAndroid from '../assets/images/icons/android.svg';
import LogoAngular from '../assets/images/icons/angular.svg';
import LogoBootstrap from '../assets/images/icons/bootstrap.svg';
import LogoBulma from '../assets/images/icons/bulma.svg';
import LogoCPlusPlus from '../assets/images/icons/CPlusPlus.svg';
import LogoCSharp from '../assets/images/icons/CSharp.svg';
import LogoCss from '../assets/images/icons/css.svg';
import LogoExpress from '../assets/images/icons/express.svg';
import LogoFirebase from '../assets/images/icons/firebase.svg';
import LogoGatsby from '../assets/images/icons/gatsby.svg';
import LogoGit from '../assets/images/icons/git.svg';
import LogoHeroku from '../assets/images/icons/heroku.svg';
import LogoHtml from '../assets/images/icons/html.svg';
import LogoIonic from '../assets/images/icons/ionic.svg';
import LogoJava from '../assets/images/icons/java.svg';
import LogoJquery from '../assets/images/icons/jquery.svg';
import LogoJs from '../assets/images/icons/js.svg';
import LogoMaterialize from '../assets/images/icons/materialize.svg';
import LogoMongodb from '../assets/images/icons/mongodb.svg';
import LogoMysql from '../assets/images/icons/mysql.svg';
import LogoNetCore from '../assets/images/icons/netCore.svg';
import LogoNetlify from '../assets/images/icons/netlify.svg';
import LogoNextjs from '../assets/images/icons/nextjs.svg';
import LogoNodejs from '../assets/images/icons/nodejs.svg';
import LogoPostgresql from '../assets/images/icons/postgresql.svg';
import LogoAntD from '../assets/images/icons/antd.svg';
import LogoPython from '../assets/images/icons/python.svg';
import LogoReact from '../assets/images/icons/react.svg';
import LogoScss from '../assets/images/icons/scss.svg';
import LogoSqlServer from '../assets/images/icons/sqlServer.svg';
import LogoTailwind from '../assets/images/icons/tailwind.svg';
import LogoVue from '../assets/images/icons/vue.svg';
import LogoNest from '../assets/images/icons/nest.svg';
import LogoStorybook from '../assets/images/icons/storybook.svg';
import LogoStrapi from '../assets/images/icons/strapi.svg';

import Burger from '../assets/images/capturas/burger.png';
import Cursos from '../assets/images/capturas/cursos.png';
import Fic from '../assets/images/capturas/fic.png';
import Matcha from '../assets/images/capturas/matcha.png';
import ML from '../assets/images/capturas/ml.png';
import Restaurant from '../assets/images/capturas/restaurant.png';
import TODO from '../assets/images/capturas/todo.png';
import LPMexicanCoffee from '../assets/images/capturas/lp.png';
import TodoAntD from '../assets/images/capturas/todo-antd.png';

export const strings = {
    es: {
        lang: 'Idioma',
        langs: [
            { id: 'es', lang: 'Español' }, { id: 'en', lang: 'Inglés' }
        ],
        copyright: '© Copyright 2021',
        title: 'Hola, mi nombre es José Rodriguez',
        subtitle: 'Ingeniero en Sistemas Computacionales radicando en Tepic, Nayarit.',
        description: `Soy un desarrollador web tomado roles como Front 
        End y Back End. Actualmente me desempeño principalmente como Full Stack 
        con experiencia en tecnologías tales como stack MERN y MEAN.`,
        nav: [
            { id: 1, displayName: 'Inicio', uriRef: '#home' },
            { id: 2, displayName: 'Sobre mi', uriRef: '#about' },
            { id: 3, displayName: 'Educación', uriRef: '#education' },
            { id: 4, displayName: 'Trabajo', uriRef: '#work' },
            { id: 5, displayName: 'Habilidades', uriRef: '#skills' },
            { id: 6, displayName: 'Proyectos', uriRef: '#projects' },
            { id: 7, displayName: 'Contacto', uriRef: '#contact' },
        ],
        sites: [
            { id: 1, icon: FaLinkedin, url: 'https://www.linkedin.com/in/isc-joserodriguez' },
            { id: 2, icon: FaGithub, url: 'https://github.com/isc-joserodriguez' },
            { id: 3, icon: FaHackerrank, url: 'https://www.hackerrank.com/isc_jrodriguez' },
            { id: 4, icon: FaCodepen, url: 'https://codepen.io/isc-joserodriguez' },
            { id: 5, icon: SiCodewars, url: 'https://www.codewars.com/users/isc-joserodriguez' },
        ],
        about: {
            title: 'Sobre mi',
            image: Perfil,
            description: `Soy un ingeniero en sistemas computacionales. Tiendo a ser
            calmado y servicial. Me gusta cooperar e involucrarme en los proyectos
            en los que se me asigna. Considero que soy una persona que escucha y
            siente empatía por las preocupaciones y emociones de los compañeros, lo
            cuál permite que pueda trabajar de manera eficaz en equipos de trabajo. 
            No me gustan los conflictos, por lo cuál cuando me topo con alguno siempre 
            busco la mejor manera de solucionarlo. Algunos de mis hobbies favoritos son 
            los videojuegos, así como juegos de destreza mental como rompecabezas de 
            destreza (de madera, anillos, etc.), ajedrez y sudoku.`,
            downloadMessage: 'Descargar CV'
        },
        education: {
            title: 'Educación',
            educations: [
                {
                    id: 1,
                    institution: 'BEDU',
                    url: 'https://bedu.org/',
                    info: 'Bootcamp - Desarrollo Full Stack • Octubre 2020 - Junio 2021',
                    description: `Gané una beca otorgada a 200 estudiantes para estudiar en un bootcamp
                    el desarrollo web Full Stack con especialización en React. Durante 3 fases que duró
                    8 meses, en cada fase iban descalificando estudiantes hasta que finalmente quedamos 40.`,
                    logo: LogoBedu
                },
                {
                    id: 2,
                    institution: 'Instituto Tecnológico de Tepic',
                    url: 'https://www.tepic.tecnm.mx/',
                    info: 'Ingeniería en Sistemas Computacionales • Agosto 2013 - Diciembre 2019',
                    description: `Estudié la Ingeniería en Sistemas Computacionales en el Instituto Tecnológico
                    de Tepic (actualmente conocido también como Tecnológico Nacional de México - 
                    Campus Tepic). La especialización fue en aplicaciones multiplataforma, sin embargo
                    también cubre rubros tales como bases de datos (SQL y NoSQL), desarrollo web (con frameworks
                    tales como Angular, React, Vue y .Net Core), desarrollo móvil (con Java nativo y con frameworks
                    multiplataforma como Ionic y Xamarin Forms), administración de redes, entre otras habilidades.`,
                    logo: LogoITTepic
                },
                {
                    id: 3,
                    institution: 'Cetis No. 100',
                    url: 'https://www.cetis100.edu.mx/',
                    info: 'Técnico en Informática • Agosto 2010 - Junio 2013',
                    description: `El Cetis No. 100 forma parte de la DGETI, es un bachillerato donde
                    entré como técnico en informática en el área de físico matemático. Aquí fue donde
                    me adentré a la programación con lenguajes sencillos tales como C++ y Visual Basic. 
                    Así como bases de datos con Microsoft Access.`,
                    logo: LogoCetis
                },
            ]
        },
        work: {
            title: 'Trabajo',
            works: [
                {
                    id: 0,
                    company: 'Blackstone Studio',
                    url: 'https://www.blackstone.studio/',
                    position: 'Full Stack Developer Mid • Septiembre 2021 - Actual',
                    description: `He participado como desarrollador Full Stack en proyectos con 
                    tecnologías como React.js, Strapi, AWS, NativeBase, Ant Design, entre otras.`,
                    logo: LogoBlackstone
                },
                {
                    id: 1,
                    company: 'Universidad Utel | U-Camp',
                    url: 'https://u-camp.utel.edu.mx/',
                    position: 'Coach Instructor • Julio 2021 - Actual',
                    description: `Coach en un Bootcamp con especialización en desarrollo web 
                    Full Stack con tecnologías tales como HTML, CSS, JavaScript, NodeJS, 
                    MongoDB y React.`,
                    logo: LogoUCamp
                },
                {
                    id: 2,
                    company: 'Freelance',
                    url: '#projects',
                    position: 'Desarrollador Full Stack • Julio 2020 - Septiembre 2021',
                    description: `He colaborado en algunos proyectos de empresas locales 
                    con tecnologías como React, Gatsby.js, Next.js, Drupal, MongoDB, Firebase.`,
                    logo: LogoFree
                },
                {
                    id: 3,
                    company: 'United Virtualities',
                    url: 'https://weareuv.com/',
                    position: 'Ingeniero de Software • Diciembre 2019 - Junio 2020',
                    description: `Me dieron capacitación en tecnologías como HTML, CSS, SCSS, 
                    JavaScript, NodeJS, Express, WordPress, SalesForce, React. Participé en proyectos 
                    tomando roles como Front End usando React y WordPress o como Back End usando 
                    NodeJS, Express y MongoDB`,
                    logo: LogoUV
                },
                {
                    id: 4,
                    company: 'Raise Technology',
                    url: 'https://raise-technology.com/',
                    position: 'Desarrollador Full Stack • Mayo 2019 - Noviembre 2019',
                    description: `En esta empresa desarrollé un proyecto web para llevar 
                    las clases en línea de los diferentes rublos de la empresa (Clases de 
                    idiomas y de tecnologías). Se llevó a cabo en un equipo de 2 personas. 
                    Se usaron tecnologías tales como Angular, MongoDB, NodeJS, Express y Firebase.`,
                    logo: LogoRaise
                },
            ],
            more: 'Ver más...'
        },
        skills: {
            title: 'Habilidades',
            technologies: {
                language: {
                    title: 'Lenguajes',
                    id: 'languages',
                    technologies: [
                        { id: 1, name: 'JavaScript', icon: LogoJs, url: 'https://developer.mozilla.org/es/docs/Web/JavaScript' },
                        { id: 2, name: 'HTML', icon: LogoHtml, url: 'https://developer.mozilla.org/es/docs/Web/HTML' },
                        { id: 3, name: 'CSS', icon: LogoCss, url: 'https://developer.mozilla.org/es/docs/Web/CSS' },
                        { id: 4, name: 'SCSS', icon: LogoScss, url: 'https://sass-lang.com/' },
                        { id: 5, name: 'Java', icon: LogoJava, url: 'https://www.java.com/es/' },
                        { id: 6, name: 'Python', icon: LogoPython, url: 'https://www.python.org/' },
                        { id: 7, name: 'C#', icon: LogoCSharp, url: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
                        { id: 8, name: 'C++', icon: LogoCPlusPlus, url: 'https://visualstudio.microsoft.com/es/vs/features/cplusplus/' },
                    ]
                },
                db: {
                    title: 'Bases de Datos',
                    id: 'dbs',
                    technologies: [
                        { id: 1, name: 'MongoDB', icon: LogoMongodb, url: 'https://www.mongodb.com/es' },
                        { id: 2, name: 'MS SQL Server', icon: LogoSqlServer, url: 'https://www.microsoft.com/es-mx/sql-server/sql-server-downloads' },
                        { id: 3, name: 'PostgreSQL', icon: LogoPostgresql, url: 'https://www.postgresql.org/' },
                        { id: 4, name: 'MySQL', icon: LogoMysql, url: 'https://www.mysql.com/' },
                    ]
                },
                css: {
                    title: 'Frameworks de CSS',
                    id: 'css',
                    technologies: [
                        { id: 1, name: 'Bootstrap', icon: LogoBootstrap, url: 'https://getbootstrap.com/' },
                        { id: 2, name: 'Bulma', icon: LogoBulma, url: 'https://bulma.io/' },
                        { id: 3, name: 'Materialize', icon: LogoMaterialize, url: 'https://materializecss.com/' },
                        { id: 4, name: 'Tailwind CSS', icon: LogoTailwind, url: 'https://tailwindcss.com/' },
                        { id: 5, name: 'Ant Design', icon: LogoAntD, url: 'https://ant.design/' },
                    ]
                },
                framework: {
                    title: 'Frameworks',
                    id: 'frameworks',
                    technologies: [
                        { id: 1, name: 'Express.js', icon: LogoExpress, url: 'https://expressjs.com/es/' },
                        { id: 2, name: 'NestJS', icon: LogoNest, url: 'https://nestjs.com/' },
                        { id: 3, name: 'React', icon: LogoReact, url: 'https://es.reactjs.org/' },
                        { id: 4, name: 'Angular', icon: LogoAngular, url: 'https://angular.io/' },
                        { id: 5, name: 'Android', icon: LogoAndroid, url: 'https://www.android.com/intl/es-419_mx/' },
                        { id: 6, name: 'Ionic', icon: LogoIonic, url: 'https://ionicframework.com/' },
                        { id: 7, name: 'VueJS', icon: LogoVue, url: 'https://vuejs.org/' },
                        { id: 8, name: 'Gatsby.js', icon: LogoGatsby, url: 'https://www.gatsbyjs.com/' },
                        { id: 9, name: 'Next.js', icon: LogoNextjs, url: 'https://nextjs.org/' },
                        { id: 10, name: '.NET Core', icon: LogoNetCore, url: 'https://dotnet.microsoft.com/download' },
                    ]
                },
                cloud: {
                    title: 'Nube',
                    id: 'cloud',
                    technologies: [
                        { id: 1, name: 'Firebase', icon: LogoFirebase, url: 'https://firebase.google.com/?hl=es' },
                        { id: 2, name: 'MongoDB Atlas', icon: LogoMongodb, url: 'https://www.mongodb.com/es/cloud/atlas' },
                        { id: 3, name: 'Heroku', icon: LogoHeroku, url: 'https://dashboard.heroku.com/' },
                        { id: 4, name: 'Netlify', icon: LogoNetlify, url: 'https://www.netlify.com/' },
                    ]
                },
                other: {
                    title: 'Otras',
                    id: 'other',
                    technologies: [
                        { id: 1, name: 'Git', icon: LogoGit, url: 'https://git-scm.com/' },
                        { id: 2, name: 'NodeJS', icon: LogoNodejs, url: 'https://nodejs.org/es/' },
                        { id: 3, name: 'Storybook.js', icon: LogoStorybook, url: 'https://storybook.js.org/' },
                        { id: 4, name: 'Strapi', icon: LogoStrapi, url: 'https://strapi.io/' },
                        { id: 5, name: 'jQuery', icon: LogoJquery, url: 'https://jquery.com/' },
                    ]
                },
            }
        },
        projects: {
            title: 'Proyectos',
            projects: [
                { id: 1, name: 'Restaurant Manager', description: 'Plataforma para gestionar los pedidos de un restaurante.', url: 'https://isc-joserodriguez.github.io/BEDU_Grupo5/', repo: 'https://github.com/isc-joserodriguez/BEDU_Grupo5', image: Restaurant },
                { id: 2, name: 'Búsqueda ML', description: 'Clon de la búsqueda de Mercado Libre.', url: 'https://isc-joserodriguez.github.io/products-ml-react/', repo: 'https://github.com/isc-joserodriguez/products-ml-react', image: ML },
                { id: 3, name: 'Burger Builder', description: 'Plataforma para gestionar pedidos de hamburguesas.', url: 'https://react-burger-builder-aecb3.web.app/', repo: 'https://github.com/isc-joserodriguez/burger-builder', image: Burger },
                { id: 4, name: 'Matcha', description: 'Clon del landing page de getmatcha.', url: 'https://isc-joserodriguez.github.io/landing-matcha-bootstrap/', repo: 'https://github.com/isc-joserodriguez/landing-matcha-bootstrap', image: Matcha },
                { id: 5, name: 'Plataforma de Cursos', description: 'Plataforma para tomar cursos en línea.', url: 'https://project-cursos.surge.sh/', repo: 'https://github.com/isc-joserodriguez/ProyectoCurso', image: Cursos },
                { id: 6, name: 'TODO App', description: 'TODO App hecha únicamente con vanilla js (sólo un root en el HTML).', url: 'https://isc-joserodriguez.github.io/BEDU-Grupo11/todo-app/', repo: 'https://github.com/isc-joserodriguez/BEDU-Grupo11', image: TODO },
                { id: 7, name: 'Fic Web', description: 'Compilador web de un lenguaje de programación para crear horarios escolares.', url: 'https://isc-joserodriguez.github.io/ficWeb/', repo: 'https://github.com/isc-joserodriguez/ficWeb', image: Fic },
                { id: 8, name: 'LP-Mexican Coffee', description: 'Landing Page de una cafetería ficticia.', url: 'https://isc-joserodriguez.github.io/LP-MexicanCoffee/', repo: 'https://github.com/isc-joserodriguez/LP-MexicanCoffee', image: LPMexicanCoffee },
                { id: 9, name: 'TODO List', description: 'TODO List construída con React + Ant Design.', url: 'https://isc-joserodriguez.github.io/todo-react/', repo: 'https://github.com/isc-joserodriguez/todo-react', image: TodoAntD },
            ]
        },
        contact: {
            title: 'Contacto',
            phone: '+52 311 113 17 55',
            email: 'isc.joserodriguez@gmail.com',
            country: 'Tepic, Nayarit. México'
        }
    },
    en: {
        lang: 'Language',
        langs: [
            { id: 'es', lang: 'Spanish' }, { id: 'en', lang: 'English' }
        ],
        copyright: '© Copyright 2021',
        title: "Hi, I'm José Rodriguez",
        subtitle: 'A Tepic, Nayarit based Computer Systems Engineer.',
        description: `I'm a web developer taking roles like Front End 
        and Back End. Currently I work mainly as a Full Stack with 
        experience in technologies such as stack MERN and MEAN.`,
        nav: [
            { id: 1, displayName: 'Home', uriRef: '#home' },
            { id: 2, displayName: 'About', uriRef: '#about' },
            { id: 3, displayName: 'Education', uriRef: '#education' },
            { id: 4, displayName: 'Work', uriRef: '#work' },
            { id: 5, displayName: 'Skills', uriRef: '#skills' },
            { id: 6, displayName: 'Projects', uriRef: '#projects' },
            { id: 7, displayName: 'Contact', uriRef: '#contact' },
        ],
        sites: [
            { id: 1, icon: FaLinkedin, url: 'https://www.linkedin.com/in/isc-joserodriguez' },
            { id: 2, icon: FaGithub, url: 'https://github.com/isc-joserodriguez' },
            { id: 3, icon: FaHackerrank, url: 'https://www.hackerrank.com/isc_jrodriguez' },
            { id: 4, icon: FaCodepen, url: 'https://codepen.io/isc-joserodriguez' },
            { id: 5, icon: SiCodewars, url: 'https://www.codewars.com/users/isc-joserodriguez' },
        ],
        about: {
            title: 'About',
            image: Perfil,
            description: `I'm a computer systems engineer. I tend to be calm and 
            helpful. I like to cooperate and get involved in the projects in which 
            I'm assigned. I consider myself a person who listens and feels empathy
            for the concerns and emotions of colleagues, which allows me to work 
            effectively in work teams. I don't like conflicts, so when I come 
            across one I always look for the best way to solve it. Some of my 
            favorite hobbies are video games, as well as mental skill games like 
            Idexterity puzzles (wood, rings, etc.), chess, and Sudoku.`,
            downloadMessage: 'Download CV'
        },
        education: {
            title: 'Education',
            educations: [
                {
                    id: 1,
                    institution: 'BEDU',
                    url: 'https://bedu.org/',
                    info: 'Bootcamp - Full Stack Development • October 2020 - June 2021',
                    description: `I won a scholarship awarded to 200 students to study Full Stack 
                    web development in a bootcamp with a specialization in React. During 3 phases 
                    that lasted 8 months, in each phase they were disqualifying students until finally 
                    we were 40.`,
                    logo: LogoBedu
                },
                {
                    id: 2,
                    institution: 'Instituto Tecnológico de Tepic',
                    url: 'https://www.tepic.tecnm.mx/',
                    info: 'Computer Systems Engineer • August 2013 - December 2019',
                    description: `I studied Computer Systems Engineering at the 
                    Instituto Tecnológico de Tepic (currently also known as Tecnológico 
                    Nacional de México - Campus Tepic). The specialization was in 
                    multiplatform applications, however it also covers areas such as 
                    databases (SQL and NoSQL), web development (with frameworks such as 
                    Angular, React, Vue and .Net Core), mobile development (with native Java and 
                    with frameworks cross-platform such as Ionic and Xamarin Forms), 
                    network administration, among other skills.`,
                    logo: LogoITTepic
                },
                {
                    id: 3,
                    institution: 'Cetis No. 100',
                    url: 'https://www.cetis100.edu.mx/',
                    info: 'IT technician • August 2010 - June 2013',
                    description: `Cetis No. 100 is part of the DGETI, 
                    it is a baccalaureate where I entered as a IT 
                    technician in the area of mathematical physics. This is 
                    where I got into programming with simple languages such 
                    as C ++ and Visual Basic. As well as databases with Microsoft 
                    Access.`,
                    logo: LogoCetis
                },
            ]
        },
        work: {
            title: 'Work',
            works: [
                {
                    id: 0,
                    company: 'Blackstone Studio',
                    url: 'https://www.blackstone.studio/',
                    position: 'Full Stack Developer Mid • September 2021 - Current',
                    description: `I have participated as a Full Stack developer in 
                    projects with technologies such as React.js, Strapi, AWS, NativeBase, 
                    Ant Design, among others.`,
                    logo: LogoBlackstone
                },
                {
                    id: 1,
                    company: 'Utel University | U-Camp',
                    url: 'https://u-camp.utel.edu.mx/',
                    position: 'Coach Instructor • July 2021 - Current',
                    description: `Coach in a Bootcamp specializing in Full Stack 
                    web development with technologies such as HTML, CSS, JavaScript, 
                    NodeJS, MongoDB and React.`,
                    logo: LogoUCamp
                },
                {
                    id: 2,
                    company: 'Freelance',
                    url: '#projects',
                    position: 'Full Stack Developer • July 2020 - September 2021',
                    description: `I have collaborated in some projects of local 
                    companies with technologies such as React, Gatsby.js, Next.js, 
                    Drupal, MongoDB, Firebase.`,
                    logo: LogoFree
                },
                {
                    id: 3,
                    company: 'United Virtualities',
                    url: 'https://weareuv.com/',
                    position: 'Software Engineer • December 2019 - June 2020',
                    description: `They gave me training in technologies like HTML, 
                    CSS, SCSS, JavaScript, NodeJS, Express, WordPress, SalesForce, 
                    React. I participated in projects taking roles as Front End 
                    using React and WordPress or as Back End using NodeJS, Express 
                    and MongoDB`,
                    logo: LogoUV
                },
                {
                    id: 4,
                    company: 'Raise Technology',
                    url: 'https://raise-technology.com/',
                    position: 'Full Stack Developer • May 2019 - November 2019',
                    description: `In this company I developed a web project to take 
                    the online classes of the different rubles of the company (Language 
                    and technology classes). It was carried out in a team of 2 people. 
                    Technologies such as Angular, MongoDB, NodeJS, Express and Firebase 
                    were used.`,
                    logo: LogoRaise
                },
            ],
            more: 'See more...'
        },
        skills: {
            title: 'Skills',
            technologies: {
                language: {
                    title: 'Languages',
                    id: 'languages',
                    technologies: [
                        { id: 1, name: 'JavaScript', icon: LogoJs, url: 'https://developer.mozilla.org/es/docs/Web/JavaScript' },
                        { id: 2, name: 'HTML', icon: LogoHtml, url: 'https://developer.mozilla.org/es/docs/Web/HTML' },
                        { id: 3, name: 'CSS', icon: LogoCss, url: 'https://developer.mozilla.org/es/docs/Web/CSS' },
                        { id: 4, name: 'SCSS', icon: LogoScss, url: 'https://sass-lang.com/' },
                        { id: 5, name: 'Java', icon: LogoJava, url: 'https://www.java.com/es/' },
                        { id: 6, name: 'Python', icon: LogoPython, url: 'https://www.python.org/' },
                        { id: 7, name: 'C#', icon: LogoCSharp, url: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
                        { id: 8, name: 'C++', icon: LogoCPlusPlus, url: 'https://visualstudio.microsoft.com/es/vs/features/cplusplus/' },
                    ]
                },
                db: {
                    title: 'Data Bases',
                    id: 'dbs',
                    technologies: [
                        { id: 1, name: 'MongoDB', icon: LogoMongodb, url: 'https://www.mongodb.com/es' },
                        { id: 2, name: 'MS SQL Server', icon: LogoSqlServer, url: 'https://www.microsoft.com/es-mx/sql-server/sql-server-downloads' },
                        { id: 3, name: 'PostgreSQL', icon: LogoPostgresql, url: 'https://www.postgresql.org/' },
                        { id: 4, name: 'MySQL', icon: LogoMysql, url: 'https://www.mysql.com/' },
                    ]
                },
                css: {
                    title: 'CSS Frameworks',
                    id: 'css',
                    technologies: [
                        { id: 1, name: 'Bootstrap', icon: LogoBootstrap, url: 'https://getbootstrap.com/' },
                        { id: 2, name: 'Bulma', icon: LogoBulma, url: 'https://bulma.io/' },
                        { id: 3, name: 'Materialize', icon: LogoMaterialize, url: 'https://materializecss.com/' },
                        { id: 4, name: 'Tailwind CSS', icon: LogoTailwind, url: 'https://tailwindcss.com/' },
                        { id: 5, name: 'Ant Design', icon: LogoAntD, url: 'https://ant.design/' },
                    ]
                },
                framework: {
                    title: 'Frameworks',
                    id: 'frameworks',
                    technologies: [
                        { id: 1, name: 'Express.js', icon: LogoExpress, url: 'https://expressjs.com/es/' },
                        { id: 2, name: 'NestJS', icon: LogoNest, url: 'https://nestjs.com/' },
                        { id: 3, name: 'React', icon: LogoReact, url: 'https://es.reactjs.org/' },
                        { id: 4, name: 'Angular', icon: LogoAngular, url: 'https://angular.io/' },
                        { id: 5, name: 'Android', icon: LogoAndroid, url: 'https://www.android.com/intl/es-419_mx/' },
                        { id: 6, name: 'Ionic', icon: LogoIonic, url: 'https://ionicframework.com/' },
                        { id: 7, name: 'VueJS', icon: LogoVue, url: 'https://vuejs.org/' },
                        { id: 8, name: 'Gatsby.js', icon: LogoGatsby, url: 'https://www.gatsbyjs.com/' },
                        { id: 9, name: 'Next.js', icon: LogoNextjs, url: 'https://nextjs.org/' },
                        { id: 10, name: '.NET Core', icon: LogoNetCore, url: 'https://dotnet.microsoft.com/download' },
                    ]
                },
                cloud: {
                    title: 'Cloud',
                    id: 'cloud',
                    technologies: [
                        { id: 1, name: 'Firebase', icon: LogoFirebase, url: 'https://firebase.google.com/?hl=es' },
                        { id: 2, name: 'MongoDB Atlas', icon: LogoMongodb, url: 'https://www.mongodb.com/es/cloud/atlas' },
                        { id: 3, name: 'Heroku', icon: LogoHeroku, url: 'https://dashboard.heroku.com/' },
                        { id: 4, name: 'Netlify', icon: LogoNetlify, url: 'https://www.netlify.com/' },
                    ]
                },
                other: {
                    title: 'Other',
                    id: 'other',
                    technologies: [
                        { id: 1, name: 'Git', icon: LogoGit, url: 'https://git-scm.com/' },
                        { id: 2, name: 'NodeJS', icon: LogoNodejs, url: 'https://nodejs.org/es/' },
                        { id: 3, name: 'Storybook.js', icon: LogoStorybook, url: 'https://storybook.js.org/' },
                        { id: 4, name: 'Strapi', icon: LogoStrapi, url: 'https://strapi.io/' },
                        { id: 5, name: 'jQuery', icon: LogoJquery, url: 'https://jquery.com/' },
                    ]
                },
            }
        },
        projects: {
            title: 'Project',
            projects: [
                { id: 1, name: 'Restaurant Manager', description: 'Platform to manage restaurant orders.', url: 'https://isc-joserodriguez.github.io/BEDU_Grupo5/', repo: 'https://github.com/isc-joserodriguez/BEDU_Grupo5', image: Restaurant },
                { id: 2, name: 'Searching ML', description: 'Mercado Libre search clone.', url: 'https://isc-joserodriguez.github.io/products-ml-react/', repo: 'https://github.com/isc-joserodriguez/products-ml-react', image: ML },
                { id: 3, name: 'Burger Builder', description: 'Platform to manage burger orders.', url: 'https://react-burger-builder-aecb3.web.app/', repo: 'https://github.com/isc-joserodriguez/burger-builder', image: Burger },
                { id: 4, name: 'Matcha', description: 'Getmatcha landing page clone.', url: 'https://isc-joserodriguez.github.io/landing-matcha-bootstrap/', repo: 'https://github.com/isc-joserodriguez/landing-matcha-bootstrap', image: Matcha },
                { id: 5, name: 'Curses Platform', description: 'Platform to take online courses.', url: 'https://project-cursos.surge.sh/', repo: 'https://github.com/isc-joserodriguez/ProyectoCurso', image: Cursos },
                { id: 6, name: 'TODO App', description: 'TODO App made only with vanilla js (only a root in the HTML).', url: 'https://isc-joserodriguez.github.io/BEDU-Grupo11/todo-app/', repo: 'https://github.com/isc-joserodriguez/BEDU-Grupo11', image: TODO },
                { id: 7, name: 'Fic Web', description: 'Web compiler of a programming language to create school schedules.', url: 'https://isc-joserodriguez.github.io/ficWeb/', repo: 'https://github.com/isc-joserodriguez/ficWeb', image: Fic },
                { id: 8, name: 'LP-Mexican Coffee', description: 'Landing Page of a fictional coffee shop.', url: 'https://isc-joserodriguez.github.io/LP-MexicanCoffee/', repo: 'https://github.com/isc-joserodriguez/LP-MexicanCoffee', image: LPMexicanCoffee },
                { id: 9, name: 'TODO List', description: 'TODO List built with React + Ant Design.', url: 'https://isc-joserodriguez.github.io/todo-react/', repo: 'https://github.com/isc-joserodriguez/todo-react', image: TodoAntD },
            ]
        },
        contact: {
            title: 'Contact',
            phone: '+52 311 113 17 55',
            email: 'isc.joserodriguez@gmail.com',
            country: 'Tepic, Nayarit. Mexico'
        }
    },
}