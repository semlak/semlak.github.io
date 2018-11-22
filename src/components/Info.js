import React from 'react';
import MailTo from 'react-protected-mailto';
import { Container, Row, Col } from 'reactstrap';

const MailToLink = props => (
  <MailTo
    email={props.email}
    headers={props.emailHeaders}
  />
);

/*
export default props => (
  <aside className="info aside section">
    <div className="section-inner">
      <h2 className="heading sr-only">Basic Information</h2>
      <div className="content">
        <ul className="list-unstyled">
          <li><i className="fas fa-map-marker-alt" /><span className="sr-only">Location:</span>Mineapolis, US</li>
          <li><i className="fas fa-envelope" /><span className="sr-only">Email:</span><MailToLink {...props} /></li>
          <li><i className="fas fa-phone" /><span className="sr-only">Phone:</span><MailTo tel={props.phoneNumber} /></li>
          <li><i className="fas fa-link" /><span className="sr-only">Website:</span><a href="https://semlak.github.io" target="_blank" rel="noopener noreferrer">https://semlak.github.io</a></li>
          <li><i className="fas fa-clipboard-list" /><span className="sr-only">Resume:</span><a href={props.resumeFilePath} onClick={props.toggleResume} target="_blank" rel="noopener noreferrer">Resume</a></li>
        </ul>
      </div>
    </div>
  </aside>
);
*/


export default props => (
  <aside className="info aside section">
    <div className="section-inner">
      <h2 className="heading sr-only">Basic Information</h2>
      <div className="content">
        <Container className="no-padding list-unstyled" fluid>
          <Row className="info-row">
            <Col xs="1"><i className="fas fa-map-marker-alt" /></Col>
            <Col><span className="sr-only">Location:</span>Mineapolis, US</Col>
          </Row>
          <Row className="info-row">
            <Col xs="1"><i className="fas fa-envelope" /></Col>
            <Col><span className="sr-only">Email:</span><MailToLink {...props} /></Col>
          </Row>
          <Row className="info-row">
            <Col xs="1"><i className="fas fa-phone" /></Col>
            <Col><span className="sr-only">Phone:</span><MailTo tel={props.phoneNumber} /></Col>
          </Row>
          <Row className="info-row">
            <Col xs="1"><i className="fas fa-link" /></Col>
            <Col><span className="sr-only">Website:</span><a href={props.portfolio} target="_blank" rel="noopener noreferrer" alt="This Website">{props.portfolio}</a></Col>
          </Row>
          <Row className="info-row">
            <Col xs="1"><i className="fas fa-clipboard-list" /></Col>
            <Col><span className="sr-only">Resume:</span><a href={props.resumeFilePath} onClick={props.toggleResume} target="_blank" rel="noopener noreferrer">Resume</a></Col>
          </Row>
        </Container>
      </div>
    </div>
  </aside>
);

