(function() {
  'use strict';

  angular
    .module('media')
    .controller('MediaDirectiveController', MediaDirectiveController);
    
  MediaDirectiveController.$inject = ['$scope', '$interval', 'MediaDirectiveService'];

  function MediaDirectiveController($scope, $interval, MediaDirectiveService) {
    var vm = this;
    vm.tag = $scope.mwTag;
    vm.speed = $scope.mwSpeed || 4;
    vm.recentImages = [];
    vm.currentIndex = 0;
    vm.lastId = undefined;
    vm.getCurrentImage = getCurrentImage;
    
    getRecentImages();
    
    $interval(getRecentImages, 20000);
    $interval(gotoNextImage, vm.speed * 1000);
    
    function getRecentImages() {
      MediaDirectiveService
        .getRecentImages(vm.tag)
        .then(setRecentImages)
        .then(setCurrentIndex)
        .then(setNoImages);
    }
    
    function setNoImages(images) {
      vm.noImages = images.length === 0;
    }
    
    function gotoNextImage() {
      if(vm.currentIndex === vm.recentImages.length-1 || vm.reset) {
        vm.currentIndex = 0;
        vm.reset = false;
      } else {
        vm.currentIndex++;
      }
    }
    
    function setCurrentIndex(images) {
      if(images.length && images[0].id !== vm.lastId) {
        vm.reset = true;
        vm.lastId = images[0].id;
      }
      return images;
    }
    
    function setRecentImages(data) {
      if(!vm.recentImages.length || vm.recentImages[0].id !== vm.lastId) {
        vm.recentImages = data.data;
      }
      return vm.recentImages;
    }
    
    function getCurrentImage() {
      return vm.recentImages[vm.currentIndex];
    }
  }
})();
