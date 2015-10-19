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
        TweenMax.fromTo(element, 1.2, 
          {
            css: {
              opacity:1,
              boxShadow: '0 0 25px #FFF',
            }
          },
          { 
            css: {
            opacity:0, 
            boxShadow: 'none',
          },
          ease: Sine.easeOut
        });
      }
    }
    
    function removeClass(element, className, done) {
      if(className === 'ng-hide') {
        TweenMax.fromTo(element, 1.2, 
        {
          css: {
            opacity:0,
            boxShadow: 'none',
          }
        },
        { 
          css: {
            boxShadow: '0 0 25px #FFF',
            opacity:1, 
          },
          ease: Sine.easeIn
        });
      }
    }
  }
})();
