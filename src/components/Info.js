import React from 'react';
// import MailTo from 'react-protected-mailto';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

// const MailToLink = props => (
//   <MailTo
//     email={props.email}
//     headers={props.emailHeaders}
//   />
// );


export default props => (
  <aside className="info aside section">
    <div className="section-inner">
      <h2 className="heading">Information</h2>
      <div className="content">
        <Container className="no-padding list-unstyled" fluid>
          <Row className="info-row">
            {/* <Col xs="1"><i className="fas fa-map-marker-alt" /></Col> */}
            <Col xs="1"><FontAwesomeIcon icon={faMapMarkerAlt} /></Col>
            <Col><span className="sr-only">Location:</span>{props.location}</Col>
          </Row>
          <Row className="info-row">
            {/* <Col xs="1"><i className="fas fa-envelope" /></Col> */}
            <Col xs="1"><FontAwesomeIcon icon={faEnvelope} /></Col>
            <Col><span className="sr-only">Email:</span>{props.email}</Col>
          </Row>
          <Row className="info-row">
            {/* <Col xs="1"><i className="fas fa-phone" /></Col> */}
            <Col xs="1"><FontAwesomeIcon icon={faPhone} /></Col>
            <Col><span className="sr-only">Phone:</span>{props.phoneNumber}</Col>
          </Row>
          {/* <Row className="info-row">
            *   <Col xs="1"><i className="fas fa-link" /></Col>
            *   <Col><span className="sr-only">Website:</span><a href={props.portfolio} target="_blank" rel="noopener noreferrer" alt="This Website">{props.portfolio}</a></Col>
            * </Row> */}
          <Row className="info-row">
            {/* <Col xs="1"><i className="fas fa-external-link-alt" /></Col> */}
            <Col xs="1"><FontAwesomeIcon icon={faExternalLinkAlt} /></Col>
            <Col><span className="sr-only">Resume:</span><a href={props.resumeFilePath} onClick={props.toggleResume} target="_blank" rel="noopener noreferrer" alt="PDF file of resume" title="Click to open in window; right click to download">Resume</a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  </aside>
);

