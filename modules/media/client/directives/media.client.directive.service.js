(function() {
  'use strict';
  
  angular
    .module('media')
    .service('MediaDirectiveService', MediaDirectiveService);
    
  MediaDirectiveService.$inject = ['$http'];
    
  function MediaDirectiveService($http) {
    var service = {
      getRecentImages: getRecentImages
    };
    return service;
    
    function getRecentImages(tag) {
      var clientId = '94442b697f814951a879e5bdbcc5a346';
      var endpoint = 'https://api.instagram.com/v1/tags/';
      endpoint += tag;
      endpoint += '/media/recent?client_id=';
      endpoint += clientId;
      endpoint += '&callback=JSON_CALLBACK';
      
      return $http
        .jsonp(endpoint)
        .then(function(res) {
          return res.data;
        })
        .catch(function() {
          console.error('Error calling ' + endpoint);
        });
    }
  }
})();
