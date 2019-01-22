import shortid from 'shortid';
// import { faAward, faGraduationCap, faLinkedinIn, faGithubAlt, faStackOverflow, faCode, faTwitter } from '@fortawesome/free-solid-svg-icons';
import { faAward, faGraduationCap, faCode } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithubAlt, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const social = [
  {
    url: "https://www.linkedin.com/in/joseph-semlak-ba829898/",
    // fa: "fab fa-linkedin-in",
    fa: faLinkedinIn,
  },
  {
    url: "https://github.com/semlak",
    // fa: "fab fa-github-alt",
    fa: faGithubAlt,
  },
  {
    url: "https://stackexchange.com/users/3880192/joseph",
    // fa: "fab fa-stack-overflow",
    fa: faStackOverflow,
  },
  {
    url: "https://app.codesignal.com/profile/joseph_s60",
    // fa: "fas fa-code",
    fa: faCode,
  },
  {
    url: "https://twitter.com/joseph_semlak",
    // fa: "fab fa-twitter",
    fa: faTwitter,
  },
].map(item => ({ ...item, id: shortid.generate() }));


const aboutMeParagraphs = [
  {
    text: "In May of 2018, I completed the University of Minnesota Full-Stack Javascript Coding Bootcamp, and I am currently looking for work as a full-stack JavaScript developer.",
  },
  {
    text: "I am currently focused in building Full-Stack JavaScript MERN applications (MongoDB/Express/React.js/Node) with functional front-end interfaces, but I'm also comfortable with a variety of other technologies, including MySQL, Firebase, Bootstrap, Material-UI, Handlebars, and jQuery.",
  }
];

const educationData = [
  {
    // fa: "fas fa-award",
    fa: faAward,
    award: "Full-Stack Web Development Certificate",
    // award: "Full-Stack Web Dev Cert",
    school: "University of Minnesota Twin Cities",
    year: 2018,
  },
  {
    // fa: "fas fa-graduation-cap",
    fa: faGraduationCap,
    award: "MS Computer Science",
    school: "University of Minnesota Twin Cities",
    year: "2016",
  },
  {
    // fa: "fas fa-graduation-cap",
    fa: faGraduationCap,
    award: "BS Physics",
    school: "University of Illinois at Urbana-Champaign",
    year: "2004",
  },
];


const skillSets = [
  { items: ['JavaScript', 'Node.js', 'Express'], skillLevel: 96, },
  { items: ['React.js'], skillLevel: 96, },
  { items: ['HTML5', 'CSS3', 'Bootstrap 4'], skillLevel: 90, },
  { items: ['MongoDB', 'MySQL'], skillLevel: 96, },
];


const workData = [
  {
    title: "Anti-Money Laundering Compliance Consultant",
    locationHREF: "https://wwww.usbank.com",
    location: "US Bank",
    workDuration: "Jan 2017 - Present",
    descriptions: [
      {
        text: "Develop and maintain VBA Macros in Excel and Word for department use to automate tasks, read, parse, and cleanse data from multiple sources, create reports.",
      },
      {
        text: "Gather transaction details, customer records, third-party information and analyze transactional data to formulate decision for outcome of investigations.",
      },
    ],
  },
  {
    title: "Anti-Money Laundering Compliance Consultant",
    locationHREF: "https://wwww.bremer.com",
    location: "Bremer Bank",
    workDuration: "May 2015 - Oct 2015",
    descriptions: [
      {
        text: "Worked independently to clear a large backlog of Anti-Money Laundering alerts.",
      },
      {
        text: "Worked with specialists and investigative staff to complete written analysis and investigative reports for completing accurate and timely Suspicious Activity Reports.",
      },
    ],
  },
  {
    title: "Anti-Money Laundering Compliance Investigator",
    locationHREF: "https://wwww.tcfbank.com",
    location: "TCF National Bank",
    workDuration: "Jan 2008 - Mar 2015",
    descriptions: [
      {
        text: "Developed VBA scripts in Word and Excel to assist in creation of spreadsheets for common scenarios, including VLOOKUPS, creation of pivot tables, data cleansing and parsing.",
      },
      {
        text: "Wrote 20-30 three-page Suspicious Activity Reports per month, requiring strict attention to detail and clarity, timely completion, and following specific guidelines.",
      },
    ],
  },
];


// for dynamically importing images, used information at https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
const importAll = (r) => {
  const images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
};

const images = importAll(require.context('./images/portfolio', false, /\.(png|jpe?g|svg|gif)$/));

const projectItems = [{
  src: images['internationalIntern.png'],
  imageAlt: "International Intern",
  deployment: "https://international-intern.herokuapp.com/",
  repository: "http://github.com/semlak/project-three",
  title: "International Intern",
  description: "International Intern",
  longDescription: "A full stack MERN application for students completing international internships to easily keep records of their internship in one location. App includes the ability to record daily activities as journal entries, photo storage, expense tracking, and linking these records to specified internship requirements. Technologies include Passport.js for secure authentication, Material-UI for Front-end components, Firebase cloud storage for phote storage, and Chartist for chart data visualization of expenses. (Firebase is used partially due to fact that free heroku deployments do not support having the persistence storage needed for photo storage.",
  tags: ['react', 'fullstack', 'material-ui', 'mongo', 'mern', 'passport', 'node.js', 'express'],
}, {
  src: images['fcc-voting-app-flux-herokuapp-com-chart.png'],
  imageAlt: "Voting/Polling App deployed on Heroku",
  deployment: "https://fcc-voting-app-flux.herokuapp.com/",
  repository: "https://github.com/semlak/fcc_voting_app_flux",
  title: "Voting/Polling App deployed on Heroku",
  description: "Voting Applicationto where you can create Polls and vote on them.",
  longDescription: "Voting Applicationto where you can create Polls and vote on them. Implemented with as a MERN Application (MongoDB/Express/React.js/Node.js). Also uses Passport.js, Recharts.js, React Router, React-bootstrap, and a Flux Architecture",
  tags: ['react', 'fullstack', 'bootstrap', 'mongo', 'mern', 'passport', 'node.js', 'express'],
}, {
  src: images['clicky.png'],
  imageAlt: "Burger Ordering App",
  deployment: "https://semlak.github.io/react-memory-game",
  repository: "https://github.com/semlak/react-memory-game",
  longDescription: "A Front-end application built with React.js, implementing a memory game with UI components, which manage component state and respond to user events.",
  title: "ReactJS Memory Game",
  description: "ReactJS Memory Game",
}, {
  src: images['rock-paper-scissors1.png'],
  imageAlt: "Multiplayer Rock-Paper-Scissors Game deployed on GitHub Pages",
  deployment: "https://semlak.github.io/multiplayer-rock-paper-scissors-firebase/index.html",
  repository: "https://semlak.github.io/multiplayer-rock-paper-scissors-firebase/",
  title: "Multiplayer Rock-Paper-Scissors",
  description: "Rock-Paper-Scissors",
  longDescription: "A Firebase application implementating a Mutli-Player Rock-Paper-Scissors Game. Features secure user authentication, saved game states on browser re-loading, and running score keeping.",
}, {
  src: images['giphy-app.png'],
  imageAlt: "MyGiphy App",
  deployment: "https://semlak.github.io/my-giphy-app/index.html",
  repository: "https://github.com/semlak/my-giphy-app",
  title: "MyGiphy App",
  description: "MyGiphy App",
  longDescription: "A front-end application using jQuery/Bootstrap/Ajax calles to run and view searches through Giphy.com",
}, {
  src: images['consoleHangman.gif'],
  imageAlt: "Console Hangman Game",
  repository: "https://github.com/semlak/consoleHangman",
  title: "Console Hangman Game",
  longDescription: "A hangman game for the Node.js console terminal.",
  description: "Console Hangman",
}, {
  src: images['mockAmazon.png'],
  imageAlt: "MySQL MockAmazon App",
  // deployment: "https://github.com/semlak/mockAmazonDB",
  repository: "https://github.com/semlak/mockAmazonDB",
  title: "MySQL Mock Amazon App",
  description: "MySQL Mock Amazon App",
  tags: ['node.js', 'backend', 'mysql', 'ORM', 'inquirer', 'command-line'],
}, {
  src: images['liri.png'],
  imageAlt: "LIRI - A command-line Language Interpretation and Recognition Interface",
  deployment: "https://github.com/semlak/liri",
  title: "LIRI - A command-line Language Interpretation and Recognition Interface",
  description: "LIRI",
}, {
  src: images['fcc-tic-tac-toe.png'],
  imageAlt: "Tic-Tac-Toe Game",
  deployment: "https://codepen.io/semlak/full/VevbdZ/",
  title: "Tic-Tac-Toe Game on Codepen",
  description: "Tic-Tac-Toe Game",
}, {
  src: images['fcc-weather-app.png'],
  imageAlt: "Weather App",
  deployment: "https://codepen.io/semlak/full/ojKbBg",
  title: "Weather App on Codepen",
  description: "Weather App",
}];

let data = {
  location: 'Mineapolis, US',
  phoneNumber: '217-417-5616',
  emailObj: ['91', '12', 'moc', '12', 'liamg', '34', '82', 'kalmes', '56'],
  email: null,
  emailHeaders: {
    subject: 'Question from the website',
  },
  portfolio: 'https://semlak.github.io',
  resumeFilePath: './assets/pdfs/blue-creative-resume.pdf',
  skillSets,
  workData,
  educationData,
  aboutMeParagraphs,
  projectItems,
};

const rev = (arr) => { const a1 = arr; a1.reverse(); return a1; };

const deObvEmail = (obv) => {
  const arr = (
    obv
      .filter(e => e.match(/^[a-z._]{1,}$/))
      .map(e => rev(e.split("")).join(""))
  );
  return [arr[2], "@", arr[1], ".", arr[0]].join("");
};

data = { ...data, email: deObvEmail(data.emailObj) };

const addIDs = (appData) => {
  if (typeof appData !== 'object') {
    return appData;
  }
  else if (Array.isArray(appData)) {
    return appData.map(e => addIDs(e));
  }
  else {
    // let newData = addIDs(appData);
    const newData = appData;
    Object.keys(appData).forEach((key) => {
      newData[key] = addIDs(appData[key]);
    });
    return { ...newData, id: shortid.generate() };
  }
};

const dataWithIDs = addIDs(data);
export default dataWithIDs;

