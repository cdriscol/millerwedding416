(function() {
  'use strict';
  
  angular
    .module('animations')
    .animation('.ig-image', IgImageAnimation);
    
  function IgImageAnimation($window, TweenMax) {
    var animation = {
      enter: enter,
      leave: leave
    };
    return animation;
    
    function leave(element, className, done) {
      TweenMax.fromTo(element, 2, 
        { 
          css: {
            opacity:1,
            top: '50%',
            right: '50%'
          },
          scale: 1,
          rotation:0 },
        { opacity:0, 
          ease: Power1.easeInOut,
          css: {
            top: -$window.innerHeight,
            left: '200%',
            boxShadow: 'none'
          },
          scale: 0,
          rotation: 180
        });
    }
    
    function enter(element, className, done) {
      TweenMax.fromTo(element, 2, 
        { 
          css: {
            opacity:0,
            top: -$window.innerHeight,
            left: -$window.innerWidth
          },
          scale: 100,
          rotation:-180 },
        { 
          css: {
            opacity:1, 
            top: '50%',
            left: '50%',
            boxShadow: '0px 0px 50px white'
          },
          ease: Power1.easeInOut,
          scale: 1,
          rotation: 0
        });
    }
  }
})();
