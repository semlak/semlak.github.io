import React from 'react';


export default () => (
  <aside className="info aside section">
    <div className="section-inner">
      <h2 className="heading sr-only">Basic Information</h2>
      <div className="content">
        <ul className="list-unstyled">
          <li><i className="fas fa-map-marker-alt" /><span className="sr-only">Location:</span>Mineapolis, US</li>
          <li><i className="fas fa-envelope" /><span className="sr-only">Email:</span><a href="mailto:semlak@gmail.com">semlak@gmail.com</a></li>
          <li><i className="fas fa-link" /><span className="sr-only">Website:</span><a href="https://semlak.github.io" target="_blank" rel="noopener noreferrer">https://semlak.github.io</a></li>
          <li><i className="fas fa-clipboard-list" /><span className="sr-only">Resume:</span><a href="https://docs.google.com/document/d/1Td-3-gWF0DaWNQJcZ8Qr8ksSulV-5LAE6Ct7qXOcbhg/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
        </ul>
      </div>
    </div>
  </aside>
);

