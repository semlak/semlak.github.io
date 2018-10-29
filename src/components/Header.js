import React, { Component } from 'react';

export default class extends Component {
  state = {
  }

  render() {
    return (
      <div>
        <header className="header">
          <div className="container clearfix">
            <img
              className="profile-image img-fluid float-left"
              src="./assets/images/joseph_picture.jpg"
              alt="Joseph Semlak"
            />
            <div className="profile-content float-left">
              <h1 className="name">Joseph Semlak</h1>
              <h2 className="desc">Fullstack Javascript Web Application Developer</h2>
              <ul className="social list-inline">
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/joseph-semlak-ba829898/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/semlak" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github-alt" />
                  </a>
                </li>
                <li className="list-inline-item"><a href="https://stackexchange.com/users/3880192/joseph" target="_blank" rel="noopener noreferrer"><i className="fab fa-stack-overflow" /></a></li>
                <li className="list-inline-item last-item"><a href="https://app.codesignal.com/profile/joseph_s60" target="_blank" rel="noopener noreferrer"><i className="fas fa-code" /></a></li>
                <li className="list-inline-item"><a href="https://twitter.com/joseph_semlak" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" /></a></li>
              </ul>
            </div>
            <a className="btn btn-cta-primary float-right" href="https://themes.3rdwavemedia.com/" target="_blank" rel="noopener noreferrer"><i className="fas fa-paper-plane" /> Contact Me</a>
          </div>
        </header>
      </div>);
  }
}
