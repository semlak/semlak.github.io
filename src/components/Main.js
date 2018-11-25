import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
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

let data = {
  phoneNumber: '217-417-5616',
  emailObj: ['91', '12', 'moc', '12', 'liamg', '34', '82', 'kalmes', '56'],
  email: null,
  emailHeaders: {
    subject: 'Question from the website',
  },
  portfolio: 'https://semlak.github.io',
  resumeFilePath: './pdfs/blue-creative-resume.pdf',
};


// const xena = 1;


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

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeModalIsOpen: false,
    };
    this.toggleResumeModal = this.toggleResumeModal.bind(this);
  }

  toggleResumeModal(e) {
    console.log("in toggleResumeModal function, setting to", !this.state.resumeModalIsOpen);
    if (e) e.preventDefault();
    this.setState({ resumeModalIsOpen: !this.state.resumeModalIsOpen });
  }

  render() {
    return (
      <Container className="sections-wrapper">
        {/* <Education /> */}
        <Row>
          <Col lg="8" sm="12" className="primary">
            {/* <Education /> */}
            <Work />
            <AboutMe />
            <Projects />
          </Col>
          <Col lg="4" sm="12" className="secondary">
            {/* <Info toggleResume={this.toggleResumeModal} resumeFilePath={resumeFilePath}/> */}
            <Info toggleResume={this.toggleResumeModal} {...data} />
            <Education />
            <Skills />
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
