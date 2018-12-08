import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import shortid from 'shortid';
// import PropTypes from 'prop-types';

import AboutMe from './AboutMe';
import Projects from './Projects';
import Work from './Work';
import Github from './Github';

import Info from './Info';
import Education from './Education';
import Skills from './Skills';
import ResumeModal from './ResumeModal';


// Container.propTypes = {
//   fluid:  PropTypes.bool
//   // applies .container-fluid class
// }
const aboutMeParagraphs = [
  {
    text: "In May of 2018, I completed the University of Minnesota Full-Stack Javascript Coding Bootcamp, and I am currently looking for a job as a full-stack JavaScript developer.",
  },
  {
    text: "I am currently focused in building MERN-stack applications (MongoDB/Express/React.js/Node), but I'm also comfortable with a variety of other technologies, including MySQL, Firebase, Bootstrap, Material-UI, Handlebars, and jQuery.",
  }
];

const educationData = [
  {
    fa: "fas fa-award",
    award: "Full-Stack Web Development Certificate",
    // award: "Full-Stack Web Dev Cert",
    school: "University of Minnesota Twin Cities",
    year: 2018,
  },
  {
    fa: "fas fa-graduation-cap",
    award: "MS Computer Science",
    school: "University of Minnesota Twin Cities",
    year: "2016",
  },
  {
    fa: "fas fa-graduation-cap",
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

data = addIDs(data);
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeModalIsOpen: false,
    };
  }

  toggleResumeModal = (e) => {
    if (e) e.preventDefault();
    this.setState({ resumeModalIsOpen: !this.state.resumeModalIsOpen });
  }

  render() {
    return (
      <Container className="sections-wrapper">
        {/* <Education data={data.educationData} /> */}
        <Row>
          <Col lg="8" sm="12" className="primary">
            {/* <Education /> */}
            <AboutMe paragraphs={data.aboutMeParagraphs} />
            <Projects />
            <Work data={data.workData} />
          </Col>
          <Col lg="4" sm="12" className="secondary">
            {/* <Info toggleResume={this.toggleResumeModal} resumeFilePath={resumeFilePath}/> */}
            <Info toggleResume={this.toggleResumeModal} {...data} />
            <Education data={data.educationData} />
            <Skills skillSets={data.skillSets} />
            <Github />
          </Col>
        </Row>
        <ResumeModal
          className="resume"
          isOpen={this.state.resumeModalIsOpen}
          toggle={this.toggleResumeModal}
          file={data.resumeFilePath}
        />
      </Container>
    );
  }
}
