import React, { Component } from 'react';

export default props => (
  <section class="latest section">
    <div class="section-inner">
        <h2 class="heading">Latest Projects</h2>
        <div class="content">    
                               
            <div class="item featured text-center">
                <h3 class="title"><a href="https://international-intern.herokuapp.com" target="_blank">International Intern</a></h3>
                <p class="summary">An Internship Tracking tool. Record your experiences with a Journal, track your Expenses, and stay up to date with local news.</p>
                <div class="featured-image has-ribbon">
                    <a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/velocity-bootstrap-theme-for-startup-products/" target="_blank">
                    <img class="img-fluid project-image" src="./assets/images/portfolio/internationalIntern.png" alt="project name" />
                    </a>
                    <div class="ribbon">
                        <div class="text">New</div>
                    </div>
                </div>
                    
                <div class="desc text-left">                                    
                    <p>You can promote your main project here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                </div>         
                {/*
                <a class="btn btn-cta-secondary" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/velocity-bootstrap-theme-for-startup-products/" target="_blank"><i class="fas fa-thumbs-up"></i> Back my project</a>                 
                */}
            </div>

            <hr class="divider" />

            <div class="item row">
                <a class="col-md-4 col-12" href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/instance-bootstrap-portfolio-theme-for-developers/" target="_blank">
                <img class="img-fluid project-image" src="assets/images/projects/project-1.png" alt="project name" />
                </a>
                <div class="desc col-md-8 col-12">
                    <h3 class="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/instance-bootstrap-portfolio-theme-for-developers/" target="_blank">Instance - Bootstrap 4 Portfolio Theme for Aspiring Full Stack Developers</a></h3>
                    <p class="mb-2">You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.</p>
                    <p><a class="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/instance-bootstrap-portfolio-theme-for-developers/" target="_blank"><i class="fas fa-external-link-alt"></i>Find out more</a></p>
                </div>                          
            </div>
            
            {/*
            <div class="item row">
                <a class="col-md-4 col-12" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devstudio-bootstrap-theme-for-web-development-agencies-and-developers/" target="_blank">
                <img class="img-fluid project-image" src="assets/images/projects/project-2.png" alt="project name" />
                </a>
                <div class="desc col-md-8 col-12">
                    <h3 class="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devstudio-bootstrap-theme-for-web-development-agencies-and-developers/" target="_blank">DevStudio - Bootstrap 4 Theme for WebDev Agencies and Freelance Developers</a></h3>
                    <p class="mb-2">You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.</p>
                    <p><a class="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devstudio-bootstrap-theme-for-web-development-agencies-and-developers/" target="_blank"><i class="fas fa-external-link-alt"></i>Find out more</a></p>
                </div>                          
            </div>
            
             <div class="item row">
                <a class="col-md-4 col-12" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/startupkit-bootstrap-theme-for-saas-startups/" target="_blank">
                <img class="img-fluid project-image" src="assets/images/projects/project-3.png" alt="project name" />
                </a>
                <div class="desc col-md-8 col-12">
                    <h3 class="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/startupkit-bootstrap-theme-for-saas-startups/" target="_blank">Startup Kit - Bootstrap 4 Theme for SaaS Startups</a></h3>
                    <p class="mb-2">You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.</p>
                    <p><a class="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/startupkit-bootstrap-theme-for-saas-startups/" target="_blank"><i class="fas fa-external-link-alt"></i>Find out more</a></p>
                </div>                          
            </div>
            
            <div class="item row">
                <a class="col-md-4 col-12" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/tempo-bootstrap-theme-for-startups/" target="_blank">
                <img class="img-fluid project-image" src="assets/images/projects/project-4.png" alt="project name" />
                </a>
                <div class="desc col-md-8 col-12">
                    <h3 class="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/tempo-bootstrap-theme-for-startups/" target="_blank">Tempo - Bootstrap 4 Theme for Startups</a></h3>
                    <p class="mb-2">You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.</p>
                    <p><a class="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/tempo-bootstrap-theme-for-startups/" target="_blank"><i class="fas fa-external-link-alt"></i>Find out more</a></p>
                </div>                          
            </div>                            
            <div class="item row">
                <a class="col-md-4 col-12" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/delta-bootstrap-theme-for-mobile-apps/" target="_blank">
                <img class="img-fluid project-image" src="assets/images/projects/project-5.png" alt="project name" />
                </a>
                <div class="desc col-md-8 col-12">
                    <h3 class="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/delta-bootstrap-theme-for-mobile-apps/" target="_blank">Delta - Bootstrap 4 Theme for Promoting Mobile Apps</a></h3>
                    <p class="mb-2"> You can put one of your secondary projects here. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
                    <p><a class="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/delta-bootstrap-theme-for-mobile-apps/" target="_blank"><i class="fas fa-external-link-alt"></i>Find out more</a></p>
                </div>                          
            </div>
            */}
            
        </div>  
    </div>                 
  </section>
)
 
