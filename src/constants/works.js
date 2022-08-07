import stellarBurgers from "../assets/images/Stellar Burgers.png";
import stellarBurgersExampleOne from "../assets/images/StellarBurgersExample1.png";
import StellarBurgersExampleTwo from "../assets/images/StellarBurgersExample2.png";

import qrCodeMainImage from "../assets/images/QR-code-mainImage.jpg";
import qrCodeFirstImage from "../assets/images/qrMenuFirstImage.png";
import qrCodeSecondImage from "../assets/images/qrMenuSecondImage.png";

import myKoreaMainImage from "../assets/images/my-korea.jpg";
import myKoreaFirstImage from "../assets/images/myKoreaFirstImage.png";
import myKoreaSecondImage from "../assets/images/myKoreaSecondImage.png";

import timerMainImage from "../assets/images/timerMainImage.png";
import timerFirstImage from "../assets/images/timerFirstImage.png";
import timerSecondImage from "../assets/images/timerSecondImage.png";

import handsMainImage from "../assets/images/handsMainImage.png";
import handsFirstImage from "../assets/images/handsFirstImage.png";
import handsSecondImage from "../assets/images/handsSecondImage.png";

import moonrobotsMainImage from "../assets/images/moonrobotsMainImage.png";
import moonrobotsFirstImage from "../assets/images/moonrobotsFirstImage.png";
import moonrobotsSecondImage from "../assets/images/moonrobotsSecondImage.png";

import moonRobotsMainImage from "../assets/images/moon-robots-game.png";
import comingSoonImage from "../assets/images/image-coming-soon.jpg";

const worksData = [
  {
    title: "Moon Robots",
    shortDescription: { en: "Web3 Game", ru: "Web3 Игра" },
    clientName: "-",
    projectValue: "-",
    date: { en: "Coming Soon", ru: "Скоро" },
    descriptionFirst: {
      en: "A project with a game map where players will be able to move around it.",
      ru: "Проект с игровой картой, по которой игроки смогут перемещаться по ней.",
    },
    descriptionSecond: {
      en: "The emergence of new NFS, such as earth, robots. The ability to craft new NFTs as well.",
      ru: "Появление новых NFS, таких как земля, роботы. Возможность создавать новые Nfs, а также.",
    },
    mainImage: moonRobotsMainImage,
    exampleImageFirst: comingSoonImage,
    exampleImageSecond: comingSoonImage,
    link: "/",
    id: 7,
  },
  {
    title: "Moon Robots",
    shortDescription: { en: "Web3.0 NFT Game", ru: "Web3.0 NFT Игра" },
    clientName: "-",
    projectValue: "-",
    date: { en: "20 Apr 2022", ru: "20 Апр 2022" },
    descriptionFirst: {
      en: "Moon Robots is an upcoming cross-chain NFT DeFi-powered Strategy/RPG P2E game that launches on Harmony blockchain in Q2 2022.",
      ru: "Moon Robots - это предстоящая кросс-цепная стратегическая / RPG игра для PS2 на базе NFT DeFi, которая выйдет на блокчейне Harmony во 2 квартале 2022 года.",
    },
    descriptionSecond: {
      en: "The network chosen for the launch is fast, secure and efficient, which will enable smooth and trustless experience for the players.",
      ru: "Сеть, выбранная для запуска, является быстрой, безопасной и эффективной, что обеспечит бесперебойную и надежную работу игроков.",
    },
    mainImage: moonrobotsMainImage,
    exampleImageFirst: moonrobotsFirstImage,
    exampleImageSecond: moonrobotsSecondImage,
    link: "https://moonrobots.one/",
    id: 6,
  },
  {
    title: "Stellar Burgers",
    shortDescription: {
      en: "Yandex Practicum Project",
      ru: "Проект Яндекс Практикума",
    },
    clientName: "-",
    projectValue: "-",
    date: { en: "28 Oct 2021", ru: "28 Окт 2021" },
    descriptionFirst: {
      en: "The idea of ​​the project is to create a web application for the fictional company Stellar Burgers, which is based on the sale of fast food",
      ru: "Идея проекта заключается в создании веб-приложения для вымышленной компании Stellar Burgers, которая основана на продаже фаст-фуда",
    },
    descriptionSecond: {
      en: "A project created for the purpose of learning React. This project uses modern technologies such as React, Redux, WebSocket, TypeScript, React Roter, REST API.",
      ru: "Проект, созданный с целью изучения React. В этом проекте используются современные технологии, такие как React, Redux, WebSocket, TypeScript, React Roter, REST API.",
    },
    mainImage: stellarBurgers,
    exampleImageFirst: stellarBurgersExampleOne,
    exampleImageSecond: StellarBurgersExampleTwo,
    link: "https://ramiltanker.github.io/react-burger/",
    id: 1,
  },
  {
    title: "QR-MENU",
    shortDescription: {
      en: "QR-menu for Tino Pizza",
      ru: "QR-menu для Tino Pizza",
    },
    clientName: "Tino Pizza",
    projectValue: "10.000 RUB",
    date: { en: "10 Oct 2021", ru: "10 Окт 2021" },
    descriptionFirst: {
      en: "The application was created to remove the traditional menu and replace it with a more modern counterpart. The application works by scanning a QR code with a phone camera.",
      ru: "Приложение было создано для удаления традиционного меню и замены его более современным аналогом. Приложение работает путем сканирования QR-кода с помощью камеры телефона.",
    },
    descriptionSecond: {
      en: "The application was created using technologies such as React, React Router, React Transition Group, Redux",
      ru: "Приложение было создано с использованием таких технологий, как React, React Router, React Transition Group, Redux",
    },
    mainImage: qrCodeMainImage,
    exampleImageFirst: qrCodeFirstImage,
    exampleImageSecond: qrCodeSecondImage,
    link: "https://qr-menu-jhu5fqc95-ramiltanker.vercel.app/",
    id: 2,
  },
  {
    title: "My Korea",
    shortDescription: {
      en: "My Korea for Education",
      ru: "My Korea for Education",
    },
    clientName: "Private customer",
    projectValue: "20.000 RUB",
    date: { en: "15 June 2021", ru: "15 Июня 2021" },
    descriptionFirst: {
      en: "A project created to help students study in Korea. The site contains information about universities, grants and other information.",
      ru: "Проект, созданный для того, чтобы помочь студентам учиться в Корее. Сайт содержит информацию об университетах, грантах и другую информацию.",
    },
    descriptionSecond: {
      en: "The project is written using the React library in JavaScript.",
      ru: "Проект написан с использованием библиотеки React на JavaScript.",
    },
    mainImage: myKoreaMainImage,
    exampleImageFirst: myKoreaFirstImage,
    exampleImageSecond: myKoreaSecondImage,
    link: "https://ramiltanker.github.io/mykorea/",
    id: 3,
  },
  {
    title: "Timer",
    shortDescription: {
      en: "Timer created with React",
      ru: "Таймер написаный с использованием React",
    },
    clientName: "-",
    projectValue: "-",
    date: { en: "15 Dec 2021", ru: "15 Дек 2021" },
    descriptionFirst: {
      en: "Application created for the purpose of practice.",
      ru: "Приложение, созданное с целью практики.",
    },
    descriptionSecond: {
      en: "The app includes a timer and theme changer.",
      ru: "Приложение включает в себя таймер и смену темы.",
    },
    mainImage: timerMainImage,
    exampleImageFirst: timerFirstImage,
    exampleImageSecond: timerSecondImage,
    link: "https://ramiltanker.github.io/timer/",
    id: 4,
  },
  {
    title: "HANDS",
    shortDescription: { en: "Treatment Center", ru: "Центр Лечения" },
    clientName: "Private customer",
    projectValue: "40.000 RUB",
    date: { en: "20 Feb 2022", ru: "20 Фев 2022" },
    descriptionFirst: {
      en: "Website designed for a center that provides treatment services",
      ru: "Веб-сайт, предназначенный для центра, предоставляющего лечебные услуги",
    },
    descriptionSecond: {
      en: "The site is written without a framework, in pure js using html markup and scss preprocessor",
      ru: "Сайт написан без фреймворка, на чистом js с использованием html-разметки и css-препроцессора",
    },
    mainImage: handsMainImage,
    exampleImageFirst: handsFirstImage,
    exampleImageSecond: handsSecondImage,
    link: "https://xleevenx.github.io/123/",
    id: 5,
  },
];

export default worksData;
