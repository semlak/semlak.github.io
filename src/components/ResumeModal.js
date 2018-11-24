import React from 'react';
// import axios from 'axios';

// import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Form, FormGroup, Label, Input, FormFeedback, } from 'reactstrap';
import { Modal, ModalBody } from 'reactstrap';
// import 'react-phone-number-input/style.css';
// import PhoneInput, { formatPhoneNumber } from 'react-phone-number-input';


// import { Container, Row, Col } from 'reactstrap';
//
// const validateEmail = email => !!email.match("[a-za-z]+.*@.*[a-za-z]+.*[.][a-za-z]+");

export default (props) => {
  let pdfURL = props.file;
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

  return (
    <div className="pdf-modal-container">
      <Modal size="lg" isOpen={props.isOpen} toggle={props.toggle} className={props.className}>
        <ModalBody className={props.className}>
          {/* <iframe title="My Resume" className="pdf-viewer" src={pdfURL} /> */}
          <embed
            title="My Resume"
            className="pdf-viewer"
            src={pdfURL}type="application/pdf"
          />
        </ModalBody>
      </Modal>
    </div>
  );
};
