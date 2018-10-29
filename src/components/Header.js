import React, { Component } from 'react';

export default class extends Component {

	state = {
	}

	render() {
		return <div>

      <header class="header">
          <div class="container clearfix">                       
              <img class="profile-image img-fluid float-left" src="./assets/images/joseph_picture.jpg" alt="Joseph Semlak"  />
              <div class="profile-content float-left">
                  <h1 class="name">Joseph Semlak</h1>
                  <h2 class="desc">Fullstack Javascript Web Application Developer</h2>   
                  <ul class="social list-inline">
                      <li class="list-inline-item"><a href="https://www.linkedin.com/in/joseph-semlak-ba829898/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                      <li class="list-inline-item"><a href="https://github.com/semlak" target="_blank"><i class="fab fa-github-alt"></i></a></li>    
                      <li class="list-inline-item"><a href="https://stackexchange.com/users/3880192/joseph" target="_blank"><i class="fab fa-stack-overflow"></i></a></li>   
                      <li class="list-inline-item last-item"><a href="https://app.codesignal.com/profile/joseph_s60" target="_blank"><i class="fas fa-code"></i></a></li>                
                      <li class="list-inline-item"><a href="https://twitter.com/joseph_semlak" target="_blank"><i class="fab fa-twitter"></i></a></li>                   
                  </ul> 
              </div>
              <a class="btn btn-cta-primary float-right" href="https://themes.3rdwavemedia.com/" target="_blank"><i class="fas fa-paper-plane"></i> Contact Me</a>              
          </div>
      </header>
   
		</div>
	}


}
