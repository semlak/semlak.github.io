import React, { Component } from 'react';

import { Container, Button } from 'reactstrap';
import shortid from 'shortid';

import Contact from './Contact';

const social = [
  {
    url: "https://www.linkedin.com/in/joseph-semlak-ba829898/",
    fa: "fab fa-linkedin-in",
    id: shortid.generate()
  },
  {
    url: "https://github.com/semlak",
    fa: "fab fa-github-alt",
    id: shortid.generate()
  },
  {
    url: "https://stackexchange.com/users/3880192/joseph",
    fa: "fab fa-stack-overflow",

    id: shortid.generate()
  },
  {
    url: "https://app.codesignal.com/profile/joseph_s60",
    fa: "fas fa-code",
    id: shortid.generate()
  },
  {
    url: "https://twitter.com/joseph_semlak",
    fa: "fab fa-twitter",
    id: shortid.generate()
  },
]

// export class extends Component {
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
          src="./assets/images/joseph_picture.jpg"
          alt="Joseph Semlak"
        />
        <div className="profile-content float-left">
          <h1 className="name">Joseph Semlak</h1>
          <h2 className="desc">Fullstack Javascript Web Application Developer</h2>
          <ul className="social list-inline">
            {social.map(e => (
              <li className="list-inline-item" key={e.id}>
                <a href={e.url} target="_blank" rel="noopener noreferrer">
                  <i className={e.fa} />
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
        <Button color="info" onClick={this.toggle} className="float-right"><i className="fas fa-paper-plane" /> Contact Me</Button>
      </Container>
      </header>
      <Contact isOpen={this.state.contactModalIsOpen} close={this.close} open={this.open} toggle={this.toggle} className="contact" />
      </div>);
  }
}

export default Header;
