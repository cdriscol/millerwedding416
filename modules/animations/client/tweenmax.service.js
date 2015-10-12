(function(TweenMax) {
  'use strict';
  
  angular
    .module('animations')
    .service('TweenMax', TweenMaxService);
    
  function TweenMaxService() {
    return TweenMax;
  }
})(TweenMax);
