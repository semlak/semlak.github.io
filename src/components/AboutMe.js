import React, { Component } from 'react';

let paragraphs = [
  "In May of 2018, I completed the University of Minnesota Full-Stack Javascript Coding Bootcamp, and I am currently looking for a job as a full-stack JavaScript developer.",
  "I am currently focused in building MERN-stack applications (MongoDB/Express/React.js/Node), but I'm also comfortable with a variety of other technologies, including MySQL, Firebase, Bootstrap, Material-UI, Handlebars, and jQuery.",
]
// export default class extends Component {

	// state = {
	// }

	// render() {
		// return <div>

export default props => ( 
                  <section class="about section">
                      <div class="section-inner">
                          <h2 class="heading">About Me</h2>
                          <div class="content">
                            {/*<p>Write a brief intro about yourself. </p>*/}
                            {paragraphs.map((text, i) => <p id={i}>{text}</p>)}
                           
                          </div>
                      </div>                 
                  </section>
)
   
		// </div>
	// }


// }
