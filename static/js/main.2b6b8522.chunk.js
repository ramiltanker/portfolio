(this.webpackJsonpsummary=this.webpackJsonpsummary||[]).push([[0],{469:function(e,t,a){},476:function(e,t,a){"use strict";a.r(t);var s=a(4),i=a.n(s),c=a(26),n=a.n(c),r=a(16),o=function(e){e(!1),document.body.style.overflow="auto",document.body.style.paddingRight="0"},l=a(1),d=function(e){var t=e.logoText;return Object(l.jsx)("a",{className:"logo",href:"/",children:Object(l.jsx)("div",{className:"logo__text",children:t})})},m=function(e){var t=e.handleOpenBurgerMenu;return Object(l.jsx)("div",{className:"burger-menu",children:Object(l.jsxs)("button",{className:"burger-menu__button",onClick:t,children:[Object(l.jsx)("span",{}),Object(l.jsx)("span",{}),Object(l.jsx)("span",{})]})})},j=function(e){var t=e.handleOpenBurgerMenu;return Object(l.jsx)("nav",{className:"nav",children:Object(l.jsxs)("div",{className:"nav__inner",children:[Object(l.jsx)(d,{logoText:"R"}),Object(l.jsx)(m,{handleOpenBurgerMenu:t})]})})},p=function(e){var t=e.text;return Object(l.jsx)("div",{className:"header__copy",children:Object(l.jsx)("p",{className:"header__copy-text",children:t})})},u=a.p+"static/media/photo.8ff1f11c.png",b=function(){return Object(l.jsx)("img",{className:"header__image",src:u,alt:"Personal"})},h=function(e){var t=e.text;return Object(l.jsx)("div",{className:"header__subtitle",children:Object(l.jsx)("h4",{className:"header__subtitle-text",children:t})})},x=a(103),_=a.n(x),O=function(e){var t=e.text;return Object(l.jsxs)("div",{className:"header__title-box",children:[Object(l.jsxs)("h2",{className:"header__title",children:[t,"\xa0"]}),Object(l.jsx)(_.a,{className:"header__title",strings:["Ashrafulin Ramil","Front-End Developer"],typeSpeed:100,backSpeed:80,loop:!0})]})},g=a(27),f=a.p+"static/media/arrow-down.d10345e3.svg",v=function(){return Object(l.jsx)(g.Link,{className:"header__next",to:"about",spy:!0,smooth:!0,ignoreCancelEvents:!0,offset:-100,children:Object(l.jsx)("img",{className:"header__arrow-down",src:f,alt:"Arrow-down"})})},N=function(e){e(!0),document.body.style.overflow="hidden",document.body.style.paddingRight="3px"},k=function(e){var t=e.text,a=e.abs;return a?Object(l.jsx)("button",{className:"button",onClick:function(){return a&&N(a)},children:t}):Object(l.jsx)(g.Link,{className:"button",ignoreCancelEvents:!0,to:"contacts",spy:!0,smooth:!0,offset:-100,children:t})},w=function(){return Object(l.jsxs)("div",{className:"header__box",children:[Object(l.jsx)(h,{text:"Hello and Welcome"}),Object(l.jsx)(O,{text:"I am"}),Object(l.jsx)(k,{text:"Contact me"}),Object(l.jsx)(v,{})]})},S=function(e){var t=e.href,a=e.Icon;return Object(l.jsx)("li",{className:"header__social-item",children:Object(l.jsx)("a",{className:"header__social-link",href:t,target:"_blank",rel:"noreferrer",children:Object(l.jsx)(a,{})})})},y=a(104),I=a.n(y),M=a(106),R=a.n(M),T=a(107),C=a.n(T),E=function(){var e=[I.a,R.a,C.a],t=["https://tlgg.ru/niceguygg","https://wa.me/+77004870180","https://instagram.com/ashrafulin_?utm_medium=copy_link"];return Object(l.jsx)("div",{className:"header__social",children:Object(l.jsx)("ul",{className:"header__social-list",children:e.map((function(e,a){return Object(l.jsx)(S,{href:t[a],Icon:e},a)}))})})},F=function(){return Object(l.jsx)("div",{className:"header__content",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"header__wrap",children:[Object(l.jsx)(w,{}),Object(l.jsx)(b,{})]}),Object(l.jsx)(E,{}),Object(l.jsx)(p,{text:"Nice person and great developer"})]})})},A=function(e){var t=e.fill;return Object(l.jsx)("svg",{className:"header__decor",x:"0px",y:"0px",viewBox:"0 186.5 1920 113.5",children:Object(l.jsx)("polygon",{points:"0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 ",fill:t})})},L=function(e){var t=e.handleOpenBurgerMenu;return Object(l.jsxs)("header",{className:"header",id:"home",children:[Object(l.jsx)(j,{handleOpenBurgerMenu:t}),Object(l.jsx)(F,{}),Object(l.jsx)(A,{fill:"#2a2a2a"})]})},W=a(108),P=a.n(W),B=(a(467),a(468),function(e){var t=e.photo;return Object(l.jsx)("div",{className:"about__left",children:Object(l.jsx)("img",{className:"about__image",src:t,alt:"About me"})})}),D=function(e){var t=e.label,a=e.value;return Object(l.jsxs)("li",{className:"about__item",children:[Object(l.jsxs)("label",{className:"about__label",children:[t,":"]}),Object(l.jsx)("span",{className:"about__value",children:a})]})},J=function(e){var t=[{Name:e.name,id:"1"},{Age:e.age,id:"2"},{Phone:e.phone,id:"3"},{Email:e.email,id:"4"}];return Object(l.jsx)("ul",{className:"about__list",children:t.map((function(e){var t=Object.keys(e)[0],a=Object.values(e)[0];return Object(l.jsx)(D,{label:t,value:a},e.id)}))})},H=function(e){var t=e.content;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("p",{className:"about__text",children:t})})},V=function(e){var t=e.text;return Object(l.jsx)("h2",{className:"about__title",children:t})},z=function(e){var t=e.name,a=e.age,s=e.phone,i=e.email,c=e.text,n=e.abs;return Object(l.jsxs)("div",{className:"about__right",children:[Object(l.jsx)(V,{text:"About Me"}),Object(l.jsx)("div",{className:"about__box",children:Object(l.jsx)(H,{content:c})}),Object(l.jsx)(J,{name:t,age:a,phone:s,email:i}),Object(l.jsx)(k,{text:"More About",abs:n})]})},K=[{id:2,name:"Ashrafulin Ramil",age:"19 years",phone:"+7-(700)-487-01-80",email:"ramilashrafulinfrontend@gmail.com",text:"I am a frontend developer with two years of development experience. Participated in commercial development on a freelance platform. Also I have worked at MindSet as a trainee frontend developer and participated in the development of a startup project. I write adaptive SPA applications using modern technologies, observing the structure of the project.",photo:a.p+"static/media/portret.f1677ae3.png"}],U=a(47);U.c.use([U.b,U.a]);var q=function(e){var t=e.abs;return Object(l.jsx)(l.Fragment,{children:K.map((function(e){e.id;var a=e.name,s=e.age,i=e.phone,c=e.email,n=e.text,r=e.photo;return Object(l.jsxs)("div",{className:"about__inner",children:[Object(l.jsx)(B,{photo:r}),Object(l.jsx)(z,{name:a,age:s,phone:i,email:c,text:n,abs:function(){return t({name:a,age:s,phone:i,email:c})}})]})}))})},Q=function(e){var t=e.abs;return Object(l.jsxs)("section",{className:"about",id:"about",children:[Object(l.jsx)(q,{abs:t}),Object(l.jsx)(A,{fill:"#202020"}),Object(l.jsx)(P.a,{className:"about__decor",params:{particles:{number:{value:50},size:{value:5}},interactivity:{events:{onhover:{enable:!0,mode:"grab"}}}}}),Object(l.jsx)("div",{className:"line"})]})},Y=function(e){var t=e.setActive;return Object(l.jsx)("button",{className:"modal__close",onClick:function(){return o(t)}})},G=function(e){var t=e.active,a=e.setActive,s=e.children;return Object(l.jsx)("div",{className:t?"modal active":"modal",onClick:function(){return o(a)},children:Object(l.jsxs)("div",{className:"modal__inner",onClick:function(e){return e.stopPropagation()},children:[Object(l.jsx)("div",{className:"modal__header",children:Object(l.jsx)(Y,{setActive:a})}),Object(l.jsx)("div",{className:"modal__body",children:s})]})})},X=function(e){var t=e.procent,a=e.name,s=e.color,i=e.active;return Object(l.jsxs)("div",{className:"about-modal__skill",children:[Object(l.jsxs)("div",{className:"about-modal__progress ".concat(s),children:[Object(l.jsx)("span",{className:"about-modal__progress-left",children:Object(l.jsx)("span",{className:i?"about-modal__progress-bar":""})}),Object(l.jsx)("span",{className:"about-modal__progress-right",children:Object(l.jsx)("span",{className:i?"about-modal__progress-bar":""})}),Object(l.jsx)("span",{className:"about-modal__progress-value",children:t})]}),Object(l.jsx)("span",{className:"about-modal__text",children:a})]})},Z=function(e){var t=e.active,a=e.data;return Object(l.jsxs)("div",{className:"about-modal",children:[Object(l.jsx)("h2",{className:"about-modal__title",children:"My skills"}),Object(l.jsxs)("div",{className:"about-modal__skills",children:[Object(l.jsx)(X,{procent:"90%",name:"HTML/CSS",color:"yellow",active:t}),Object(l.jsx)(X,{procent:"65%",name:"JavaScript",color:"blue",active:t}),Object(l.jsx)(X,{procent:"75%",name:"React/Redux",color:"red",active:t}),Object(l.jsx)(X,{procent:"80%",name:"TypeScript",color:"green",active:t})]}),Object(l.jsx)(J,{name:a.name,age:a.age,phone:a.phone,email:a.email})]})},$=function(e){var t=e.workCardData;return Object(l.jsxs)("div",{className:"work-modal",children:[Object(l.jsx)("h2",{className:"work-modal__title",children:null===t||void 0===t?void 0:t.title}),Object(l.jsxs)("div",{className:"work-modal__short-info",children:[Object(l.jsxs)("p",{className:"work-modal__info-text",children:["Client Name",Object(l.jsx)("span",{children:null===t||void 0===t?void 0:t.clientName})]}),Object(l.jsxs)("p",{className:"work-modal__info-text",children:["Project Value",Object(l.jsx)("span",{children:null===t||void 0===t?void 0:t.projectValue})]}),Object(l.jsxs)("p",{className:"work-modal__info-text",children:["Date",Object(l.jsx)("span",{children:null===t||void 0===t?void 0:t.date})]})]}),Object(l.jsxs)("div",{className:"work-modal__text-block",children:[Object(l.jsx)("p",{className:"work-modal__text-description",children:null===t||void 0===t?void 0:t.descriptionFirst}),Object(l.jsx)("p",{className:"work-modal__text-description",children:null===t||void 0===t?void 0:t.descriptionSecond})]}),Object(l.jsxs)("div",{className:"work-modal__images-block",children:[Object(l.jsx)("img",{src:null===t||void 0===t?void 0:t.exampleImageFirst,alt:"test",className:"work-modal__image"}),Object(l.jsx)("img",{src:null===t||void 0===t?void 0:t.exampleImageSecond,alt:"test",className:"work-modal__image"})]}),Object(l.jsxs)("div",{className:"work-modal__link-box",children:[Object(l.jsx)("p",{className:"work-modal__link-title",children:"Link"}),Object(l.jsx)("a",{className:"work-modal__link",href:null===t||void 0===t?void 0:t.link,children:null===t||void 0===t?void 0:t.link})]})]})},ee=function(e){var t=e.handleOpenWorkModal,a=e.handleSetWorkCardInfo,i=e.title,c=e.shortDescription,n=e.mainImage,o=Object(s.useState)(!1),d=Object(r.a)(o,2),m=d[0],j=d[1];return Object(l.jsxs)("div",{className:"works__card",onMouseEnter:function(){j(!0)},onMouseLeave:function(){j(!1)},children:[Object(l.jsx)("img",{src:n,alt:"test",className:"".concat(m?"works__card-image-opacity":""," works__card-image")}),Object(l.jsxs)("div",{className:"".concat(m?"works__card-info-active":"works__card-info-unactive"," works__card-info"),children:[Object(l.jsx)("p",{className:"works__card-title",children:i}),Object(l.jsx)("p",{className:"works__card-text",children:c}),Object(l.jsx)("button",{className:"works__card-button",onClick:function(){N(t),a()},children:"View Work"})]})]})},te=[{title:"Stellar Burgers",shortDescription:"Yandex Practicum Project",clientName:"-",projectValue:"-",date:"28 Oct 2021",descriptionFirst:"The idea of \u200b\u200bthe project is to create a web application for the fictional company Stellar Burgers, which is based on the sale of fast food",descriptionSecond:"A project created for the purpose of learning React. This project uses modern technologies such as React, Redux, WebSocket, TypeScript, React Roter, REST API.",mainImage:a.p+"static/media/Stellar Burgers.aff84fed.png",exampleImageFirst:a.p+"static/media/StellarBurgersExample1.8f4c088b.png",exampleImageSecond:a.p+"static/media/StellarBurgersExample2.26192ef7.png",link:"https://ramiltanker.github.io/react-burger/",id:1},{title:"QR-MENU",shortDescription:"QR-menu for Tino Pizza",clientName:"Tino Pizza",projectValue:"10.000 RUB",date:"10 Oct 2021",descriptionFirst:"The application was created to remove the traditional menu and replace it with a more modern counterpart. The application works by scanning a QR code with a phone camera.",descriptionSecond:"The application was created using technologies such as React, React Router, React Transition Group, Redux",mainImage:a.p+"static/media/QR-code-mainImage.571624fd.jpg",exampleImageFirst:a.p+"static/media/qrMenuFirstImage.7a9945cb.png",exampleImageSecond:a.p+"static/media/qrMenuSecondImage.a89bed87.png",link:"https://qr-menu-jhu5fqc95-ramiltanker.vercel.app/",id:2},{title:"My Korea",shortDescription:"My Korea for Education",clientName:"Private customer",projectValue:"20.000 RUB",date:"15 June 2021",descriptionFirst:"A project created to help students study in Korea. The site contains information about universities, grants and other information.",descriptionSecond:"The project is written using the React library in JavaScript.",mainImage:a.p+"static/media/my-korea.ea751386.jpg",exampleImageFirst:a.p+"static/media/myKoreaFirstImage.02315abb.png",exampleImageSecond:a.p+"static/media/myKoreaSecondImage.67488ea6.png",link:"https://ramiltanker.github.io/mykorea/",id:3},{title:"Timer",shortDescription:"Timer created with React",clientName:"-",projectValue:"-",date:"15 Dec 2021",descriptionFirst:"Application created for the purpose of practice.",descriptionSecond:"The app includes a timer and theme changer.",mainImage:a.p+"static/media/timerMainImage.58aa4d5c.png",exampleImageFirst:a.p+"static/media/timerFirstImage.bb952b6c.png",exampleImageSecond:a.p+"static/media/timerSecondImage.c7d7ab87.png",link:"https://ramiltanker.github.io/timer/",id:4},{title:"HANDS",shortDescription:"Treatment Center",clientName:"Private customer",projectValue:"40.000 RUB",date:"20 Feb 2022",descriptionFirst:"Website designed for a center that provides treatment services",descriptionSecond:"The site is written without a framework, in pure js using html markup and scss preprocessor",mainImage:a.p+"static/media/handsMainImage.8f52a159.png",exampleImageFirst:a.p+"static/media/handsFirstImage.19636d52.png",exampleImageSecond:a.p+"static/media/handsSecondImage.3ef4c81b.png",link:"https://xleevenx.github.io/123/",id:5}],ae=function(e){var t=e.handleOpenWorkModal,a=e.handleSetWorkCardInfo;return Object(l.jsx)("div",{className:"works__cards-container",children:te.map((function(e){var s=e.title,i=e.shortDescription,c=e.clientName,n=e.projectValue,r=e.date,o=e.descriptionFirst,d=e.descriptionSecond,m=e.mainImage,j=e.exampleImageFirst,p=e.exampleImageSecond,u=e.link,b=e.id,h={title:s,clientName:c,projectValue:n,date:r,descriptionFirst:o,descriptionSecond:d,exampleImageFirst:j,exampleImageSecond:p,link:u};return Object(l.jsx)(ee,{handleOpenWorkModal:t,handleSetWorkCardInfo:function(){return a(h)},title:s,shortDescription:i,clientName:c,projectValue:n,date:r,descriptionFirst:o,descriptionSecond:d,mainImage:m,exampleImageFirst:j,exampleImageSecond:p},b)}))})},se=function(e){var t=e.handleOpenWorkModal,a=e.handleSetWorkCardInfo;return Object(l.jsxs)("section",{className:"works",id:"projects",children:[Object(l.jsx)("h2",{className:"works__title",children:"Latest Project"}),Object(l.jsx)(ae,{handleOpenWorkModal:t,handleSetWorkCardInfo:a}),Object(l.jsx)(A,{fill:"#2a2a2a"})]})},ie=a(43),ce=function(e){var t=e.name,a=e.info,s=e.link,c=e.icon,n=i.a.useState(!1),o=Object(r.a)(n,2),d=o[0],m=o[1];return Object(l.jsxs)("div",{className:"skills__card",onMouseEnter:function(){m(!0)},onMouseLeave:function(){m(!1)},children:[Object(l.jsxs)("div",{className:"skills__image-container",children:[Object(l.jsxs)("div",{className:"".concat(d?"skills__dots-container-rotate":"skills__dots-container"," skills__dots-container"),children:[Object(l.jsx)("div",{className:"skills__dot-one"}),Object(l.jsx)("div",{className:"skills__dot-two"})]}),c]}),Object(l.jsxs)("div",{className:"skills__card-info",children:[Object(l.jsx)("p",{className:"skills__card-title",children:t}),Object(l.jsx)("p",{className:"skills__card-text",children:a})]}),Object(l.jsx)("a",{className:"skills__card-button",href:s,children:"READ MORE"})]})},ne=a(44),re=a(45),oe=a(109),le=a(110),de=[{id:0,name:"React",info:"React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.",link:"https://reactjs.org/docs/getting-started.html",icon:Object(l.jsx)(ne.b,{className:"skills__card-image"})},{id:1,name:"Redux",info:"Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.",link:"https://redux.js.org/",icon:Object(l.jsx)(re.a,{className:"skills__card-image"})},{id:2,name:"JavaScript",info:"JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.",link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",icon:Object(l.jsx)(ne.a,{className:"skills__card-image"})},{id:3,name:"CSS",info:"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",link:"https://en.wikipedia.org/wiki/CSS",icon:Object(l.jsx)(oe.a,{className:"skills__card-image"})},{id:4,name:"HTML",info:"The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.",link:"https://en.wikipedia.org/wiki/HTML",icon:Object(l.jsx)(le.a,{className:"skills__card-image"})},{id:5,name:"TypeScript",info:"TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript\u2019s features, and an additional layer on top of these: TypeScript\u2019s type system. For example, JavaScript provides language primitives like string and number, but it doesn\u2019t check that you\u2019ve consistently assigned these. TypeScript does.",link:"https://www.typescriptlang.org/docs/",icon:Object(l.jsx)(re.b,{className:"skills__card-image"})}],me=function(e){return Object(ie.a)(e),Object(l.jsx)("div",{className:"skills__cards-container",children:de.map((function(e){var t=e.id,a=e.name,s=e.info,i=e.link,c=e.icon;return Object(l.jsx)(ce,{name:a,info:s,link:i,icon:c},t)}))})},je=function(e){return Object(ie.a)(e),Object(l.jsxs)("section",{className:"skills",id:"skills",children:[Object(l.jsx)("h2",{className:"skills__title",children:"My Skills"}),Object(l.jsx)(me,{}),Object(l.jsx)(A,{fill:"#2a2a2a"})]})},pe=function(e){var t=e.textName,a=e.title,s=e.icon;return Object(l.jsxs)("div",{className:"contacts__card",children:[Object(l.jsx)("div",{className:"contacts__image-box",children:s}),Object(l.jsx)("p",{className:"contacts__title",children:a}),Object(l.jsx)("div",{className:"contacts__box",children:Object(l.jsx)("p",{className:"contacts__text",children:t})})]})},ue=a(111),be=a(112),he=a(113),xe=[{id:0,textName:"Kazakhstan, Taldykorgan",title:"Address",icon:Object(l.jsx)(ue.a,{className:"contacts__image"})},{id:1,textName:"ramilashrafulinfrontend@gmail.com",title:"Email",icon:Object(l.jsx)(be.a,{className:"contacts__image"})},{id:2,textName:"+7 (700) 487-01-80",title:"Phone",icon:Object(l.jsx)(he.a,{className:"contacts__image"})}],_e=function(){return Object(l.jsxs)("section",{className:"contacts",id:"contacts",children:[Object(l.jsx)("div",{className:"contacts__container",children:xe.map((function(e){var t=e.textName,a=e.title,s=e.icon,i=e.id;return Object(l.jsx)(pe,{textName:t,title:a,icon:s},i)}))}),Object(l.jsx)(A,{fill:"#202020"})]})},Oe=function(e){var t=e.socialLink,a=e.icon;return Object(l.jsx)("li",{className:"footer__li",children:Object(l.jsx)("a",{className:"footer__link",href:t,children:a})})},ge=a(114),fe=a(46),ve=[{id:0,name:"Ramil",socialLinks:[{id:0,socialLink:"https://www.instagram.com/ashrafulin_/?hl=ru",icon:Object(l.jsx)(ge.a,{className:"footer__icon"})},{id:1,socialLink:"https://t.me/niceguygg",icon:Object(l.jsx)(fe.a,{className:"footer__icon"})},{id:2,socialLink:"https://api.whatsapp.com/send?phone=77004870180&text=",icon:Object(l.jsx)(fe.b,{className:"footer__icon"})}]}],Ne=function(){return Object(l.jsxs)("footer",{className:"footer",id:"footer",children:[Object(l.jsx)(d,{logoText:"R"}),Object(l.jsx)("div",{className:"footer__wrap",children:ve.map((function(e){e.name;var t=e.socialLinks,a=e.id;return Object(l.jsx)("div",{className:"footer__box",children:Object(l.jsx)("ul",{className:"footer__list",children:t.map((function(e){var t=e.socialLink,a=e.icon,s=e.id;return Object(l.jsx)(Oe,{socialLink:t,icon:a},s)}))})},a)}))}),Object(l.jsx)("p",{className:"footer__text",children:"Follow and Contact me :)"})]})},ke=function(e){var t=e.title,a=e.time,s=e.description;return Object(l.jsxs)("div",{className:"experience__card",children:[Object(l.jsxs)("div",{className:"experience__box",children:[Object(l.jsx)("p",{className:"experience__proffession",children:t}),Object(l.jsx)("p",{className:"experience__time",children:a})]}),Object(l.jsx)("p",{className:"experience__description",children:s})]})},we=function(e){var t=e.lastExp;e.name;return Object(l.jsx)("div",{className:"experience__container",children:t.map((function(e){var t=e.id,a=e.title,s=e.time,i=e.description;return Object(l.jsx)(ke,{title:a,time:s,description:i},t)}))})},Se=[{id:0,name:"Ramil",lastExp:[{id:0,title:"Yandex Practicum",time:"2019-2021",description:"I have been studied at Yandex Practicum. I took two courses, a web developer and a react developer. I have been received two diplomas on completion of courses, and was also able to delve into the profession in detail and deeply, which allowed him to become a Junior developer."},{id:1,title:"Freelance platform fl.ru",time:"6 month",description:"I have been worked on a freelance platform. Gained experience in commercial development. I got the skills to communicate with customers, learned to read the terms of reference."},{id:2,title:"MindSet company",time:"3-4 month",description:"I have been worked as an intern at MindSet as a frontend developer intern. Participated in the development of the Start-Up project. Performed Team Lead tasks."}]}],ye=function(){return Object(l.jsxs)("section",{className:"experience",id:"experience",children:[Object(l.jsx)("h2",{className:"experience__title",children:"My Experience"}),Se.map((function(e){var t=e.id,a=e.lastExp,s=e.name;return Object(l.jsx)(we,{lastExp:a,name:s},t)})),Object(l.jsx)(A,{fill:"#202020"})]})},Ie=a(115),Me=function(e){var t=e.img,a=e.title,s=e.to;return Object(l.jsx)(g.Link,{className:"menu__card ",ignoreCancelEvents:!0,to:s,spy:!0,smooth:!0,offset:-100,children:Object(l.jsxs)("div",{className:"menu__link",children:[Object(l.jsx)("img",{src:t,alt:a,className:"menu__image"}),Object(l.jsx)("p",{className:"menu__text",children:a})]})})},Re=[{id:0,img:a.p+"static/media/header.1b66e5ed.png",title:"HOME",to:"home"},{id:1,img:a.p+"static/media/about.9410eb7d.png",title:"ABOUT",to:"about"},{id:2,img:a.p+"static/media/works.afc4f783.png",title:"PROJECTS",to:"projects"},{id:3,img:a.p+"static/media/experience.a58b6a2e.png",title:"EXPERIENCE",to:"experience"},{id:4,img:a.p+"static/media/skills.ebd9ee45.png",title:"SKILLS",to:"skills"},{id:5,img:a.p+"static/media/contacts.7dc3ebca.png",title:"CONTACTS",to:"contacts"}],Te=function(e){var t=e.isMenuActive,a=e.handleCloseBurgerMenu;return Object(l.jsxs)("section",{className:"".concat(t?"menu__active":""," menu"),children:[Object(l.jsx)("button",{className:"menu__close-button",onClick:a,children:Object(l.jsx)(Ie.a,{className:"menu__close-icon"})}),Object(l.jsx)("div",{className:"menu__wrapper",children:Re.map((function(e){var t=e.img,a=e.title,s=e.id,i=e.to;return Object(l.jsx)(Me,{img:t,title:a,to:i},s)}))})]})},Ce=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),a=t[0],i=t[1],c=Object(s.useState)({}),n=Object(r.a)(c,2),d=n[0],m=n[1],j=Object(s.useState)(!1),p=Object(r.a)(j,2),u=p[0],b=p[1],h=Object(s.useState)(),x=Object(r.a)(h,2),_=x[0],O=x[1],g=Object(s.useState)(!1),f=Object(r.a)(g,2),v=f[0],N=f[1];Object(s.useEffect)((function(){var e=function(e){"Escape"===e.key&&(o(i),o(b))};return document.addEventListener("keydown",(function(t){e(t)})),function(){document.removeEventListener("keydown",(function(t){e(t)}))}}),[]);return Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)(L,{handleOpenBurgerMenu:function(){N(!0)}}),Object(l.jsx)(Q,{abs:function(e){console.log(1),i(!0),m(e)}}),Object(l.jsx)(se,{handleOpenWorkModal:b,handleSetWorkCardInfo:function(e){O(e)}}),Object(l.jsx)(ye,{}),Object(l.jsx)(je,{}),Object(l.jsx)(_e,{}),Object(l.jsx)(Ne,{}),Object(l.jsx)(Te,{isMenuActive:v,handleCloseBurgerMenu:function(){N(!1)}}),Object(l.jsx)(G,{active:a,setActive:i,children:Object(l.jsx)(Z,{active:a,data:d})}),Object(l.jsx)(G,{active:u,setActive:b,children:Object(l.jsx)($,{workCardData:_})})]})};a(469),a(470);n.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(Ce,{})}),document.getElementById("root"))}},[[476,1,2]]]);
//# sourceMappingURL=main.2b6b8522.chunk.js.map