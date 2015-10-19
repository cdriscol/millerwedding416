(function() {
  'use strict';
  
  angular
    .module('animations')
    .animation('.image-fade', ImageFade);
    
  function ImageFade(TweenMax) {
    var animation = {
      addClass: addClass,
      removeClass: removeClass
    };
    return animation;
    
    function addClass(element, className, done) {
      if(className === 'ng-hide') {
        TweenMax.fromTo(element, 1, 
          {
            opacity:1,
          },
          { 
          opacity:0, 
          ease: Sine.easeOut
        });
      }
    }
    
    function removeClass(element, className, done) {
      if(className === 'ng-hide') {
        TweenMax.set(element, {opacity:0});
        TweenMax.fromTo(element, 1, 
        {
          opacity:0
        },
        { 
          opacity:1, 
          ease: Sine.easeIn
        });
      }
    }
  }
})();
