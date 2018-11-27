import React from 'react';
import axios from 'axios';

// import { css } from 'react-emotion';
// import FadeLoader from 'react-spinners/FadeLoader';
import { Modal, ModalBody } from 'reactstrap';

import LoadingSpinner from './LoadingSpinner';


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// const override = css`
// display: block;
// margin: 0 auto;
// border-color: #276582;
// `;

export default class extends React.Component {
  constructor(props) {
    super(props);
    // let pdfURL = props.file;
    // let { file } = props;
    let { file: pdfURL } = props;

    // if (/^http.*?github\.io/.test(document.URL)) {
    //   // pdfURL = `https://semlak.github.io/react-portfolio/${props.file}`;
    // }
    // else if (!/localhost/.test(document.URL)) {
    //   // pdfURL = `../${props.file}`;
    //   // pdfURL = `https://raw.githubusercontent.com/semlak/react-portfolio/gh-pages/${props.file}`;
    // }
    // else if (/^http.*?github\.io/.test(document.URL)) {
    //   // pdfURL = `https://raw.githubusercontent.com/semlak/react-portfolio/gh-pages/${props.file}`;
    //   pdfURL = `https://semlak.github.io/react-portfolio/${props.file}`;
    // }
    // else if (/^http.*?herokuapp\.com/.test(document.URL)) {
    //   pdfURL = `https://joseph-semlak-portfolio.herokuapp.com/${props.file}`;
    // }
    // console.log('hey2, pdfURL', pdfURL);

    this.state = {
      fileIsReady: false,
      file: null,
      pdfURL,
      isOpen: props.isOpen,
      loading: props.isOpen,
    };
    // console.log('state after constructor', this.state);
    if (props.isOpen) {
      this.getFile(this.state.pdfURL);
    }
  }

  componentWillReceiveProps(props) {
    // console.log('in ResumeModal.componentWillReceiveProps, props:', props, '\nstate:', this.state);
    if (props.isOpen && !this.state.isOpen) {
      // modal has changed from closed to open
      if (!this.state.fileIsReady) {
        // download file
        this.setState({ loading: true });
        this.getFile(this.state.pdfURL);
      }
    }
    if (props.isOpen !== this.state.isOpen) {
      // console.log('updating isOpen state to ', props.isOpen);
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

  getFile(url) {
    // help for downloading a PDF via axios and then displaying in react from https://medium.com/@storrisi/how-to-show-a-pdf-stream-on-a-react-client-without-any-library-36220fee60cb
    // console.log('running axios request', 'url', url); 
    const sleepTime = (/localhost/.test(document.URL)) ? 3000 : 0;
    sleep(sleepTime).then(() => {
      // console.log('actually running axios request now');
      axios.get(url, {
        responseType: 'blob'
      })
        .then((response) => {
          // console.log('received axios response for pdf GET');
          // Create a blob from the PDF Stream
          const file = new Blob(
            [response.data],
            { type: 'application/pdf' }
          );
          // Build a URL from the file
          const newURL = URL.createObjectURL(file);
          // newURL = `data:application/pdf;headers=filename%3D${newURL};base64`
          // Open the uRL on the new window
          // console.log('newURL', newURL); 
          // window.open (newURL);
          this.setState({ file: newURL, fileIsReady: true, loading: false });
        })
        .catch((error) => {
          console.log('error on axios request');
          console.log(error);
        })
    })
  }

  render() {
    const { props } = this;
    const { isOpen, } = this.state;
    const loadingMessage = 'PDF is loading...';
    // const loadingMessageClass = '
    const loadingMessageStyle = { textAlign: 'center', marginTop: '1em', size: '22px' }
    const { loading, file } = this.state;
    const spinnerProps = {
      loadingMessage,
      loadingMessageStyle,
      loading,
      // className: 'pdf-viewer',
      delay: 500,
      fadeIn: true,
      id: "pdf-loading-spinner",
    };

    // console.log('rendering ResumeModal', 'isOpen', isOpen, 'state', this.state, 'spinnerProps', spinnerProps);
    return (
      <div className="pdf-modal-container">
        <Modal size="lg" isOpen={isOpen} toggle={props.toggle} className={props.className}>
          <ModalBody className={props.className}>
            <div className="pdf-viewer">
              {loading ?
                  <LoadingSpinner {...spinnerProps}/> :
                  <embed title="My Resume" className="pdf-viewer" src={file} />
              }
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

