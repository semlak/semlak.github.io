import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Work from './Work';
import Github from './Github';

import Info from './Info';
import Education from './Education';
import Credits from './Credits';


export default class extends Component {
  state = {
  };

  render() {
    return (
      <Container className="container sections-wrapper">
        <Row>
          <Col lg="8" sm="12" className="primary">
            <AboutMe />
            <Projects />
            <Work />
          </Col>
          <Col lg="4" sm="12" className="secondary">
            <Info />
            <Education />
            <Github />
            <Credits />
          </Col>
        </Row>
      </Container>
    );
  }
}
