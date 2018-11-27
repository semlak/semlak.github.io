import React from 'react';

export default ({ paragraphs }) => (
  <section className="about section">
    <div className="section-inner">
      <h2 className="heading">About Me</h2>
      <div className="content">
        {/* <p>Write a brief intro about yourself. </p> */}
        {paragraphs.map(s => <p key={s.id}>{s.text}</p>)}
      </div>
    </div>
  </section>
);
