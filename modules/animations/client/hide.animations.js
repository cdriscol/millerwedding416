(function() {
  'use strict';
  
  angular
    .module('animations')
    .animation('.animate-hide', AnimateHide);
    
  function AnimateHide(TweenMax) {
    var animation = {
      addClass: addClass,
      removeClass: removeClass
    };
    return animation;
    
    function addClass(element, className, done) {
      if(className === 'ng-hide') {
        TweenMax.to(element, 2, { 
          opacity:0, 
          ease: Sine.easeOut
        });
      }
    }
    
    function removeClass(element, className, done) {
      if(className === 'ng-hide') {
        TweenMax.set(element, {opacity:0});
        TweenMax.to(element, 2, { 
          opacity:1, 
          ease: Sine.easeIn,
          delay:1
        });
      }
    }
  }
})();
