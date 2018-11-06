import React from 'react';
import shortid from 'shortid';

const paragraphs = [
  {
    text: "In May of 2018, I completed the University of Minnesota Full-Stack Javascript Coding Bootcamp, and I am currently looking for a job as a full-stack JavaScript developer.",
    id: shortid.generate(),
  },
  {
    text: "I am currently focused in building MERN-stack applications (MongoDB/Express/React.js/Node), but I'm also comfortable with a variety of other technologies, including MySQL, Firebase, Bootstrap, Material-UI, Handlebars, and jQuery.",
    id: shortid.generate(),
  }
];

export default () => (
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
