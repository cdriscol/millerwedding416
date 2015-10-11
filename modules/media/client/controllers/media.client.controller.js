(function() {
  'use strict';

  angular
    .module('media')
    .controller('MediaController', MediaController);
    
  MediaController.$inject = ['$scope', '$location'];

  function MediaController($scope, $location) {
    var vm = this;
    vm.tag = $location.search().tag || 'millerwedding416';
  }
})();
