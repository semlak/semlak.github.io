import React from 'react';
// import shortid from 'shortid';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'reactstrap';


Container.propTypes = {
  fluid: PropTypes.bool
  // applies .container-fluid class
};


const EducationItem = props => (
  <Container className="item" fluid>
    <h3 className="title ">
      <Row>
        {/* <Col className="no-padding" lg="1" md="1" sm="1" xs="1"><i className={props.fa} /></Col> */}
        <Col className="no-padding" lg="1" md="1" sm="1" xs="1"><FontAwesomeIcon icon={props.fa} /></Col>
        <Col className="no-padding" lg="11" md="11" sm="11" xs="11" >{props.award}</Col>
      </Row>
      <Row className="university">
        <Col className="no-padding" lg="1" md="1" sm="1" xs="1" />
        <Col className="no-padding" lg="9" md="5" sm="8" xs="9"><h4 className="university">{props.school}</h4></Col>
        <Col className="no-padding" lg="2" md="1" sm="1" xs="1"><h4 className="university year">{props.year}</h4></Col>
      </Row>
    </h3>
  </Container>
);

export default ({ data }) => (
  <aside className="education aside section">
    <div className="section-inner">
      <h2 className="heading">Education</h2>
      <div className="content">
        {data.map(award => <EducationItem {...award} key={award.id} />)}
      </div>
    </div>
  </aside>


);

