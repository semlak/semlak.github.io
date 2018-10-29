import React from 'react';

import data from '../portfolioItems';

export default () => (
  <section className="latest section">
    <div className="section-inner">
      <h2 className="heading">Latest Projects</h2>
      <div className="content">

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
              <li><a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt" />React</a></li>
              <li><a href="https://jquery.com/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt" />Node.js</a></li>
              <li><a href="https://github.com/IonicaBizau/github-calendar" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt" />Express</a></li>
              <li><a href="https://github.com/IonicaBizau/github-calendar" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt" />MongoDB</a></li>
              <li><a href="https://github.com/IonicaBizau/github-calendar" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt" />Chartest.js</a></li>


              <li><a href="https://github.com/sdepold/jquery-rss" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt" />GoogleMaps</a></li>

            </ul>

          </div>
        </div>

        <hr className="divider" />

        <div className="item row">
          <a className="col-md-4 col-12" href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/instance-bootstrap-portfolio-theme-for-developers/" target="_blank" rel="noopener noreferrer">
            <img className="img-fluid project-image" src="assets/images/projects/project-1.png" alt="project name" />
          </a>
          <div className="desc col-md-8 col-12">
            <h3 className="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/instance-bootstrap-portfolio-theme-for-developers/" target="_blank" rel="noopener noreferrer">Instance - Bootstrap 4 Portfolio Theme for Aspiring Full Stack Developers</a></h3>
            <p className="mb-2">You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.</p>
            <p><a className="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/instance-bootstrap-portfolio-theme-for-developers/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt" />Find out more</a></p>
          </div>
        </div>


      </div>
    </div>
  </section>
);

