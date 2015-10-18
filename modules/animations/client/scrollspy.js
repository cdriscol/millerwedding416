(function($) {
  'use strict';
  
  angular.module('animations')
  .directive('pageScroll', pageScroll);
  
  function pageScroll() {
    var directive = {
      restrict: 'C',
      link: link
    };
    return directive;
    
    function link(scope, element, attrs) {
      $(element).bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset() ? $($anchor.attr('href')).offset().top : 0
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
      });
    }    
  }
  
  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
      target: '.navbar-fixed-top'
  });
})(jQuery);
