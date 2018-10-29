import React, { Component } from 'react';

export default class extends Component {

	state = {
	}

	render() {
		return <div>

                  <section class="github section">
                      <div class="section-inner">
                          <h2 class="heading">My GitHub</h2>
                          <p>You can embed your GitHub contribution graph calendar using IonicaBizau's <a href="https://github.com/IonicaBizau/github-calendar" target="_blank">GitHub Calendar</a> widget.
                          </p>
                          
                          <div id="github-graph" class="github-graph">

                          </div>

                          <p>You can also embed your GitHub activities using Casey Scarborough's <a href="https://caseyscarborough.com/projects/github-activity/" target="_blank">GitHub Activity Stream</a> widget.        
                          </p>
                                                 
                          <div id="ghfeed" class="ghfeed">
                          </div>
                          
                      </div>
                  </section>
   
		</div>
	}


}
