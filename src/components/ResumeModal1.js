import React from 'react';
import axios from 'axios';

// import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Form, FormGroup, Label, Input, FormFeedback, } from 'reactstrap';
import { Modal, ModalBody } from 'reactstrap';
// import 'react-phone-number-input/style.css';
// import PhoneInput, { formatPhoneNumber } from 'react-phone-number-input';


// import { Container, Row, Col } from 'reactstrap';
//
// const validateEmail = email => !!email.match("[a-za-z]+.*@.*[a-za-z]+.*[.][a-za-z]+");

export default class extends React.Component {
  constructor(props) {
    super(props);
    // let pdfURL = props.file;
    // let { file } = props;
    let { file: pdfURL } = props;

    if (/^http.*?github\.io/.test(document.URL)) {
      pdfURL = `https://semlak.github.io/react-portfolio/${props.file}`;
    }
    else if (!/localhost/.test(document.URL)) {
      pdfURL = `../${props.file}`;
      // pdfURL = `https://raw.githubusercontent.com/semlak/react-portfolio/gh-pages/${props.file}`;
    }
    else if (/^http.*?github\.io/.test(document.URL)) {
      // pdfURL = `https://raw.githubusercontent.com/semlak/react-portfolio/gh-pages/${props.file}`;
      pdfURL = `https://semlak.github.io/react-portfolio/${props.file}`;
    }
    else if (/^http.*?herokuapp\.com/.test(document.URL)) {
      pdfURL = `https://joseph-semlak-portfolio.herokuapp.com/${props.file}`;
    }
    console.log('hey2, pdfURL', pdfURL);

    this.state = {
      fileIsReady: false,
      file: null,
      pdfURL,
      isOpen: props.isOpen,
    };
    console.log('state after constructor', this.state);
  }

  // getDerivedStateFromProps(nextProps, prevState) {

  // }
  getFile(url) {
    console.log('running axios request', 'url', url);
    axios.get(url, {
      responseType: 'blob'
    })
      .then(response => {
        console.log('received response');
        // Create a blob from the PDF Stream
        const file = new Blob(
          [response.data],
          { type: 'application/pdf' }
        );
        
        // Build a URL from the file
        const newURL = URL.createObjectURL(file);

        // Open the uRL on the new window
        console.log('newURL', newURL);
        // window.open (newURL);
        this.setState({ file: newURL, fileIsReady: true });

      })
      .catch(error => {
        console.log('error on axios request');
        console.log(error);
      });
 

  }

  componentWillReceiveProps(props) {
    console.log('componentWillReceiveProps, props', props, 'state', this.state);
    if (props.isOpen && !this.state.isOpen) {
      // modal has changed from closed to open
      if (!this.state.fileIsReady) {
        // download file
        this.getFile(this.state.pdfURL);
     }
    }
    if (props.isOpen !== this.state.isOpen) {
      console.log('updating isOpen state to ', props.isOpen);
      this.setState({ isOpen: props.isOpen });
    }
  }

  // componentDidUpdate(nextProps, prevState) {
  //   console.log('in componentDidUpdate', 'nextProps', nextProps, 'prevState', prevState);
  //   if (nextProps.isOpen && !prevState.isOpen) {
  //     // modal has changed from closed to open
  //     if (!prevState.fileIsReady) {
  //       // download file
  //       this.getFile(this.props.pdfURL);
  //    }
  //   }
  //   if (nextProps.isOpen !== prevState.isOpen) {
  //     console.log('updating isOpen state to ', nextProps.isOpen);
  //     this.setState({ isOpen: nextProps.isOpen });
  //   }
  // }

  render() {
    const { props } = this;
    const { isOpen, pdfURL } = this.state;
    console.log('rendering ResumeModal1', 'isOpen', isOpen, 'pdfURL', pdfURL, 'state', this.state);

    const Element = () => this.state.fileIsReady ?
      <embed
        title="My Resume"
        className="pdf-viewer"
        src={this.state.file}
      /> :
      <h3 title="My Resume" className="pdf-viewer">PDF is loading</h3>

    return (
      <div className="pdf-modal-container">
        <Modal size="lg" isOpen={isOpen} toggle={props.toggle} className={props.className}>
          <ModalBody className={props.className}>
            <Element />
         </ModalBody>
        </Modal>
      </div>
    );
  }
};
