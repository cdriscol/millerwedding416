(function() {
  'use strict';
  
  angular
    .module('animations')
    .animation('.hide-right', AnimateHideRight);
  
  function AnimateHideRight(TweenMax) {
    var animation = {
      addClass: addClass,
      removeClass: removeClass
    };
    return animation;
    
    function addClass(element, className, done) {
      if(className === 'ng-hide') {
        if(!element.css('right')) TweenMax.set(element, {right:'0px'});  
        TweenMax.to(element, 2, { 
          right:'-100%', 
          opacity:0, 
          ease: Sine.easeOut,
        });
      }
    }
    
    function removeClass(element, className, done) {
      if(className === 'ng-hide') {
        TweenMax.to(element, 2, { 
          right:'0', 
          opacity:1, 
          ease: Sine.easeIn
        });
      }
    }
  }
})();
