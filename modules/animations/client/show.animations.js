(function(TweenMax) {
  'use strict';
  
  angular.module('animations')
    .animation('.show-hide', ShowHideAnimation);
    
  function ShowHideAnimation() {
    var animation = {
      addClass: addClass,
      removeClass: removeClass
    };
    return animation;
    
    function addClass(element, className, done) {
      if(className === 'ng-hide') {
        TweenMax.set(element, {opacity:1});
        TweenMax.to(element, 2, { 
          opacity:0, 
          ease: Sine.easeOut,
          display: 'none'
        });
      }
    }
    
    function removeClass(element, className, done) {
      if(className === 'ng-hide') {
        TweenMax.set(element, {opacity:0});
        TweenMax.to(element, 2, { 
          opacity:1, 
          ease: Sine.easeIn,
          delay:1,
          display:'block'
        });
      }
    }
  }
})(TweenMax);
