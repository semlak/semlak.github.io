import React from 'react';

import { Row, Col } from 'reactstrap';
import data from '../portfolioItems';

const LatestProject = () => (
  <div className="item featured text-center">
    <h3 className="title"><a href="https://international-intern.herokuapp.com" target="_blank" rel="noopener noreferrer">International Intern</a></h3>
    <p className="summary">An Internship Tracking tool. Record your experiences with a Journal, track your Expenses, and stay up to date with local news.</p>
    <div className="featured-image has-ribbon">
      <a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/velocity-bootstrap-theme-for-startup-products/" target="_blank" rel="noopener noreferrer">
        <img className="img-fluid project-image" src="./assets/images/portfolio/internationalIntern.png" alt="project name" />
      </a>

    </div>

    <div className="credits desc text-left">
      <ul className="list-unstyled pb-2">
        <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt" />React</a></li>
        <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt" />Material-UI</a></li>
        <li><a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt" />Node.js</a></li>
        <li><a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt" />Express</a></li>
        <li><a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt" />MongoDB</a></li>
        <li><a href="https://gionkunz.github.io/chartist-js/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt" />Chartest.js</a></li>


        <li><a href="https://developers.google.com/maps/documentation/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt" />GoogleMaps</a></li>

      </ul>
    </div>
  </div>
);

const Project = props => (
  <Row className="item" key={props.id}>
    <a className="col-md-4 col-12" href={props.deployment} target="_blank" rel="noopener noreferrer">
      <img className="img-fluid project-image" src={props.src} alt={props.title} />
    </a>
    <Col md="8" sm="12" className="desc">
      <h3 className="title"><a href={props.repository} target="_blank" rel="noopener noreferrer">{props.title}</a></h3>
      <p className="mb-2">{props.longDescription}</p>
      <p>
        <a className="more-link" href={props.deployment} target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt" />Demo</a>
        <a className="more-link" href={props.repository} target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt" />Repository</a>

      </p>
    </Col>
  </Row>
);

export default () => (
  <section className="latest section">
    <div className="section-inner">
      <h2 className="heading">Latest Projects</h2>
      <div className="content">
        {/* <hr className="divider" /> */}
        {data.slice(0, 5).map(project => Project(project))}

      </div>
    </div>
  </section>
);

