jQuery(document).ready(function($) {


  /*======= Skillset *=======*/

  $('.level-bar-inner').css('width', '0');

  $(window).on('load', function() {

    $('.level-bar-inner').each(function() {

      var itemWidth = $(this).data('level');

      $(this).animate({
        width: itemWidth
      }, 800);

    });

  });

  /* Bootstrap Tooltip for Skillset */
  // $('.level-label').tooltip();



  /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
  if (!/localhost/.test(document.URL) && $("#ghfeed").length > 0) {
    console.log('retrieving github activity for #ghfeed');
    GitHubActivity.feed({ username: "semlak", selector: "#ghfeed" });
  }
  else {
    console.log('not retrieving github activity for #ghfeed, due to being run on localhost.');
  }


});
