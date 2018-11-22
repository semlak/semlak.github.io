import React from 'react';
// import axios from 'axios';

// import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Form, FormGroup, Label, Input, FormFeedback, } from 'reactstrap';
import { Modal, ModalBody } from 'reactstrap';
// import 'react-phone-number-input/style.css';
// import PhoneInput, { formatPhoneNumber } from 'react-phone-number-input';


// import { Container, Row, Col } from 'reactstrap';
//
// const validateEmail = email => !!email.match("[a-za-z]+.*@.*[a-za-z]+.*[.][a-za-z]+");

export default props => (
  <div className="pdf-modal-container">
    <Modal size="lg" isOpen={props.isOpen} toggle={props.toggle} className={props.className}>
      <ModalBody className={props.className}>
        <iframe title="My Resume" className="pdf-viewer" src={props.file} />
      </ModalBody>
    </Modal>
  </div>
);
