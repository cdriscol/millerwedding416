(function(moment) {
  'use strict';
  
  angular
    .module('core')
    .directive('mwCountdown', mwCountdown);
    
  function mwCountdown() {
    var directive = {
      restrict: 'A',
      link: link
    };
    
    function link(scope, element, attrs) {
      var weddingDay = [2016, 3, 16];
      var a = moment(weddingDay);
      var b = moment();
      var days = a.diff(b, 'days');
      element.append('Married in ' + days + ' days');
    }
    
    return directive;
  }
})(moment);
