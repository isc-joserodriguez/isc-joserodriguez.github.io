(this["webpackJsonpportafolio-joserodriguez"]=this["webpackJsonpportafolio-joserodriguez"]||[]).push([[0],{13:function(e,t,i){e.exports={Projects:"Projects_Projects__2fwrl",Title:"Projects_Title__1TOEW",LinksDiv:"Projects_LinksDiv__1sTT0",Link:"Projects_Link__3e0pF",FlipCard:"Projects_FlipCard__ICT2x",FlipCardInner:"Projects_FlipCardInner__3fT2a",FlipCardFront:"Projects_FlipCardFront__3GovB",FlipCardBack:"Projects_FlipCardBack__26gGg"}},23:function(e,t,i){e.exports={Home:"Home_Home__3pzM9",Banner:"Home_Banner__yUbk-",Next:"Home_Next__vWazO"}},24:function(e,t,i){e.exports={Work:"Work_Work__2K5bb",Title:"Work_Title__2lMNm",Logo:"Work_Logo__1tmI-",Description:"Work_Description__2KKPN",More:"Work_More__1qgKF"}},27:function(e,t,i){e.exports={Education:"Education_Education__2wg6n",Title:"Education_Title__2L8n2",Logo:"Education_Logo__3QYY9",Description:"Education_Description__1Nrz1"}},36:function(e,t,i){e.exports={About:"About_About__1neVW",Description:"About_Description__IWsj-"}},37:function(e,t,i){e.exports={Icon:"GridSkills_Icon__2vt2e",Title:"GridSkills_Title__2wMz7"}},38:function(e,t,i){e.exports={Skills:"Skills_Skills__fREiZ",Title:"Skills_Title__67uVA"}},40:function(e,t,i){e.exports={Footer:"Footer_Footer__1vcMt",Home:"Footer_Home__3f5VK"}},44:function(e,t,i){e.exports={Site:"Sites_Site__2W5_R"}},46:function(e,t,i){e.exports={Contact:"Contact_Contact__34FZ1"}},60:function(e,t,i){},61:function(e,t,i){"use strict";i.r(t);var o=i(1),s=i(16),a=i.n(s),c=i(47),n=i(73),r=i(68),l=i(69),d=i(74),m=i(2),u=function(e){var t=e.uriRef,i=void 0===t?"#":t,o=e.displayName,s=void 0===o?"Link":o;return Object(m.jsx)(d.a.Link,{href:i,className:"mx-auto",children:s})},p=function(e){var t=e.nav;return Object(m.jsx)(d.a,{className:"mx-auto",children:t.map((function(e){return Object(m.jsx)(u,{uriRef:e.uriRef,displayName:e.displayName},e.id)}))})},g=i(72),h=function(e){var t=e.langs,i=e.lang,o=e.changeLang;return Object(m.jsx)(d.a,{children:Object(m.jsx)(g.a,{title:i,className:"mx-auto",children:t.map((function(e){return Object(m.jsx)(g.a.Item,{onClick:function(){return o(e.id)},children:e.lang},e.id)}))})})},j=i.p+"static/media/logo.a2a33fcc.svg",b=function(e){var t=e.nav,i=e.langs,o=e.lang,s=e.changeLang;return Object(m.jsx)(n.a,{bg:"dark",expand:"lg",variant:"dark",className:"py-1",fixed:"top",children:Object(m.jsxs)(r.a,{children:[Object(m.jsx)(n.a.Brand,{href:"#home",children:Object(m.jsx)(l.a,{src:j,height:"35"})}),Object(m.jsx)(n.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(m.jsxs)(n.a.Collapse,{children:[Object(m.jsx)(p,{nav:t}),Object(m.jsx)(h,{langs:i,lang:o,changeLang:s})]})]})})},f=i(44),w=i.n(f),x=function(e){var t=e.sites;return Object(m.jsx)(m.Fragment,{children:t.map((function(e){return Object(m.jsx)("a",{className:"".concat(w.a.Site," h2"),href:e.url,target:"_blank",rel:"noreferrer",children:Object(m.jsx)(e.icon,{})},e.id)}))})},v=i(70),O=i(8),y=i(23),k=i.n(y),S=function(e){var t=e.title,i=e.subtitle,o=e.description,s=e.sites;return Object(m.jsx)("section",{id:"home",className:"".concat(k.a.Home," pt-5"),children:Object(m.jsxs)(r.a,{children:[Object(m.jsx)(v.a,{className:"".concat(k.a.Banner," align-items-center mt-5 p-5"),children:Object(m.jsxs)("div",{className:"".concat(k.a.Text," text-center"),children:[Object(m.jsx)("h1",{className:k.a.Title,children:t}),Object(m.jsx)("h3",{children:i}),Object(m.jsxs)("h4",{children:[" ",o," "]}),Object(m.jsx)("hr",{}),Object(m.jsx)(x,{sites:s})]})}),Object(m.jsx)(v.a,{className:k.a.Next,children:Object(m.jsx)("a",{className:"text-center",href:"#about",children:Object(m.jsx)(O.a,{})})})]})})},N=i(71),_=i.p+"static/media/CV-Jose-Rodriguez.1f7141f7.pdf",C=i(36),z=i.n(C),T=function(e){var t=e.title,i=e.image,o=e.description,s=e.downloadMessage;return Object(m.jsx)("section",{id:"about",className:z.a.About,children:Object(m.jsx)(r.a,{children:Object(m.jsxs)(v.a,{children:[Object(m.jsx)(N.a,{lg:"3",className:"d-flex justify-content-center",children:Object(m.jsx)(l.a,{src:i})}),Object(m.jsxs)(N.a,{lg:"9",children:[Object(m.jsx)("h2",{children:t}),Object(m.jsx)("p",{className:z.a.Description,children:o}),Object(m.jsx)(v.a,{children:Object(m.jsx)(N.a,{children:Object(m.jsx)("p",{className:"text-center",children:Object(m.jsxs)("a",{className:"btn btn-success",href:_,download:!0,children:[Object(m.jsx)(O.d,{})," ",s]})})})})]})]})})})},D=i(27),M=i.n(D),F=function(e){var t=e.title,i=e.educations;return Object(m.jsx)("section",{id:"education",className:M.a.Education,children:Object(m.jsxs)(r.a,{children:[Object(m.jsx)("h3",{className:M.a.Title,children:t}),i.map((function(e){return Object(m.jsxs)(v.a,{className:"py-3",children:[Object(m.jsx)(N.a,{sm:"4",className:"d-flex justify-content-center align-items-center",children:Object(m.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(m.jsx)(l.a,{className:M.a.Logo,src:e.logo})})}),Object(m.jsxs)(N.a,{sm:"8",children:[Object(m.jsx)("h3",{children:e.institution}),Object(m.jsx)("p",{className:"text-muted fst-italic",children:e.info}),Object(m.jsx)("p",{className:M.a.Description,children:e.description})]})]},e.id)}))]})})},L=i(24),B=i.n(L),E=function(e){var t=e.title,i=e.works,o=e.more;return Object(m.jsx)("section",{id:"work",className:B.a.Work,children:Object(m.jsxs)(r.a,{children:[Object(m.jsx)("h3",{className:B.a.Title,children:t}),i.map((function(e){return Object(m.jsxs)(v.a,{className:"py-3",children:[Object(m.jsx)(N.a,{sm:"4",className:"d-flex justify-content-center align-items-center",children:Object(m.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(m.jsx)(l.a,{className:B.a.Logo,src:e.logo})})}),Object(m.jsxs)(N.a,{sm:"8",children:[Object(m.jsx)("h3",{children:e.company}),Object(m.jsx)("p",{className:"text-muted fst-italic",children:e.position}),Object(m.jsx)("p",{className:B.a.Description,children:e.description})]})]},e.id)})),Object(m.jsx)("a",{className:B.a.More,href:"https://www.linkedin.com/in/isc-joserodriguez/",target:"_blank",rel:"noreferrer",children:o})]})})},I=i(45),R=i(37),P=i.n(R),A=function(e){var t=e.title,i=e.technologies,o=e.id;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("h5",{className:P.a.Title,id:o,children:[" ",t," "]}),Object(m.jsx)(v.a,{className:"py-3",children:i.map((function(e){return Object(m.jsx)(N.a,{xs:"4",sm:"3",md:"2",className:"d-flex justify-content-center align-items-center p-3",children:Object(m.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[Object(m.jsx)(l.a,{"data-tip":e.name,className:P.a.Icon,src:e.icon}),Object(m.jsx)(I.a,{})]})},e.id)}))})]})},J=i(38),W=i.n(J),q=function(e){var t=e.title,i=e.language,o=e.db,s=e.css,a=e.framework,c=e.cloud,n=e.other;return Object(m.jsx)("section",{id:"skills",className:W.a.Skills,children:Object(m.jsxs)(r.a,{children:[Object(m.jsx)("h3",{className:W.a.Title,children:t}),Object(m.jsx)(A,{id:i.id,title:i.title,technologies:i.technologies}),Object(m.jsx)(A,{id:o.id,title:o.title,technologies:o.technologies}),Object(m.jsx)(A,{id:a.id,title:a.title,technologies:a.technologies}),Object(m.jsx)(A,{id:s.id,title:s.title,technologies:s.technologies}),Object(m.jsx)(A,{id:c.id,title:c.title,technologies:c.technologies}),Object(m.jsx)(A,{id:n.id,title:n.title,technologies:n.technologies})]})})},H=i(13),G=i.n(H),U=function(e){var t=e.title,i=e.projects;return Object(m.jsx)("section",{id:"projects",className:G.a.Projects,children:Object(m.jsxs)(r.a,{children:[Object(m.jsx)("h3",{className:G.a.Title,children:t}),Object(m.jsx)(v.a,{children:i.map((function(e){return Object(m.jsx)(N.a,{sm:"12",lg:"6",className:"d-flex justify-content-center align-items-center mt-3 mb-3",children:Object(m.jsx)("div",{className:"".concat(G.a.FlipCard),children:Object(m.jsxs)("div",{className:"".concat(G.a.FlipCardInner),children:[Object(m.jsx)("div",{className:G.a.FlipCardFront,children:Object(m.jsx)(l.a,{src:e.image,alt:"".concat(e.name,"-image"),fluid:!0})}),Object(m.jsxs)("div",{className:G.a.FlipCardBack,children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("p",{children:e.description}),Object(m.jsx)(v.a,{children:Object(m.jsxs)("div",{className:G.a.LinksDiv,children:[Object(m.jsxs)("a",{className:G.a.Link,href:e.url,target:"_blank",rel:"noreferrer",children:[Object(m.jsx)(O.e,{className:"my-auto"})," Web"]}),Object(m.jsxs)("a",{className:G.a.Link,href:e.repo,target:"_blank",rel:"noreferrer",children:[Object(m.jsx)(O.g,{className:"my-auto"})," Repo"]})]})})]})]})})},e.id)}))})]})})},V=i(39),Q=i(46),K=i.n(Q),X=function(e){var t=e.title,i=e.phone,o=e.email,s=e.country;return Object(m.jsx)("section",{id:"contact",className:"".concat(K.a.Contact," pt-5"),children:Object(m.jsxs)(r.a,{children:[Object(m.jsx)("h3",{children:t}),Object(m.jsxs)("p",{children:[Object(m.jsx)(O.i,{})," ",Object(m.jsx)("a",{href:"tel:".concat(i),children:i})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)(V.b,{})," ",Object(m.jsx)("a",{href:"mailto:".concat(o),children:o})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)(V.a,{}),Object(m.jsxs)("a",{href:"https://www.google.com/maps/place/Tepic,+Nay./@21.5009822,-104.9119241,13z/",target:"_blank",rel:"noreferrer",children:[" ",s]})]})]})})},Y=i(40),Z=i.n(Y),$=function(e){var t=e.sites,i=e.copyright;return Object(m.jsx)("footer",{className:Z.a.Footer,children:Object(m.jsxs)(r.a,{className:"pt-5 pb-2 text-center",children:[Object(m.jsx)(v.a,{className:Z.a.Home,children:Object(m.jsx)("a",{className:"text-center",href:"#home",children:Object(m.jsx)(O.b,{})})}),Object(m.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:Object(m.jsx)(x,{sites:t})}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{className:"text-muted",children:i})]})})},ee=i(41),te=i.p+"static/media/Blackstone.65be5f4e.svg",ie=i.p+"static/media/bedu.71990bcc.svg",oe=i.p+"static/media/ittepic.d1e582e8.svg",se=i.p+"static/media/dgeti.97edbbff.svg",ae=i.p+"static/media/perfil.2f79d585.svg",ce=i.p+"static/media/UCamp.8222c487.svg",ne=i.p+"static/media/FreeLance.7394a933.svg",re=i.p+"static/media/UV.0477cc38.svg",le=i.p+"static/media/RaiseTechnology.5c648f71.svg",de=i.p+"static/media/android.a85f27d9.svg",me=i.p+"static/media/angular.4dfa361a.svg",ue=i.p+"static/media/bootstrap.91aad92a.svg",pe=i.p+"static/media/bulma.ecefb4da.svg",ge=i.p+"static/media/CPlusPlus.48ad2ff0.svg",he=i.p+"static/media/CSharp.e2c0510d.svg",je=i.p+"static/media/css.3ec32022.svg",be=i.p+"static/media/express.5760c46d.svg",fe=i.p+"static/media/firebase.c55df031.svg",we=i.p+"static/media/gatsby.da9963f5.svg",xe=i.p+"static/media/git.43d387b7.svg",ve=i.p+"static/media/heroku.ccf3f92a.svg",Oe=i.p+"static/media/html.4a671be7.svg",ye=i.p+"static/media/ionic.362176a9.svg",ke=i.p+"static/media/java.5386b56c.svg",Se=i.p+"static/media/jquery.d56513a6.svg",Ne=i.p+"static/media/js.081325c6.svg",_e=i.p+"static/media/materialize.1f1d42f0.svg",Ce=i.p+"static/media/mongodb.3beac5ba.svg",ze=i.p+"static/media/mysql.c0571d00.svg",Te=i.p+"static/media/netCore.97f78a48.svg",De=i.p+"static/media/netlify.6fffe725.svg",Me=i.p+"static/media/nextjs.e3c534ea.svg",Fe=i.p+"static/media/nodejs.3dc364b8.svg",Le=i.p+"static/media/postgresql.6d3129da.svg",Be=i.p+"static/media/antd.9bc8753a.svg",Ee=i.p+"static/media/python.026a6268.svg",Ie=i.p+"static/media/react.7a4752ec.svg",Re=i.p+"static/media/scss.903cef0c.svg",Pe=i.p+"static/media/sqlServer.b0fa9ca5.svg",Ae=i.p+"static/media/tailwind.50fbcf51.svg",Je=i.p+"static/media/vue.794e612a.svg",We=i.p+"static/media/nest.8cc42ce9.svg",qe=i.p+"static/media/storybook.ab2f4229.svg",He=i.p+"static/media/strapi.07abd775.svg",Ge=i.p+"static/media/burger.d6f0f4d4.png",Ue=i.p+"static/media/cursos.34dc4f2b.png",Ve=i.p+"static/media/fic.de883211.png",Qe=i.p+"static/media/matcha.05eaa3d4.png",Ke=i.p+"static/media/ml.91f54ffd.png",Xe=i.p+"static/media/restaurant.b1a751c6.png",Ye=i.p+"static/media/todo.bc72cf00.png",Ze=i.p+"static/media/lp.968fed93.png",$e=i.p+"static/media/todo-antd.30c06a9f.png",et={es:{lang:"Idioma",langs:[{id:"es",lang:"Espa\xf1ol"},{id:"en",lang:"Ingl\xe9s"}],copyright:"\xa9 Copyright 2021",title:"Hola, mi nombre es Jos\xe9 Rodriguez",subtitle:"Ingeniero en Sistemas Computacionales radicando en Tepic, Nayarit.",description:"Soy un desarrollador web tomado roles como Front \n        End y Back End. Actualmente me desempe\xf1o principalmente como Full Stack \n        con experiencia en tecnolog\xedas tales como stack MERN y MEAN.",nav:[{id:1,displayName:"Inicio",uriRef:"#home"},{id:2,displayName:"Sobre mi",uriRef:"#about"},{id:3,displayName:"Educaci\xf3n",uriRef:"#education"},{id:4,displayName:"Trabajo",uriRef:"#work"},{id:5,displayName:"Habilidades",uriRef:"#skills"},{id:6,displayName:"Proyectos",uriRef:"#projects"},{id:7,displayName:"Contacto",uriRef:"#contact"}],sites:[{id:1,icon:O.h,url:"https://www.linkedin.com/in/isc-joserodriguez"},{id:2,icon:O.e,url:"https://github.com/isc-joserodriguez"},{id:3,icon:O.f,url:"https://www.hackerrank.com/isc_jrodriguez"},{id:4,icon:O.c,url:"https://codepen.io/isc-joserodriguez"},{id:5,icon:ee.a,url:"https://www.codewars.com/users/isc-joserodriguez"}],about:{title:"Sobre mi",image:ae,description:"Soy un ingeniero en sistemas computacionales. Tiendo a ser\n            calmado y servicial. Me gusta cooperar e involucrarme en los proyectos\n            en los que se me asigna. Considero que soy una persona que escucha y\n            siente empat\xeda por las preocupaciones y emociones de los compa\xf1eros, lo\n            cu\xe1l permite que pueda trabajar de manera eficaz en equipos de trabajo. \n            No me gustan los conflictos, por lo cu\xe1l cuando me topo con alguno siempre \n            busco la mejor manera de solucionarlo. Algunos de mis hobbies favoritos son \n            los videojuegos, as\xed como juegos de destreza mental como rompecabezas de \n            destreza (de madera, anillos, etc.), ajedrez y sudoku.",downloadMessage:"Descargar CV"},education:{title:"Educaci\xf3n",educations:[{id:1,institution:"BEDU",url:"https://bedu.org/",info:"Bootcamp - Desarrollo Full Stack \u2022 Octubre 2020 - Junio 2021",description:"Gan\xe9 una beca otorgada a 200 estudiantes para estudiar en un bootcamp\n                    el desarrollo web Full Stack con especializaci\xf3n en React. Durante 3 fases que dur\xf3\n                    8 meses, en cada fase iban descalificando estudiantes hasta que finalmente quedamos 40.",logo:ie},{id:2,institution:"Instituto Tecnol\xf3gico de Tepic",url:"https://www.tepic.tecnm.mx/",info:"Ingenier\xeda en Sistemas Computacionales \u2022 Agosto 2013 - Diciembre 2019",description:"Estudi\xe9 la Ingenier\xeda en Sistemas Computacionales en el Instituto Tecnol\xf3gico\n                    de Tepic (actualmente conocido tambi\xe9n como Tecnol\xf3gico Nacional de M\xe9xico - \n                    Campus Tepic). La especializaci\xf3n fue en aplicaciones multiplataforma, sin embargo\n                    tambi\xe9n cubre rubros tales como bases de datos (SQL y NoSQL), desarrollo web (con frameworks\n                    tales como Angular, React, Vue y .Net Core), desarrollo m\xf3vil (con Java nativo y con frameworks\n                    multiplataforma como Ionic y Xamarin Forms), administraci\xf3n de redes, entre otras habilidades.",logo:oe},{id:3,institution:"Cetis No. 100",url:"https://www.cetis100.edu.mx/",info:"T\xe9cnico en Inform\xe1tica \u2022 Agosto 2010 - Junio 2013",description:"El Cetis No. 100 forma parte de la DGETI, es un bachillerato donde\n                    entr\xe9 como t\xe9cnico en inform\xe1tica en el \xe1rea de f\xedsico matem\xe1tico. Aqu\xed fue donde\n                    me adentr\xe9 a la programaci\xf3n con lenguajes sencillos tales como C++ y Visual Basic. \n                    As\xed como bases de datos con Microsoft Access.",logo:se}]},work:{title:"Trabajo",works:[{id:0,company:"Blackstone Studio",url:"https://www.blackstone.studio/",position:"Full Stack Developer Mid \u2022 Septiembre 2021 - Actual",description:"He participado como desarrollador Full Stack en proyectos con \n                    tecnolog\xedas como React.js, Strapi, AWS, NativeBase, Ant Design, entre otras.",logo:te},{id:1,company:"Universidad Utel | U-Camp",url:"https://u-camp.utel.edu.mx/",position:"Coach Instructor \u2022 Julio 2021 - Actual",description:"Coach en un Bootcamp con especializaci\xf3n en desarrollo web \n                    Full Stack con tecnolog\xedas tales como HTML, CSS, JavaScript, NodeJS, \n                    MongoDB y React.",logo:ce},{id:2,company:"Freelance",url:"#projects",position:"Desarrollador Full Stack \u2022 Julio 2020 - Septiembre 2021",description:"He colaborado en algunos proyectos de empresas locales \n                    con tecnolog\xedas como React, Gatsby.js, Next.js, Drupal, MongoDB, Firebase.",logo:ne},{id:3,company:"United Virtualities",url:"https://weareuv.com/",position:"Ingeniero de Software \u2022 Diciembre 2019 - Junio 2020",description:"Me dieron capacitaci\xf3n en tecnolog\xedas como HTML, CSS, SCSS, \n                    JavaScript, NodeJS, Express, WordPress, SalesForce, React. Particip\xe9 en proyectos \n                    tomando roles como Front End usando React y WordPress o como Back End usando \n                    NodeJS, Express y MongoDB",logo:re},{id:4,company:"Raise Technology",url:"https://raise-technology.com/",position:"Desarrollador Full Stack \u2022 Mayo 2019 - Noviembre 2019",description:"En esta empresa desarroll\xe9 un proyecto web para llevar \n                    las clases en l\xednea de los diferentes rublos de la empresa (Clases de \n                    idiomas y de tecnolog\xedas). Se llev\xf3 a cabo en un equipo de 2 personas. \n                    Se usaron tecnolog\xedas tales como Angular, MongoDB, NodeJS, Express y Firebase.",logo:le}],more:"Ver m\xe1s..."},skills:{title:"Habilidades",technologies:{language:{title:"Lenguajes",id:"languages",technologies:[{id:1,name:"JavaScript",icon:Ne,url:"https://developer.mozilla.org/es/docs/Web/JavaScript"},{id:2,name:"HTML",icon:Oe,url:"https://developer.mozilla.org/es/docs/Web/HTML"},{id:3,name:"CSS",icon:je,url:"https://developer.mozilla.org/es/docs/Web/CSS"},{id:4,name:"SCSS",icon:Re,url:"https://sass-lang.com/"},{id:5,name:"Java",icon:ke,url:"https://www.java.com/es/"},{id:6,name:"Python",icon:Ee,url:"https://www.python.org/"},{id:7,name:"C#",icon:he,url:"https://docs.microsoft.com/en-us/dotnet/csharp/"},{id:8,name:"C++",icon:ge,url:"https://visualstudio.microsoft.com/es/vs/features/cplusplus/"}]},db:{title:"Bases de Datos",id:"dbs",technologies:[{id:1,name:"MongoDB",icon:Ce,url:"https://www.mongodb.com/es"},{id:2,name:"MS SQL Server",icon:Pe,url:"https://www.microsoft.com/es-mx/sql-server/sql-server-downloads"},{id:3,name:"PostgreSQL",icon:Le,url:"https://www.postgresql.org/"},{id:4,name:"MySQL",icon:ze,url:"https://www.mysql.com/"}]},css:{title:"Frameworks de CSS",id:"css",technologies:[{id:1,name:"Bootstrap",icon:ue,url:"https://getbootstrap.com/"},{id:2,name:"Bulma",icon:pe,url:"https://bulma.io/"},{id:3,name:"Materialize",icon:_e,url:"https://materializecss.com/"},{id:4,name:"Tailwind CSS",icon:Ae,url:"https://tailwindcss.com/"},{id:5,name:"Ant Design",icon:Be,url:"https://ant.design/"}]},framework:{title:"Frameworks",id:"frameworks",technologies:[{id:1,name:"Express.js",icon:be,url:"https://expressjs.com/es/"},{id:2,name:"NestJS",icon:We,url:"https://nestjs.com/"},{id:3,name:"React",icon:Ie,url:"https://es.reactjs.org/"},{id:4,name:"Angular",icon:me,url:"https://angular.io/"},{id:5,name:"Android",icon:de,url:"https://www.android.com/intl/es-419_mx/"},{id:6,name:"Ionic",icon:ye,url:"https://ionicframework.com/"},{id:7,name:"VueJS",icon:Je,url:"https://vuejs.org/"},{id:8,name:"Gatsby.js",icon:we,url:"https://www.gatsbyjs.com/"},{id:9,name:"Next.js",icon:Me,url:"https://nextjs.org/"},{id:10,name:".NET Core",icon:Te,url:"https://dotnet.microsoft.com/download"}]},cloud:{title:"Nube",id:"cloud",technologies:[{id:1,name:"Firebase",icon:fe,url:"https://firebase.google.com/?hl=es"},{id:2,name:"MongoDB Atlas",icon:Ce,url:"https://www.mongodb.com/es/cloud/atlas"},{id:3,name:"Heroku",icon:ve,url:"https://dashboard.heroku.com/"},{id:4,name:"Netlify",icon:De,url:"https://www.netlify.com/"}]},other:{title:"Otras",id:"other",technologies:[{id:1,name:"Git",icon:xe,url:"https://git-scm.com/"},{id:2,name:"NodeJS",icon:Fe,url:"https://nodejs.org/es/"},{id:3,name:"Storybook.js",icon:qe,url:"https://storybook.js.org/"},{id:4,name:"Strapi",icon:He,url:"https://strapi.io/"},{id:5,name:"jQuery",icon:Se,url:"https://jquery.com/"}]}}},projects:{title:"Proyectos",projects:[{id:1,name:"Restaurant Manager",description:"Plataforma para gestionar los pedidos de un restaurante.",url:"https://isc-joserodriguez.github.io/BEDU_Grupo5/",repo:"https://github.com/isc-joserodriguez/BEDU_Grupo5",image:Xe},{id:2,name:"B\xfasqueda ML",description:"Clon de la b\xfasqueda de Mercado Libre.",url:"https://isc-joserodriguez.github.io/products-ml-react/",repo:"https://github.com/isc-joserodriguez/products-ml-react",image:Ke},{id:3,name:"Burger Builder",description:"Plataforma para gestionar pedidos de hamburguesas.",url:"https://react-burger-builder-aecb3.web.app/",repo:"https://github.com/isc-joserodriguez/burger-builder",image:Ge},{id:4,name:"Matcha",description:"Clon del landing page de getmatcha.",url:"https://isc-joserodriguez.github.io/landing-matcha-bootstrap/",repo:"https://github.com/isc-joserodriguez/landing-matcha-bootstrap",image:Qe},{id:5,name:"Plataforma de Cursos",description:"Plataforma para tomar cursos en l\xednea.",url:"https://project-cursos.surge.sh/",repo:"https://github.com/isc-joserodriguez/ProyectoCurso",image:Ue},{id:6,name:"TODO App",description:"TODO App hecha \xfanicamente con vanilla js (s\xf3lo un root en el HTML).",url:"https://isc-joserodriguez.github.io/BEDU-Grupo11/todo-app/",repo:"https://github.com/isc-joserodriguez/BEDU-Grupo11",image:Ye},{id:7,name:"Fic Web",description:"Compilador web de un lenguaje de programaci\xf3n para crear horarios escolares.",url:"https://isc-joserodriguez.github.io/ficWeb/",repo:"https://github.com/isc-joserodriguez/ficWeb",image:Ve},{id:8,name:"LP-Mexican Coffee",description:"Landing Page de una cafeter\xeda ficticia.",url:"https://isc-joserodriguez.github.io/LP-MexicanCoffee/",repo:"https://github.com/isc-joserodriguez/LP-MexicanCoffee",image:Ze},{id:9,name:"TODO List",description:"TODO List constru\xedda con React + Ant Design.",url:"https://isc-joserodriguez.github.io/todo-react/",repo:"https://github.com/isc-joserodriguez/todo-react",image:$e}]},contact:{title:"Contacto",phone:"+52 311 113 17 55",email:"isc.joserodriguez@gmail.com",country:"Tepic, Nayarit. M\xe9xico"}},en:{lang:"Language",langs:[{id:"es",lang:"Spanish"},{id:"en",lang:"English"}],copyright:"\xa9 Copyright 2021",title:"Hi, I'm Jos\xe9 Rodriguez",subtitle:"A Tepic, Nayarit based Computer Systems Engineer.",description:"I'm a web developer taking roles like Front End \n        and Back End. Currently I work mainly as a Full Stack with \n        experience in technologies such as stack MERN and MEAN.",nav:[{id:1,displayName:"Home",uriRef:"#home"},{id:2,displayName:"About",uriRef:"#about"},{id:3,displayName:"Education",uriRef:"#education"},{id:4,displayName:"Work",uriRef:"#work"},{id:5,displayName:"Skills",uriRef:"#skills"},{id:6,displayName:"Projects",uriRef:"#projects"},{id:7,displayName:"Contact",uriRef:"#contact"}],sites:[{id:1,icon:O.h,url:"https://www.linkedin.com/in/isc-joserodriguez"},{id:2,icon:O.e,url:"https://github.com/isc-joserodriguez"},{id:3,icon:O.f,url:"https://www.hackerrank.com/isc_jrodriguez"},{id:4,icon:O.c,url:"https://codepen.io/isc-joserodriguez"},{id:5,icon:ee.a,url:"https://www.codewars.com/users/isc-joserodriguez"}],about:{title:"About",image:ae,description:"I'm a computer systems engineer. I tend to be calm and \n            helpful. I like to cooperate and get involved in the projects in which \n            I'm assigned. I consider myself a person who listens and feels empathy\n            for the concerns and emotions of colleagues, which allows me to work \n            effectively in work teams. I don't like conflicts, so when I come \n            across one I always look for the best way to solve it. Some of my \n            favorite hobbies are video games, as well as mental skill games like \n            Idexterity puzzles (wood, rings, etc.), chess, and Sudoku.",downloadMessage:"Download CV"},education:{title:"Education",educations:[{id:1,institution:"BEDU",url:"https://bedu.org/",info:"Bootcamp - Full Stack Development \u2022 October 2020 - June 2021",description:"I won a scholarship awarded to 200 students to study Full Stack \n                    web development in a bootcamp with a specialization in React. During 3 phases \n                    that lasted 8 months, in each phase they were disqualifying students until finally \n                    we were 40.",logo:ie},{id:2,institution:"Instituto Tecnol\xf3gico de Tepic",url:"https://www.tepic.tecnm.mx/",info:"Computer Systems Engineer \u2022 August 2013 - December 2019",description:"I studied Computer Systems Engineering at the \n                    Instituto Tecnol\xf3gico de Tepic (currently also known as Tecnol\xf3gico \n                    Nacional de M\xe9xico - Campus Tepic). The specialization was in \n                    multiplatform applications, however it also covers areas such as \n                    databases (SQL and NoSQL), web development (with frameworks such as \n                    Angular, React, Vue and .Net Core), mobile development (with native Java and \n                    with frameworks cross-platform such as Ionic and Xamarin Forms), \n                    network administration, among other skills.",logo:oe},{id:3,institution:"Cetis No. 100",url:"https://www.cetis100.edu.mx/",info:"IT technician \u2022 August 2010 - June 2013",description:"Cetis No. 100 is part of the DGETI, \n                    it is a baccalaureate where I entered as a IT \n                    technician in the area of mathematical physics. This is \n                    where I got into programming with simple languages such \n                    as C ++ and Visual Basic. As well as databases with Microsoft \n                    Access.",logo:se}]},work:{title:"Work",works:[{id:0,company:"Blackstone Studio",url:"https://www.blackstone.studio/",position:"Full Stack Developer Mid \u2022 September 2021 - Current",description:"I have participated as a Full Stack developer in \n                    projects with technologies such as React.js, Strapi, AWS, NativeBase, \n                    Ant Design, among others.",logo:te},{id:1,company:"Utel University | U-Camp",url:"https://u-camp.utel.edu.mx/",position:"Coach Instructor \u2022 July 2021 - Current",description:"Coach in a Bootcamp specializing in Full Stack \n                    web development with technologies such as HTML, CSS, JavaScript, \n                    NodeJS, MongoDB and React.",logo:ce},{id:2,company:"Freelance",url:"#projects",position:"Full Stack Developer \u2022 July 2020 - September 2021",description:"I have collaborated in some projects of local \n                    companies with technologies such as React, Gatsby.js, Next.js, \n                    Drupal, MongoDB, Firebase.",logo:ne},{id:3,company:"United Virtualities",url:"https://weareuv.com/",position:"Software Engineer \u2022 December 2019 - June 2020",description:"They gave me training in technologies like HTML, \n                    CSS, SCSS, JavaScript, NodeJS, Express, WordPress, SalesForce, \n                    React. I participated in projects taking roles as Front End \n                    using React and WordPress or as Back End using NodeJS, Express \n                    and MongoDB",logo:re},{id:4,company:"Raise Technology",url:"https://raise-technology.com/",position:"Full Stack Developer \u2022 May 2019 - November 2019",description:"In this company I developed a web project to take \n                    the online classes of the different rubles of the company (Language \n                    and technology classes). It was carried out in a team of 2 people. \n                    Technologies such as Angular, MongoDB, NodeJS, Express and Firebase \n                    were used.",logo:le}],more:"See more..."},skills:{title:"Skills",technologies:{language:{title:"Languages",id:"languages",technologies:[{id:1,name:"JavaScript",icon:Ne,url:"https://developer.mozilla.org/es/docs/Web/JavaScript"},{id:2,name:"HTML",icon:Oe,url:"https://developer.mozilla.org/es/docs/Web/HTML"},{id:3,name:"CSS",icon:je,url:"https://developer.mozilla.org/es/docs/Web/CSS"},{id:4,name:"SCSS",icon:Re,url:"https://sass-lang.com/"},{id:5,name:"Java",icon:ke,url:"https://www.java.com/es/"},{id:6,name:"Python",icon:Ee,url:"https://www.python.org/"},{id:7,name:"C#",icon:he,url:"https://docs.microsoft.com/en-us/dotnet/csharp/"},{id:8,name:"C++",icon:ge,url:"https://visualstudio.microsoft.com/es/vs/features/cplusplus/"}]},db:{title:"Data Bases",id:"dbs",technologies:[{id:1,name:"MongoDB",icon:Ce,url:"https://www.mongodb.com/es"},{id:2,name:"MS SQL Server",icon:Pe,url:"https://www.microsoft.com/es-mx/sql-server/sql-server-downloads"},{id:3,name:"PostgreSQL",icon:Le,url:"https://www.postgresql.org/"},{id:4,name:"MySQL",icon:ze,url:"https://www.mysql.com/"}]},css:{title:"CSS Frameworks",id:"css",technologies:[{id:1,name:"Bootstrap",icon:ue,url:"https://getbootstrap.com/"},{id:2,name:"Bulma",icon:pe,url:"https://bulma.io/"},{id:3,name:"Materialize",icon:_e,url:"https://materializecss.com/"},{id:4,name:"Tailwind CSS",icon:Ae,url:"https://tailwindcss.com/"},{id:5,name:"Ant Design",icon:Be,url:"https://ant.design/"}]},framework:{title:"Frameworks",id:"frameworks",technologies:[{id:1,name:"Express.js",icon:be,url:"https://expressjs.com/es/"},{id:2,name:"NestJS",icon:We,url:"https://nestjs.com/"},{id:3,name:"React",icon:Ie,url:"https://es.reactjs.org/"},{id:4,name:"Angular",icon:me,url:"https://angular.io/"},{id:5,name:"Android",icon:de,url:"https://www.android.com/intl/es-419_mx/"},{id:6,name:"Ionic",icon:ye,url:"https://ionicframework.com/"},{id:7,name:"VueJS",icon:Je,url:"https://vuejs.org/"},{id:8,name:"Gatsby.js",icon:we,url:"https://www.gatsbyjs.com/"},{id:9,name:"Next.js",icon:Me,url:"https://nextjs.org/"},{id:10,name:".NET Core",icon:Te,url:"https://dotnet.microsoft.com/download"}]},cloud:{title:"Cloud",id:"cloud",technologies:[{id:1,name:"Firebase",icon:fe,url:"https://firebase.google.com/?hl=es"},{id:2,name:"MongoDB Atlas",icon:Ce,url:"https://www.mongodb.com/es/cloud/atlas"},{id:3,name:"Heroku",icon:ve,url:"https://dashboard.heroku.com/"},{id:4,name:"Netlify",icon:De,url:"https://www.netlify.com/"}]},other:{title:"Other",id:"other",technologies:[{id:1,name:"Git",icon:xe,url:"https://git-scm.com/"},{id:2,name:"NodeJS",icon:Fe,url:"https://nodejs.org/es/"},{id:3,name:"Storybook.js",icon:qe,url:"https://storybook.js.org/"},{id:4,name:"Strapi",icon:He,url:"https://strapi.io/"},{id:5,name:"jQuery",icon:Se,url:"https://jquery.com/"}]}}},projects:{title:"Project",projects:[{id:1,name:"Restaurant Manager",description:"Platform to manage restaurant orders.",url:"https://isc-joserodriguez.github.io/BEDU_Grupo5/",repo:"https://github.com/isc-joserodriguez/BEDU_Grupo5",image:Xe},{id:2,name:"Searching ML",description:"Mercado Libre search clone.",url:"https://isc-joserodriguez.github.io/products-ml-react/",repo:"https://github.com/isc-joserodriguez/products-ml-react",image:Ke},{id:3,name:"Burger Builder",description:"Platform to manage burger orders.",url:"https://react-burger-builder-aecb3.web.app/",repo:"https://github.com/isc-joserodriguez/burger-builder",image:Ge},{id:4,name:"Matcha",description:"Getmatcha landing page clone.",url:"https://isc-joserodriguez.github.io/landing-matcha-bootstrap/",repo:"https://github.com/isc-joserodriguez/landing-matcha-bootstrap",image:Qe},{id:5,name:"Curses Platform",description:"Platform to take online courses.",url:"https://project-cursos.surge.sh/",repo:"https://github.com/isc-joserodriguez/ProyectoCurso",image:Ue},{id:6,name:"TODO App",description:"TODO App made only with vanilla js (only a root in the HTML).",url:"https://isc-joserodriguez.github.io/BEDU-Grupo11/todo-app/",repo:"https://github.com/isc-joserodriguez/BEDU-Grupo11",image:Ye},{id:7,name:"Fic Web",description:"Web compiler of a programming language to create school schedules.",url:"https://isc-joserodriguez.github.io/ficWeb/",repo:"https://github.com/isc-joserodriguez/ficWeb",image:Ve},{id:8,name:"LP-Mexican Coffee",description:"Landing Page of a fictional coffee shop.",url:"https://isc-joserodriguez.github.io/LP-MexicanCoffee/",repo:"https://github.com/isc-joserodriguez/LP-MexicanCoffee",image:Ze},{id:9,name:"TODO List",description:"TODO List built with React + Ant Design.",url:"https://isc-joserodriguez.github.io/todo-react/",repo:"https://github.com/isc-joserodriguez/todo-react",image:$e}]},contact:{title:"Contact",phone:"+52 311 113 17 55",email:"isc.joserodriguez@gmail.com",country:"Tepic, Nayarit. Mexico"}}};var tt=function(){var e=Object(o.useState)("es"),t=Object(c.a)(e,2),i=t[0],s=t[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(b,{nav:et[i].nav,langs:et[i].langs,lang:et[i].lang,changeLang:function(e){return s(e)}}),Object(m.jsx)(S,{title:et[i].title,subtitle:et[i].subtitle,description:et[i].description,lang:i,sites:et[i].sites}),Object(m.jsx)(T,{title:et[i].about.title,image:et[i].about.image,description:et[i].about.description,downloadMessage:et[i].about.downloadMessage}),Object(m.jsx)(F,{title:et[i].education.title,educations:et[i].education.educations}),Object(m.jsx)(E,{title:et[i].work.title,works:et[i].work.works,more:et[i].work.more}),Object(m.jsx)(q,{title:et[i].skills.title,language:et[i].skills.technologies.language,db:et[i].skills.technologies.db,css:et[i].skills.technologies.css,framework:et[i].skills.technologies.framework,cloud:et[i].skills.technologies.cloud,other:et[i].skills.technologies.other}),Object(m.jsx)(U,{title:et[i].projects.title,projects:et[i].projects.projects}),Object(m.jsx)(X,{title:et[i].contact.title,phone:et[i].contact.phone,email:et[i].contact.email,country:et[i].contact.country}),Object(m.jsx)($,{sites:et[i].sites,copyright:et[i].copyright})]})},it=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,75)).then((function(t){var i=t.getCLS,o=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;i(e),o(e),s(e),a(e),c(e)}))};i(59),i(60);a.a.render(Object(m.jsx)(tt,{}),document.getElementById("root")),it()}},[[61,1,2]]]);
//# sourceMappingURL=main.a6d22d72.chunk.js.map