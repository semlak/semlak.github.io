import React, { Component } from 'react';

export default class extends Component {
  state = {
  }

  render() {
    return (
      <div>
        <section className="projects section">
          <div className="section-inner">
            <h2 className="heading">Other Projects</h2>
            <div className="content">
              <div className="item">
                <h3 className="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/free-bootstrap4-resume-cv-template-for-developers-pillar/">Pillar - Free Bootstrap 4 Resume/CV Template for Developers</a> <span className="badge badge-theme">Free</span></h3>
                <p className="summary">Provide a brief description of your project. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatu.</p>
                <p><a className="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/free-bootstrap4-resume-cv-template-for-developers-pillar/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt" />Find out more</a></p>
              </div>
              <div className="item">
                <h3 className="title"><a href="#">Project Title Cras eget lacus</a> <span className="badge badge-theme">Open Source</span></h3>
                <p className="summary">Provide a brief description of your project. Maecenas ornare ultricies risus, in fermentum augue consectetur in. Vestibulum vitae mauris iaculis, sollicitudin velit in, molestie nulla. </p>
                <p><a className="more-link" href="#" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt" />View on GitHub</a></p>
              </div>
              <div className="item">
                <h3 className="title"><a href="#">Project Title Maecenas Ornare</a> <span className="badge badge-theme">Open Source</span></h3>
                <p className="summary">Provide a brief description of your project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel purus enim. Etiam tortor felis, fermentum ac ultrices sed.</p>
                <p><a className="more-link" href="#" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt" />View on GitHub</a></p>
              </div>
              <a className="btn btn-cta-secondary" href="#">More on CoderWall <i className="fas fa-chevron-right" /></a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
