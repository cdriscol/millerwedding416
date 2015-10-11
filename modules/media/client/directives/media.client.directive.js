(function() {
  'use strict';

  angular.module('media')
  .directive('mwInstagramFeed', mwInstagramFeed);

  function mwInstagramFeed() {
    var directive = {
      scope: {
        mwTag: '@',
        mwSpeed: '=',
      },
      templateUrl: 'modules/media/client/directives/media.client.template.html',
      restrict: 'E',
      controller: 'MediaDirectiveController',
      controllerAs: 'vm'
    };
    
    return directive;
  }
})();
