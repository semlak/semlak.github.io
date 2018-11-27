import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const WorkItem = props => (
  <Container className="item no-padding" fluid>
    <Row>
      <Col xl="9" lg="8" md="7" sm="7" xs="1">
        <h3 className="title">{props.title}
          <span> - </span>
          <span className="place">
            <a href={props.locationHREF} target="_blank" rel="noopener noreferrer">{props.location}</a>
          </span>
        </h3>
      </Col>
      <Col xl="3" lg="4" md="5" sm="5" xs="1"><span className="year">{props.workDuration}</span></Col>
    </Row>
    {props.descriptions.map(description => <Row key={description.id}><p className="description">{description.text}</p></Row>)}
  </Container>

);

export default ({ data }) => (
  <section className="experience section">
    <div className="section-inner">
      <h2 className="heading">Work Experience</h2>
      <div className="content">
        {/*
        <Container className="item" fluid>
          <h3 className="title ">
            <Row className="no-padding">
              <Col className="no-padding text-align-left" lg="1" md="1" sm="1" xs="1">1</Col>
              <Col className="no-padding" lg="1" md="2" sm="1" xs="1">2</Col>
              <Col className="no-padding" lg="1" md="1" sm="2" xs="1">3</Col>
              <Col className="no-padding" lg="1" md="1" sm="0" xs="2">4</Col>
              <Col className="no-padding" lg="1" md="1" sm="1" xs="1">5</Col>
              <Col className="no-padding" lg="1" md="1" sm="1" xs="1">6</Col>
              <Col className="no-padding" lg="1" md="1" sm="1" xs="1">7</Col>
              <Col className="no-padding" lg="1" md="1" sm="1" xs="1">8</Col>
              <Col className="no-padding" lg="1" md="1" sm="1" xs="1">9</Col>
              <Col className="no-padding" lg="1" md="1" sm="1" xs="1">10</Col>
              <Col className="no-padding" lg="1" md="1" sm="1" xs="1">11</Col>
              <Col className="no-padding" lg="1" md="1" sm="1" xs="1">12</Col>
            </Row>
          </h3>
        </Container>
        */}
        {data.map(job => <WorkItem {...job} key={job.id} />)}


      </div>
    </div>
  </section>
);
