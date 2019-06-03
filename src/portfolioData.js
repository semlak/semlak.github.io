import shortid from 'shortid';
// import { faAward, faGraduationCap, faLinkedinIn, faGithubAlt, faStackOverflow, faCode, faTwitter } from '@fortawesome/free-solid-svg-icons';
import { faAward, faGraduationCap, faCode } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithubAlt, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const social = [
  {
    url: "https://www.linkedin.com/in/joseph-semlak/",
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
    text: 'I am currently an Associate Software Engineer at NextEra Analytics working on a team that develops Serverless Angular/Ngrx web applications run from AWS lambdas running, which we implement for Python and PostgreSQL. I also enjoy working on React-Redux and Firebase applications.',
  },
  {
    text: 'I completed my M.S. in Computer Science at the University of Minnesota in 2016 and my Full-Stack Web Development Certificate with the University of Minnesota Coding Bootcamp in 2018.',
  },
  // {
  //   text: "I am currently focused in building Full-Stack JavaScript MERN applications (MongoDB/Express/React.js/Node) with functional front-end interfaces, but I'm also comfortable with a variety of other technologies, including MySQL, Firebase, Bootstrap, Material-UI, Handlebars, and jQuery.",
  // }
];

const educationData = [
  {
    // fa: "fas fa-award",
    fa: faAward,
    award: "Full-Stack Web Development Certificate",
    // award: "Full-Stack Web Dev Cert",
    school: "University of Minnesota Coding Bootcamp ",
    year: 2018,
    link: 'https://umn.credly.com/member-badges/14980968',
  },
  {
    // fa: "fas fa-graduation-cap",
    fa: faGraduationCap,
    award: "M.S. in Computer Science",
    school: "University of Minnesota Twin Cities",
    year: "2016",
  },
  {
    // fa: "fas fa-graduation-cap",
    fa: faGraduationCap,
    award: "B.S. in Physics",
    school: "University of Illinois at Urbana-Champaign",
    year: "2004",
  },
];


const skillSets = [
  { items: ['JavaScript', 'Node.js', 'Express'], skillLevel: 96, },
  { items: ['Angular/Rxjs/Ngrx'], skillLevel: 96, },
  { items: ['Python'], skillLevel: 96, },
  { items: ['AWS Lambda Serverless Environments'], skillLevel: 96, },
  { items: ['React.js'], skillLevel: 96, },
  { items: ['HTML5', 'CSS3', 'Bootstrap 4'], skillLevel: 90, },
  { items: ['MongoDB', 'MySQL'], skillLevel: 96, },
];


const workData = [
  {
    title: "Associate Software Engineer",
    locationHREF: "http://windlogics.com/",
    location: "NextEra Analytics (formerly WindLogics)",
    workDuration: "Mar 2019 - Current",
    descriptions: [
      {
        text: "Develop Serverless Web Applications for modeling and forecasting energy usage to allow the company to provide competitive and diverse energy solutions to its customers.",
      },
      {
        text: "Implemented with technologies including Angular, Ngrx, Python, and PostgreSQL, running as a serverless application with over 100 AWS Lambdas.",
      },
    ],
  },
  {
    title: "Anti-Money Laundering Compliance Consultant",
    locationHREF: "https://wwww.usbank.com",
    location: "US Bank",
    workDuration: "Jan 2017 - Dec 2018",
    descriptions: [
      {
        text: "Developed and maintained VBA Macros in Excel and Word for department use to automate tasks, read, parse, and cleanse data from multiple sources and create reports.",
      },
      {
        text: "Gathered transaction details, customer records, third-party information and analyzed transactional data to formulate decision for outcome of investigations.",
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
  longDescriptionOld: "A full-stack MERN application for students completing international internships to easily keep records of their internship in one location. App includes the ability to record daily activities as journal entries, photo storage, expense tracking, and linking these records to specified internship requirements. Technologies include Passport.js for secure authentication, Material-UI for Front-end components, Firebase cloud storage for photos, and Chartist for chart data visualization of expenses. (Firebase is used partially due to fact that free heroku deployments do not support having the persistence storage needed for photo storage.",
  longDescription: "A full-stack MERN application for students completing international internships to easily keep records of their internship in one location. App includes the ability to record daily activities as journal entries, photo storage, expense tracking, and linking these records to specified internship requirements.",
  tech: [
    "MERN Stack: (MongoDB, Express, React.js, and Node.js)",
    "*react-router*",
    // "*Passport.js*: for secure authentication",
    "*Passport.js*",
    '*Material-UI*',
    // '*Firebase*: for cloud storage of photos',
    '*Firebase*',
    '*Chartist.js*',
  ],
  visible: true,
  tags: ['react', 'fullstack', 'material-ui', 'mongo', 'mern', 'passport', 'node.js', 'express'],
}, {
  src: images['fcc-voting-app-flux-herokuapp-com-chart.png'],
  imageAlt: "Voting/Polling App deployed on Heroku",
  deployment: "https://fcc-voting-app-flux.herokuapp.com/",
  repository: "https://github.com/semlak/fcc_voting_app_flux",
  title: "Voting/Polling App deployed on Heroku",
  description: "Voting Application where you can create Polls and vote on them.",
  longDescriptionOld: "A full-stack MERN Application where you can create Polls and vote on them. Also uses Passport.js, Recharts.js, React Router, React-bootstrap, and a Flux Architecture.",
  longDescription: "A full-stack MERN Application where you can create Polls and vote on them. The Uni-directional data flow is handled with a Flux Architecture (implemented without Redux).",
  tech: [
    // 'MERN Stack',
    "MERN Stack: (MongoDB, Express, React.js, and Node.js)",
    'Flux Architecture: for front-end handling actions and unidirectional data flow',
    '*react-router*',
    '*Passport.js*',
    'Bootstrap 3/react-bootstrap: for front-end components',
    '*Recharts.js*',
  ],
  tags: ['react', 'fullstack', 'bootstrap', 'mongo', 'mern', 'passport', 'node.js', 'express'],
  visible: true,
}, {
  src: images['rock-paper-scissors1.png'],
  imageAlt: 'FireRPS',
  deployment: 'https://semlak.github.io/rock-paper-scissors-firebase-react-redux/app',
  repository: 'https://github.com/semlak/rock-paper-scissors-firebase-react-redux/',
  // title: "Multiplayer Rock-Paper-Scissors",
  title: 'FireRPS: A multiplayer Rock-Paper-Scissors Game built with React.js, Redux.js, and Firebase',
  description: 'Rock-Paper-Scissors',
  longDescription: 'A multiplayer Rock-Paper-Scissors game built with React.js, Redux.js, and Firebase. Testing through jest/mocha. Features secure user authentication, saved game states on browser re-loading, and running score keeping.',
  tech: [
    'React.js: for front-end components',
    'Redux.js: for managing application state, front-end actions and unidirectional data flow',
    '*react-router*',
    '*firebaseForAuthentication*',
    'Authentication via email/password login or Github/Google OAuth (through Firebase)',
    'Bootstrap 4/*react-strap*',
    'jest/mocha: for testing',
    'react-avatar: for user avatar creation/display',
    '*react-thunk*: Redux middleware for handling async action creators and side effects',
  ],
  visible: true,
}, {
  src: images['rock-paper-scissors1.png'],
  imageAlt: "Multiplayer Rock-Paper-Scissors Game deployed on GitHub Pages",
  deployment: "https://semlak.github.io/multiplayer-rock-paper-scissors-firebase/",
  repository: "https://github.com/semlak/multiplayer-rock-paper-scissors-firebase/",
  title: "Multiplayer Rock-Paper-Scissors",
  description: "Rock-Paper-Scissors",
  longDescription: "A Firebase application implementing a multiplayer Rock-Paper-Scissors Game. Features secure user authentication, saved game states on browser re-loading, and running score keeping.",
  tech: [
    '*firebaseForAuthentication*',
    'Authentication via either a email/password login or Github/Google OAuth (through Firebase)',
    '*Bootstrap4*',
    'jQuery',
  ],
  visible: false,
}, {
  src: images['consoleHangman.gif'],
  imageAlt: 'Console Hangman Game',
  repository: 'https://github.com/semlak/consoleHangman',
  title: 'Console Hangman Game',
  longDescription: 'A hangman game for the Node.js console terminal. The hangman words are taken from Tolkien\'s Legendarium. Note that the application does not actually show a pictograph of the classic hangman. However, the game is graphical console game and includes a hint feature for each word.',
  tech: [
    "*inquirer*",
    "*chalk*",
    "*figlet*",
    "*boxen*",
  ],
  description: "Console Hangman",
  visible: true,
}, {
  src: images['clicky.png'],
  imageAlt: "React-based Memory Game",
  deployment: "https://semlak.github.io/react-memory-game",
  repository: "https://github.com/semlak/react-memory-game",
  longDescription: "A Front-end application built with React.js, implementing a memory game with UI components, which manage component state and respond to user events.",
  title: "React.js Memory Game",
  description: "A Memory Game built with React.JS",
  visible: true,
}, {
  src: images['giphy-app.png'],
  imageAlt: "My Giphy App",
  deployment: "https://semlak.github.io/my-giphy-app/",
  repository: "https://github.com/semlak/my-giphy-app",
  title: "My Giphy App",
  description: "My Giphy App",
  longDescription: "A front-end application using jQuery/Bootstrap/Ajax to run and view searches through Giphy.com",
  visible: true,
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

const techData = {
  "react-router": { url: 'https://reacttraining.com/react-router/', purpose: 'for client-side routing' },
  "Passport.js": { url: 'http://www.passportjs.org/', purpose: 'for secure authentication' },
  'Recharts.js': { url: 'http://recharts.org', purpose: 'for chart data visualizations of poll results' },
  inquirer: { url: 'https://github.com/SBoudrias/Inquirer.js/', purpose: 'for receiving user input' },
  chalk: { url: 'https://www.npmjs.com/package/chalk', purpose: "for coloring and formatting of console text" },
  figlet: { url: 'https://www.npmjs.com/package/figlet', purpose: "for splash screen text" },
  boxen: { url: 'https://www.npmjs.com/package/boxen', purpose: "for adding boxes to application" },
  Firebase: { url: 'https://firebase.google.com/', purpose: 'for cloud storage of photos', name: "Firebase" },
  firebaseForAuthentication: { url: 'https://firebase.google.com/', purpose: 'provides database and authentication', name: "Firebase" },
  'react-strap': { url: 'https://reactstrap.github.io/', name: 'react-strap', purpose: 'Front-end CSS framework with React Components' },
  Bootstrap4: { url: 'https://getbootstrap.com/docs/4', },
  'Chartist.js': { url: 'https://gionkunz.github.io/chartist-js/', purpose: 'for chart visualizations of expenses' },
  'Material-UI': { url: 'https://material-ui.com/', purpose: 'Front-end library of React components that implement Google\'s Material Design.' },
};

let data = {
  location: 'Minneapolis, US',
  phoneNumber: '217-417-5616',
  emailObj: ['91', '12', 'moc', '12', 'liamg', '34', '82', 'kalmes', '56'],
  email: null,
  emailHeaders: {
    subject: 'Question from the website',
  },
  portfolio: 'https://semlak.github.io',
  resumeFilePath: './assets/pdfs/resume.pdf',
  skillSets,
  workData,
  educationData,
  aboutMeParagraphs,
  projectItems,
  techData,
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

