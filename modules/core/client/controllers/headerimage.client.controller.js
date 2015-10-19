(function() {
  'use strict';
  
  angular
    .module('core')
    .controller('HeaderImageController', HeaderImageController);
  
  HeaderImageController.$inject = ['$scope', '$interval'];
  
  function HeaderImageController($scope, $interval) {
    $scope.currentImage = 1;
    $scope.imageCount = 4;
    
    $interval(nextImage, 5000);
    
    function nextImage() {
      if($scope.currentImage === $scope.imageCount) {
        $scope.currentImage = 1;
      } else {
        $scope.currentImage++;
      }
    }
  }
})();
