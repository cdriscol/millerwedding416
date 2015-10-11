'use strict';

angular.module('core')
.directive('mwSubscribe', mwSubscribe);

function mwSubscribe() {
  var directive = {
    scope: {
      mwThankYou: '@',
      mwPlaceholder: '@',
      mwInitialMessage: '@',
      mwEmailButtonMessage: '@',
    },
    templateUrl: 'modules/subscribe/client/views/subscribe.client.view.html',
    restrict: 'E',
    controller: 'SubscribeController',
    controllerAs: 'vm'
  };
  
  return directive;
}
