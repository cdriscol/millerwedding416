(function() {
  'use strict';
  
  // Setting up route
  angular
    .module('media')
    .config(config);
  
  function config($stateProvider) {  
    $stateProvider
      .state('media', {
        url: '/instagram',
        templateUrl: 'modules/media/client/views/media.client.view.html',
        controller: 'MediaController',
        controllerAs: 'vm'
      });
  }
})();
