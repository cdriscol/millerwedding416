(function(TweenMax) {
  'use strict';
  
  angular.module('animations')
    .animation('.ig-image', IgImageAnimation);
    
  function IgImageAnimation($window) {
    var animation = {
      enter: enter,
      leave: leave
    };
    return animation;
    
    function leave(element, className, done) {
      TweenMax.fromTo(element, 2, 
        { opacity:1,
          top: '50%',
          right: '50%',
          scale: 1,
          rotation:0 },
        { opacity:0, 
          ease: Power1.easeInOut,
          top: -$window.innerHeight,
          left: '200%',
          scale: 0,
          rotation: 180,
          boxShadow: 'none'
        });
    }
    
    function enter(element, className, done) {
      TweenMax.fromTo(element, 2, 
        { opacity:0,
          top: -$window.innerHeight,
          left: -$window.innerWidth,
          scale: 100,
          rotation:-180 },
        { opacity:1, 
          ease: Power1.easeInOut,
          top: '50%',
          left: '50%',
          scale: 1,
          rotation: 0,
          boxShadow: '0px 0px 50px white'
        });
    }
  }
})(TweenMax);
