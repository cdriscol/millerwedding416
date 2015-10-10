'use strict';

angular.module('subscribe')
  .controller('SubscribeController', SubscribeController);
  
SubscribeController.$inject = ['$scope', '$http', '$timeout'];

function SubscribeController($scope, $http, $timeout) {
  var vm = this;
  vm.email = '';
  vm.subscribe = subscribe;
  vm.isValid = isValid;
  
  function subscribe() {
    vm.subscribed = true;
    $http.post('/subscribe', {email:vm.email})
      .then(function(res) {
        console.log('Subscription succeeded');
        $timeout(function() {
          vm.thankyou = true;
        }, 1500);
      }, function(err) {
        console.log('Error subscribing..');
        console.log(err);
      });
  }
  
  function isValid() {
    return validateEmail(vm.email);
  }
  
  function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }
}
