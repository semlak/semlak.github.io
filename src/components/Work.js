import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import shortid from 'shortid';

const data = [
  {
    title: "Anti-Money Laundering Compliance Consultant",
    locationHREF: "https://wwww.usbank.com",
    location: "US Bank",
    workDuration: "Jan 2017 - Present",
    id: shortid.generate(),
    descriptions: [
      {
        text: "Develop and maintain VBA Macros in Excel and Word for department use to automate tasks, read, parse, and cleanse data from multiple sources, create reports.",
        id: shortid.generate()
      },
      {
        text: "Gather transaction details, customer records, third-party information and analyze transactional data to formulate decision for outcome of investigations.",
        id: shortid.generate(),
      },
    ],
  },
  {
    title: "Anti-Money Laundering Compliance Consultant",
    locationHREF: "https://wwww.bremer.com",
    location: "Bremer Bank",
    workDuration: "May 2015 - Oct 2015",
    id: shortid.generate(),
    descriptions: [
      {
        text: "Develop and maintain VBA Macros in Excel and Word for department use to automate tasks, read, parse, and cleanse data from multiple sources, create reports.",
        id: shortid.generate()
      },
      {
        text: "Gather transaction details, customer records, third-party information and analyze transactional data to formulate decision for outcome of investigations.",
        id: shortid.generate(),
      },
    ],
  },
  {
    title: "Anti-Money Laundering Compliance Investigator",
    locationHREF: "https://wwww.tcfbank.com",
    location: "TCF National Bank",
    workDuration: "Jan 2008 - Mar 2015",
    id: shortid.generate(),
    descriptions: [
      {
        text: "Develop and maintain VBA Macros in Excel and Word for department use to automate tasks, read, parse, and cleanse data from multiple sources, create reports.",
        id: shortid.generate()
      },
      {
        text: "Gather transaction details, customer records, third-party information and analyze transactional data to formulate decision for outcome of investigations.",
        id: shortid.generate(),
      },
    ],
  },
];

const WorkItem = props => (
  <Container className="item no-padding" fluid>
    {/* <div className="item"> */}
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
    {/*
    <div className="item">
      <h3 className="title">{props.title}
        <span> - </span>
        <span className="place">
          <a href={props.locationHREF} target="_blank" rel="noopener noreferrer">{props.location}</a>
        </span>
        <span className="year">{props.workDuration}</span>
      </h3>
      {props.descriptions.map(description => <p className="description" key={description.id}>{description.text}</p>)}
    </div>
    */}
  </Container>

);

export default () => (
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
        {/*
        <hr className="divider" />
        <div className="item">

          <h3 className="title">Anti-Money Laundering Compliance Consultant - <span className="place"><a href="https://www.usbank.com" target="_blank" rel="noopener noreferrer">US Bank</a></span> <span className="year">Jan 2017 - Present</span></h3>
          <p>Develop and maintain VBA Macros in Excel and Word for department use to automate tasks, read, parse, and cleanse data from multiple sources, create reports.</p>
          <p>Gather transaction details, customer records, third-party information and analyze transactional data to formulate decision for outcome of investigations.</p>
        </div>
        <div className="item">
          <h3 className="title">Anti-Money Laundering Compliance Consultant - <span className="place"><a href="https://www.bremer.com" target="_blank" rel="noopener noreferrer">Bremer Bank</a></span> <span className="year">May 2015 - Oct 2015</span></h3>
          <p>Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.</p>
        </div>

        <div className="item">
          <h3 className="title">Anti-Money Laundering Compliance Investigator - <span className="place"><a href="https://www.tcfbank.com" target="_blank" rel="noopener noreferrer">TCF National Bank</a></span> <span className="year">Jan 2008 - Mar 2015</span></h3>
          <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
        </div>
        */}

      </div>
    </div>
  </section>
);
