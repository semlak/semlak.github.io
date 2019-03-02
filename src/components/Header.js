import React, { Component } from 'react';

import { Container, Button } from 'reactstrap';
// import shortid from 'shortid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { social } from '../portfolioData';
import Contact from './Contact';

const portfolioImage = require('../images/joseph_picture.jpg');

class Header extends Component {
  state = {
    contactModalIsOpen: false,
  };

  toggle = () => {
    console.log('toggling');
    console.log('hey', 'state', this.state);
    if (this.state && typeof this.state.contactModalIsOpen !== 'undefined') {
      console.log('seems to be working');
      this.setState({ contactModalIsOpen: !this.state.contactModalIsOpen });
    }
  }

  open() {
    console.log('opening');
    if (!this.state || !this.state.contactModalIsOpen) {
      this.setState({ contactModalIsOpen: true });
    }
  }

  close() {
    console.log('closing', this.state);
    if (this.state && this.state.contactModalIsOpen) {
      this.setState({ contactModalIsOpen: false });
    }
  }

  render() {
    return (
      <div>
        <header className="header">
          <Container className="clearfix">
            <img
              className="profile-image img-fluid float-left"
              src={portfolioImage}
              alt="Joseph Semlak"
            />
            <div className="profile-content float-left">
              <h1 className="name">Joseph Semlak</h1>
              <h2 className="desc">Full-Stack JavaScript Web Application Developer</h2>
              <ul className="social list-inline">
                {social.map(e => (
                  <li className="list-inline-item" key={e.id}>
                    <a href={e.url} target="_blank" rel="noopener noreferrer">
                      {/* <i className={e.fa} /> */}
                      <FontAwesomeIcon icon={e.fa} />
                    </a>
                  </li>
                ))}
                {/* <li className="list-inline-item"><a href="https://www.linkedin.com/in/joseph-semlak-ba829898/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" /></a></li> */}
                {/* <li className="list-inline-item"><a href="https://github.com/semlak" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt" /></a></li> */}
                {/* <li className="list-inline-item"><a href="https://stackexchange.com/users/3880192/joseph" target="_blank" rel="noopener noreferrer"><i className="fab fa-stack-overflow" /></a></li> */}
                {/* <li className="list-inline-item last-item"><a href="https://app.codesignal.com/profile/joseph_s60" target="_blank" rel="noopener noreferrer"><i className="fas fa-code" /></a></li> */}
                {/* <li className="list-inline-item"><a href="https://twitter.com/joseph_semlak" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" /></a></li> */}
              </ul>
            </div>
            {/* <Button color="info" onClick={this.toggle} className="float-right"><i className="fas fa-paper-plane" /> Contact Me</Button> */}
            <Button id="contact" color="danger" onClick={this.toggle} className="float-right contact"><FontAwesomeIcon icon={faPaperPlane} /> Contact Me</Button>
          </Container>
        </header>
        <Contact isOpen={this.state.contactModalIsOpen} close={this.close} open={this.open} toggle={this.toggle} className="contact" />
      </div>
    );
  }
}

export default Header;
