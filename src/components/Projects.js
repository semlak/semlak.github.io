import React from 'react';

import { Row, Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
// import data from '../portfolioItems';


/*
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
*/

const TechItem = ({ text, techData }) => {
  const textLinkRegex = /(\S+)[*]/;
  if (text && text.length > 0 && text.match(textLinkRegex)) {
    // console.log(text.match(textLinkRegex));
    const result = text.match(textLinkRegex);
    console.log('text', text, 'result:', result);
    if (result && result.length > 1 && techData && techData[result[1]]) {
      const newText = result[1];
      const { url, purpose } = techData[newText];
      return <li><a href={url} rel="noopener noreferrer">{newText}</a>{purpose ? `: ${purpose}` : ''}</li>;
    }
    // for (var i in result) {
    //   console.log('i', i, 'result[i]', result[i]);
    // }
  }
  return (<li>{text}</li>);
}

const Tech = ({ tech, techData }) => {
  // console.log("tectData:", techData); 
  if (tech && tech.length > 0) {
    return (
      <div>
      <p>Technologies Include:</p>
      <ul className="technologies">
        {/* {tech.map(item => <li key={item.toString()}>{item}</li>)} */}
        {tech.map(item => <TechItem key={item.toString()} text={item} techData={techData} />)}
      </ul>
      </div>
    );
  }
  return <div />;
};

const Project = ({ id, deployment, repository, longDescription, tech, techData, src, title }) => (
  <Row className="item">
    <a className="col-md-4 col-12" href={deployment} target="_blank" rel="noopener noreferrer">
      <img className="img-fluid project-image" src={src} alt={title} />
    </a>
    <Col md="8" sm="12" className="desc">
      <h3 className="title"><a href={repository} target="_blank" rel="noopener noreferrer">{title}</a></h3>
      <p className="mb-2">{longDescription}</p>
      {/* {longDescription && longDescription.length > 0 ? longDescription.split(". ").map(text => <p className="mb-2" key={text}>{text}</p>) : ""} */}
      <Tech tech={tech} techData={techData} />
      <p>
        {deployment ? <a className='more-link' href={deployment} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} />Demo</a> : "" }
        <a className="more-link" href={repository} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} />Repository</a>

      </p>
    </Col>
  </Row>
);

export default ({ projectItems, techData = {} }) => (
  <section className="latest section">
    <div className="section-inner">
      <h2 className="heading">Latest Projects</h2>
      <div className="content">
        {/* <hr className="divider" /> */}
        {/* {data.slice(0, 5).map(project => Project(project))} */}
        {/* {projectItems.slice(0, 6).map(project => Project(project))} */}
        {projectItems.slice(0, 6).map(project => <Project { ...project } key={project.id} techData={techData} />)}

      </div>
    </div>
  </section>
);

