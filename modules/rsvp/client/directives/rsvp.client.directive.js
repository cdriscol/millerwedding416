(function() {
    'use strict';

    angular
        .module('core')
        .directive('mwRsvp', mwRsvp);

    function mwRsvp() {
      var directive = {
        scope: {},
        templateUrl: 'modules/rsvp/client/views/rsvp.client.view.html',
        restrict: 'E',
        controller: 'RsvpController',
        controllerAs: 'vm'
      };

      return directive;
    }
})();
