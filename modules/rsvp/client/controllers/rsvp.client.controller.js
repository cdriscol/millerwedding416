(function() {
    'use strict';

    angular
      .module('rsvp')
      .controller('RsvpController', RsvpController);

    RsvpController.$inject = ['$scope', '$http'];
    function RsvpController($scope, $http) {
      var vm = this;
      vm.rsvp = rsvp;
      vm.oneInvites = [];
      vm.hideSecondInvite = hideSecondInvite;
      vm.isValid = isValid;
      vm.rsvpData = {};

      function validateFields() {
         delete vm.error;
         if(!vm.rsvpData.firstName) {
             vm.error = 'We need your first name.';
             return;
         }

         if(!vm.rsvpData.lastName) {
             vm.error = 'We need your last name.';
             return;
         }

         if(!vm.rsvpData.guests) {
             vm.error = 'Please provide how many guests you plan to bring.';
             return;
         }
      }

      function rsvp() {
        validateFields();
        if(!vm.error) {
            $http.post('/rsvp', vm.rsvpData)
              .then(function(res) {
                console.log('RSVP succeeded');
                vm.rsvpd = true;
              }, function(err) {
                console.log('RSVP subscribing..');
                console.log(err);
              });
        }
      }

      function isValid() {
        return validateEmail(vm.email);
      }

      function validateEmail(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
      }

      function disableInvites() {
          return !vm.rsvpData.firstName || !vm.rsvpData.lastName;
      }

      function hideSecondInvite() {
          if(vm.rsvpData.firstName && vm.rsvpData.lastName) {
              for(var i=0;i<vm.oneInvites.length;i++){
                  var oneInvite = vm.oneInvites[i];
                  var oneInviteFnLower = oneInvite.firstname.toLowerCase();
                  var oneInviteLnLower = oneInvite.lastname.toLowerCase();
                  var rsvpDataFnLower = vm.rsvpData.firstName.toLowerCase();
                  var rsvpDataLnLower = vm.rsvpData.lastName.toLowerCase();
                  var isMatch = oneInviteFnLower === rsvpDataFnLower && oneInviteLnLower === rsvpDataLnLower;
                  if(isMatch) return true;
              }
          }
          return false;
      }

      function init() {
          $http.get('/rsvp/oneInvites')
          .then(function(res){
              vm.oneInvites = res.data;
          })
          .catch(function(err) {
             console.log('error getting one invites');
             console.log(err);
          });
      }

      init();
    }
})();
