(function(TweenMax) {
  'use strict';
  
  angular.module('animations')
    .directive('fadeIn', FadeInDirective);
    
  function FadeInDirective() {
    var directive = {
      restrict: 'C',
      link: link
    };
    
    function link(scope, element, attrs) {
      TweenMax.set(element, {opacity:0});
      TweenMax.to(element, 2, {
        opacity:1, 
        ease: Sine.easeIn
      });
    }
    
    return directive;
  }
})(TweenMax);
