import React from 'react';

const paragraphs = [
  "In May of 2018, I completed the University of Minnesota Full-Stack Javascript Coding Bootcamp, and I am currently looking for a job as a full-stack JavaScript developer.",
  "I am currently focused in building MERN-stack applications (MongoDB/Express/React.js/Node), but I'm also comfortable with a variety of other technologies, including MySQL, Firebase, Bootstrap, Material-UI, Handlebars, and jQuery.",
];

export default () => (
  <section className="about section">
    <div className="section-inner">
      <h2 className="heading">About Me</h2>
      <div className="content">
        {/* <p>Write a brief intro about yourself. </p> */}
        {paragraphs.map((text, i) => <p id={i}>{text}</p>)}

      </div>
    </div>
  </section>
);
