import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
// import shortid from 'shortid';
// import PropTypes from 'prop-types';

import AboutMe from './AboutMe';
import Projects from './Projects';
import Work from './Work';
import Github from './Github';

import Info from './Info';
import Education from './Education';
import Skills from './Skills';
import ResumeModal from './ResumeModal';

import data from '../portfolioData';

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
            <Projects projectItems={data.projectItems} techData={data.techData} />
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
