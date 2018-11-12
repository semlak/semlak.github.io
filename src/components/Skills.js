import React from 'react';


export default () => (
  <aside className="skills aside section">
    <div className="section-inner">
      <h2 className="heading">Skills</h2>
      <div className="content">
        {/*<p className="intro">Intro about your skills goes here. Keep the list lean and only show your primary skillset. You can always provide a link to your Linkedin or Coderwall profile so people can get more info there.</p> */}

        <div className="skillset">

          <div className="item">
            <h3 className="level-title">JavaScript, Node.js, &amp; Express
            </h3>
            <div className="level-bar">
              <div className="level-bar-inner" data-level="96%" />
            </div>
          </div>

          <div className="item">
            <h3 className="level-title">React.js
            </h3>
            <div className="level-bar">
              <div className="level-bar-inner" data-level="96%" />
            </div>
          </div>

          <div className="item">
            <h3 className="level-title">HTML5 &amp; CSS3
            </h3>
            <div className="level-bar">
              <div className="level-bar-inner" data-level="96%" />
            </div>
          </div>

          <div className="item">
            <h3 className="level-title">MonggoDB, MySQL
              {/*<span className="level-label" data-toggle="tooltip" data-placement="left" data-animation="true" title="You can use the tooltip to explain more about your skill level..."><i className="fas fa-info-circle" />Strong</span> */ }
            </h3>
            <div className="level-bar">
              <div className="level-bar-inner" data-level="85%" />
            </div>
          </div>

          {/* <p><a className="more-link" href="#"><i className="fas fa-external-link-alt" />More on Coderwall</a></p> */}
        </div>
      </div>
    </div>
  </aside>

);

