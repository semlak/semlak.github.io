import shortid from 'shortid';

const data = [{
  src: "./assets/images/portfolio/internationalIntern.png",
  imageAlt: "International Intern",
  deployment: "https://international-intern.herokuapp.com/",
  repository: "http://github.com/semlak/project-three",
  title: "International Intern",
  description: "International Intern",
  longDescription: "A full stack MERN application for students completing international internships to easily keep records of their internship in one location. App includes the ability to record daily activities as journal entries, photo storage, expense tracking, and linking these records to specified internship requirements. Technologies include Passport.js for secure authentication, Material-UI for Front-end components, Firebase cloud storage for phote storage, and Chartist for chart data visualization of expenses. (Firebase is used partially due to fact that free heroku deployments do not support having the persistence storage needed for photo storage.",
  tags: ['react', 'fullstack', 'material-ui', 'mongo', 'mern', 'passport', 'node.js', 'express'],
}, {
  src: "./assets/images/portfolio/fcc-voting-app-flux-herokuapp-com-chart.png",
  imageAlt: "Voting/Polling App deployed on Heroku",
  deployment: "https://fcc-voting-app-flux.herokuapp.com/",
  repository: "https://github.com/semlak/fcc_voting_app_flux",
  title: "Voting/Polling App deployed on Heroku",
  description: "Voting Applicationto where you can create Polls and vote on them.",
  longDescription: "Voting Applicationto where you can create Polls and vote on them. Implemented with as a MERN Application (MongoDB/Express/React.js/Node.js). Also uses Passport.js, Recharts.js, React Router, React-bootstrap, and a Flux Architecture",
  tags: ['react', 'fullstack', 'bootstrap', 'mongo', 'mern', 'passport', 'node.js', 'express'],
}, {
  src: "./assets/images/portfolio/clicky.png",
  imageAlt: "Burger Ordering App",
  deployment: "https://semlak.github.io/react-memory-game",
  repository: "https://github.com/semlak/react-memory-game",
  longDescription: "A Front-end application built with React.js, implementing a memory game with UI components, which manage component state and respond to user events.",
  title: "ReactJS Memory Game",
  description: "ReactJS Memory Game",
}, {
  src: "./assets/images/portfolio/rock-paper-scissors1.png",
  imageAlt: "Multiplayer Rock-Paper-Scissors Game deployed on GitHub Pages",
  deployment: "https://semlak.github.io/RPS-Multiplayer/",
  repository: "https://github.com/semlak/RPS-Multiplayer",
  title: "Multiplayer Rock-Paper-Scissors",
  description: "Rock-Paper-Scissors",
  longDescription: "A Firebase application implementating a Mutli-Player Rock-Paper-Scissors Game. Features secure user authentication, saved game states on browser re-loading, and running score keeping.",
}, {
  src: "./assets/images/portfolio/giphy-app.png",
  imageAlt: "MyGiphy App",
  deployment: "https://semlak.github.io/my-giphy-app",
  repository: "https://github.com/semlak/my-giphy-app",
  title: "MyGiphy App",
  description: "MyGiphy App",
  longDescription: "A front-end application using jQuery/Bootstrap/Ajax calles to run and view searches through Giphy.com",
}, {
  src: "./assets/images/portfolio/consoleHangman.png",
  imageAlt: "Console Hangman Game",
  deployment: "https://github.com/semlak/consoleHangman",
  title: "Console Hangman Game",
  description: "Console Hangman",
}, {
  src: "./assets/images/portfolio/mockAmazon.png",
  imageAlt: "MySQL MockAmazon App",
  // deployment: "https://github.com/semlak/mockAmazonDB",
  repository: "https://github.com/semlak/mockAmazonDB",
  title: "MySQL Mock Amazon App",
  description: "MySQL Mock Amazon App",
  tags: ['node.js', 'backend', 'mysql', 'ORM', 'inquirer', 'command-line'],
}, {
  src: "./assets/images/portfolio/liri.png",
  imageAlt: "LIRI - A command-line Language Interpretation and Recognition Interface",
  deployment: "https://github.com/semlak/liri",
  title: "LIRI - A command-line Language Interpretation and Recognition Interface",
  description: "LIRI",
}, {
  src: "./assets/images/portfolio/fcc-tic-tac-toe.png",
  imageAlt: "Tic-Tac-Toe Game",
  deployment: "https://codepen.io/semlak/full/VevbdZ/",
  title: "Tic-Tac-Toe Game on Codepen",
  description: "Tic-Tac-Toe Game",
}, {
  src: "./assets/images/portfolio/fcc-weather-app.png",
  imageAlt: "Weather App",
  deployment: "https://codepen.io/semlak/full/ojKbBg",
  title: "Weather App on Codepen",
  description: "Weather App",
}].map(project => Object.assign({ id: shortid.generate() }, project));


// data.forEach(project => project.id = shortid.generate());
// data = data.map(project => Object.assign({id: shortid.generate()}, project));

export default data;
