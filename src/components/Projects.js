import React from 'react';

import { Row, Col, Container } from 'reactstrap';

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

const TechItemOld = ({ text, techData }) => {
  // const textLinkRegex = /(\S+)[*]/;
  const textLinkRegex = /[*](\S+)[*]/;
  // const textLinkRegex = /([a-zA-Z0-9- .]+)[*]/;
  // const textLinkRegex = /(\/(\S+|\S+))[*]/;
  if (text && text.length > 0 && text.match(textLinkRegex)) {
    // console.log(text.match(textLinkRegex));
    const result = text.match(textLinkRegex);
    // let result = text.match(textLinkRegex);
    let word = result[1];
    if (word.indexOf('/') > -1) {
      word = word.substring(word.indexOf('/') + 1);
    }
    // console.log('text', text, 'result:', result);
    if (word && word.length > 1 && techData && techData[word]) {
      const data = techData[word];
      // console.log('data:', data);
      const newText = data.name ? data.name : word;
      // const { url, purpose } = techData[newText];
      const { url, purpose } = data;
      return <li><a href={url} rel="noopener noreferrer">{newText}</a>{purpose ? `: ${purpose}` : ''}</li>;
    }
    // for (var i in result) {
    //   console.log('i', i, 'result[i]', result[i]);
    // }
  }
  return (<li>{text}</li>);
};


const TechItem = ({ projectID, text, techData }) => {
  // const textLinkRegex = /(\S+)[*]/;
  const textLinkRegex = /[*](\S+)[*](.*$)/;
  // const textLinkRegex = /([a-zA-Z0-9- .]+)[*]/;
  // const textLinkRegex = /(\/(\S+|\S+))[*]/;
  let listItemContent = [];
  let remainingText = text;
  let counter = 0;
  while (remainingText && remainingText.length > 0 && remainingText.match(textLinkRegex) && counter < 5) {
    counter++;
    // console.log(remainingText.match(textLinkRegex));
    const result = remainingText.match(textLinkRegex);
    // let result = text.match(textLinkRegex);
    // remainingText = remainingText.substring(result[1]);
    if (result.index > 0) {
      const prefixText = remainingText.substring(0, result.index);
      listItemContent.push(<span key={prefixText}>{prefixText}</span>);
    }
    remainingText = result[2] || '';
    // console.log('result:', result, 'remainingText', remainingText);
    const word = result[1];
    // if (word.indexOf('/') > -1) {
    //   word = word.substring(word.indexOf('/') + 1);
    // }
    // console.log('text', text, 'result:', result);
    if (word && word.length > 1 && techData && techData[word]) {
      const data = techData[word];
      // console.log('data:', data);
      const newText = data.name ? data.name : word;
      // const { url, purpose } = techData[newText];
      const { url, purpose } = data;
      listItemContent.push(<a key={newText + '-' + data.id + '-' + projectID} href={url} target="_blank" rel="noopener noreferrer">{newText}</a>);
      if (purpose && purpose.length > 0) {
        listItemContent.push(<span key={purpose + '-' + data.id + '-' + projectID}>: {purpose}</span>);
      }
      // return <li><a href={url} rel="noopener noreferrer">{newText}</a>{purpose ? `: ${purpose}` : ''}</li>;
    }
    else {
      listItemContent.push(<span key={word + '-' + text + '-' + projectID}>{word}</span>);
    }
    // for (var i in result) {
    //   console.log('i', i, 'result[i]', result[i]);
    // }
  }
  // else {
  //   listItemContent.push(<span key={text}>{text}</span>);
  // }
  if (remainingText && remainingText.length) {
    listItemContent.push(<span key={remainingText + '-' + projectID}>{remainingText}</span>);
  }
  // console.log('text:', text, 'listItemContent:', listItemContent);
  return (<li>{listItemContent}</li>);
};

const Tech = ({ projectID, tech, techData }) => {
  // console.log("tectData:", techData); 
  if (tech && tech.length > 0) {
    return (
      <div>
        <p>Technologies Include:</p>
        <ul className="technologies">
          {/* {tech.map(item => <li key={item.toString()}>{item}</li>)} */}
          {tech.map(item => <TechItem projectID={projectID} key={item.toString()} text={item} techData={techData} />)}
        </ul>
      </div>
    );
  }
  return <div />;
};

const Project = ({ id, deployment, repository, longDescription, tech, techData, src, title }) => (
  <Row className="item">
    <Container>
      <Row>
        <h3 className="title"><a href={repository} target="_blank" rel="noopener noreferrer">{title}</a></h3>
      </Row>
      <Row>
        <Col md="4" sm="12">
          <div href={null} target="_blank" rel="noopener noreferrer">
            <img className="img-fluid project-image" src={src} alt={title} />
          </div>
        </Col>
        <Col md="8" sm="12" className="desc">
          {/* <p className="mb-2">{longDescription}</p> */}
          <p>{longDescription}</p>
          {/* {longDescription && longDescription.length > 0 ? longDescription.split(". ").map(text => <p className="mb-2" key={text}>{text}</p>) : ""} */}
          <p>
            {deployment ? <a className="more-link" href={deployment} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} />Demo</a> : "" }
            <a className="more-link" href={repository} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} />Repository</a>

          </p>
        </Col>
      </Row>
      {tech ? <Row><Col><Tech projectID={id} tech={tech} techData={techData} /></Col></Row> : "" }
      {/* <Col>                                      */}
      {/*   <Tech tech={tech} techData={techData} /> */}
      {/* </Col>                                     */}

    </Container>
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
        {/* {projectItems.slice(0, 6).map(project => <Project { ...project } key={project.id} techData={techData} />)} */}
        {projectItems.filter(project => project.visible).map(project => <Project {...project} key={project.id} techData={techData} />)}

      </div>
    </div>
  </section>
);

