import React, { Component } from 'react';

import AboutMe from './AboutMe';
import Projects from './Projects';
import Work from './Work';
import Github from './Github';


import Info from './Info';
import Education from './Education';
// import BlogPosts from './BlogPosts';
import Credits from './Credits';

export default class extends Component {
  state = {
  };

  render() {
    return (
      <div>
        <div className="container sections-wrapper">
          <div className="row">
            <div className="primary col-lg-8 col-12">
              <AboutMe />

              <Projects />
              <Work />
            </div>

            <div className="secondary col-lg-4 col-12">
              <Info />
              <Education />
              { /* <BlogPosts /> */ }

              <Github />
              <Credits />


            </div>
          </div>
        </div>
      </div>
    );
  }
}
