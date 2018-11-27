import React, { Component } from 'react';
import axios from 'axios';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Form, FormGroup, Label, Input, FormFeedback, } from 'reactstrap';
import 'react-phone-number-input/style.css';
import PhoneInput, { formatPhoneNumber } from 'react-phone-number-input';


// import { Container, Row, Col } from 'reactstrap';
//
const validateEmail = email => !!email.match("[a-zA-Z]+.*@.*[a-zA-Z]+.*[.][a-zA-Z]+");


export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
      phoneNumber: '',
      showEmailValidation: false,
      showMessageValidation: false,
      messageSuccessful: false,
    };
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.submit = this.submit.bind(this);
    // this.closeSuccessfulMessageModal = this.closeSuccessfulMessageModal.bind(this);
    // this.phoneNumberUpdate = this.phoneNumberUpdate.bind(this);
    // this.postMessage = this.postMessage.bind(this);
  }

  // handleInputChange = event => this.setState({ [event.target.name]: event.target.value });

  componentWillReceiveProps(props) {
    // console.log('received props', props);
    if (this.state.messageSuccessful && !props.isOpen) {
      this.setState({ messageSuccessful: false });
    }
  }

  postMessage = (data) => {
    console.log('hey! in postMessage', 'data', data);
    const data1 = {
      name: 'Joseph Semlak',
      _reply_to: data.email,
      message: Object.keys(data).map(key => `${key}: ${data[key]}`).join('\n')
    };
    console.log('data1', data1);
    return axios.post('https://formspree.io/semlak@gmail.com', data1);
  }

  handleInputChange = (event) => {
    // console.log('event', event);
    if (!event || !event.target) {
      console.log('no event or event.target');
    }
    else if (event.target.name === 'phoneNumberi1') {
      this.setState({ phoneNumber: formatPhoneNumber(event.target.value, "International") });
    }
    else {
      this.setState({ [event.target.name]: event.target.value });
    }
    if (event && event.target && event.target.name !== 'email' && this.state.email.length > 0) {
      this.setState({ showEmailValidation: true });
    }
  }

  phoneNumberUpdate = (phoneNumber) => {
    this.setState({ phoneNumber });
  }

  submit = (event) => {
    event.preventDefault();
    if (this.state.email && validateEmail(this.state.email) && this.state.message) {
      const data = {
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
        message: this.state.message,
      };
      console.log('data', data);
      const post = this.postMessage(data);
      console.log('post', post);
      post
        .then((response) => {
          console.log('response', response);
          this.setState({
            email: '',
            message: '',
            showEmailValidation: false,
            showMessageValidation: false,
            messageSuccessful: true,
          });
        })
        .catch(err => console.log('err', err));
    }
    if (this.state.email.length < 1 || !validateEmail(this.state.email)) {
      this.setState({ showEmailValidation: true });
    }
    else if (this.state.message.length < 1) {
      this.setState({ showMessageValidation: true });
    }
  }

  closeSuccessfulMessageModal = (e) => {
    if (e) e.preventDefault();
    this.setState({
      email: '',
      message: '',
      showEmailValidation: false,
      showMessageValidation: false,
      messageSuccessful: true,
    });
  }

  render() {
    // console.log(this.state.phoneNumber, formatPhoneNumber(this.state.phoneNumber, "International"));
    const markEmailInputInvalid = this.state.showEmailValidation && !validateEmail(this.state.email);
    const markMessageInputInvalid = this.state.showMessageValidation && this.state.message.length < 1;

    if (this.state.messageSuccessful) {
      return (
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader toggle={this.props.toggle}>Contact Me</ModalHeader>
          <ModalBody>
            <p>Your message was successfully sent!</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      );
    }
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
        <ModalHeader toggle={this.props.toggle}>Contact Me</ModalHeader>
        <Form action="https://formspree.io/semlak@gmail.com" method="post">
          <ModalBody>
            {/* <p>You can contact me with this magical form!</p> */}
            <FormGroup row>
              <Label for="email" sm={2}>Email</Label>
              <Col sm={10}>
                <Input
                  invalid={markEmailInputInvalid}
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@domain.com"
                />
                <FormFeedback invalid="true">Please enter a valid email address.</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="phoneNumber" sm={2}>Phone</Label>
              <Col sm={10}>
                <PhoneInput
                  defaultcountry="US"
                  placeholder="Enter phone number (optional)"
                  value={this.state.phoneNumber}
                  onChange={this.phoneNumberUpdate}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="message" sm={2}>Text Area</Label>
              <Col sm={10}>
                <Input
                  invalid={markMessageInputInvalid}
                  value={this.state.message}
                  onChange={this.handleInputChange}
                  type="textarea"
                  name="message"
                  id="message"
                  placeholder="Enter your message here"
                  rows="5"
                />
                <FormFeedback invalid="true">Please enter a message.</FormFeedback>
              </Col>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.submit}>Submit</Button>
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
            {/* <input type="submit" /> */}
          </ModalFooter>
        </Form>
      </Modal>
    );
  }
}
