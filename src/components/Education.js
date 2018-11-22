import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';


const data = [
  {
    fa: "fas fa-award",
    award: "Full-Stack Web Development Certificate",
    // award: "Full-Stack Web Dev Cert",
    school: "University of Minnesota Twin Cities",
    year: 2018,
    id: shortid.generate(),
  },
  {
    fa: "fas fa-graduation-cap",
    award: "MS Computer Science",
    school: "University of Minnesota Twin Cities",
    year: "2016",
    id: shortid.generate(),
  },
  {
    fa: "fas fa-graduation-cap",
    award: "BS Physics",
    school: "University of Illinois at Urbana-Champaign",
    year: "2004",
    id: shortid.generate(),
  },
];

Container.propTypes = {
  fluid: PropTypes.bool
  // applies .container-fluid class
};


const EducationItem = props => (
  <Container className="item" fluid>
    <h3 className="title ">
      <Row>
        <Col className="no-padding" lg="1" md="1" sm="1" xs="1"><i className={props.fa} /></Col>
        {/* <Col lg="1" md="1" sm="1" >hey</Col> */}
        {/* <Col className="no-padding" lg="9" md="6" sm="8" xs="9" >{props.award}</Col> */}
        {/* <Col className="no-padding" lg="2" md="1" sm="1" xs="2">{props.year}</Col> */}
        <Col className="no-padding" lg="11" md="11" sm="11" xs="11" >{props.award}</Col>
        {/* <Col className="no-padding" lg="2" md="1" sm="1" xs="2">{props.year}</Col> */}
      </Row>

      <Row className="university">
        {/* <h4 className="university"> */}
        <Col className="no-padding" lg="1" md="1" sm="1" xs="1" />
        {/* <Col lg="11" md="11" sm="11" >  */}
        {/* <h4 className="university">{props.school}</h4> */}
        {/* </Col> */}
        {/* <Col className="no-padding" lg="10" md="8" sm="8" xs="10"><h4 className="university">{props.school}</h4></Col> */}

        <Col className="no-padding" lg="9" md="5" sm="8" xs="9"><h4 className="university">{props.school}</h4></Col>
        {/* <Col className="no-padding" lg="9" md="6" sm="8" xs="9" >{props.award}</Col> */}
        <Col className="no-padding" lg="2" md="1" sm="1" xs="1"><h4 className="university year">{props.year}</h4></Col>
        {/* </h4> */}
      </Row>
    </h3>
  </Container>
);

export default () => (
  <aside className="education aside section">
    <div className="section-inner">
      <h2 className="heading">Education</h2>
      <div className="content">
        {/* <Container className="item" fluid={true}> */}
        {/* <h3 className="title "> */}
        {/* <Row className="no-padding">  */}
        {/* <Col className="no-padding" lg="1" md="1" sm="1" xs="1">1</Col>  */}
        {/* <Col className="no-padding" lg="1" md="1" sm="1" xs="1">2</Col>  */}
        {/* <Col className="no-padding" lg="1" md="1" sm="1" xs="1">3</Col>  */}
        {/* <Col className="no-padding" lg="1" md="1" sm="1" xs="1">4</Col>  */}
        {/* <Col className="no-padding" lg="1" md="1" sm="1" xs="1">5</Col>  */}
        {/* <Col className="no-padding" lg="1" md="1" sm="1" xs="1">6</Col>  */}
        {/* <Col className="no-padding" lg="1" md="1" sm="1" xs="1">7</Col>  */}
        {/* <Col className="no-padding" lg="1" md="1" sm="1" xs="1">8</Col>  */}
        {/* <Col className="no-padding" lg="1" md="1" sm="1" xs="1">9</Col>  */}
        {/* <Col className="no-padding" lg="1" md="1" sm="1" xs="1">10</Col>  */}
        {/* <Col className="no-padding" lg="1" md="1" sm="1" xs="1">11</Col>  */}
        {/* <Col className="no-padding" lg="1" md="1" sm="1" xs="1">12</Col>  */}
        {/* </Row>  */}
        {/* </h3> */}
        {/* </Container> */}

        {data.map(award => <EducationItem {...award} key={award.id} />)}
        {/* <div className="item"> */}
        {/* <h3 className="title hanging-indent"><i className="fas fa-award" /> &nbsp;&nbsp;Full-Stack Web Development Certificate </h3> */}
        {/* <h4 className="university">University of Minnesota Twin Cities<span className="year">(2018)</span></h4> */}
        {/* </div> */}
        {/* <div className="item"> */}
        {/* <h3 className="title"><i className="fas fa-graduation-cap" /> MS Computer Science</h3> */}
        {/* <h4 className="university">University of Minnesota Twin Cities<span className="year">(2016)</span></h4> */}
        {/* </div> */}
        {/* <div className="item"> */}
        {/* <h3 className="title"><i className="fas fa-graduation-cap" /> BS Physics</h3> */}
        {/* <h4 className="university">University of Illinois at Urbana-Champaign <span className="year">(2004)</span></h4> */}
        {/* </div> */}
      </div>
    </div>
  </aside>


);

