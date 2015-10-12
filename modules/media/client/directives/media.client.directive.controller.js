(function() {
  'use strict';

  angular
    .module('media')
    .controller('MediaDirectiveController', MediaDirectiveController);
    
  MediaDirectiveController.$inject = ['$interval', 'MediaDirectiveService'];

  function MediaDirectiveController($interval, MediaDirectiveService) {
    var vm = this,
        _allImages = [],
        _speed = vm.mwSpeed || 4,
        _refresh = vm.mwRefresh || 20,
        _lastId, 
        _reset = false;
    
    vm.tag = vm.mwTag,
    vm.recentImages = [],
    vm.currentIndex = 0;
    
    getRecentImages();
    
    $interval(getRecentImages, _refresh * 1000);
    $interval(gotoNextImage, _speed * 1000);
        
    function getRecentImages() {
      MediaDirectiveService
        .getRecentImages(vm.tag, vm.mwClientId)
        .then(setAllImages)
        .then(setRecentImages)
        .then(setResetFlag)
        .then(setNoImages);
    }
    
    function setNoImages(images) {
      vm.noImages = images.length === 0;
    }
    
    function gotoNextImage() {
      if(vm.currentIndex === vm.recentImages.length-1 || _reset) {
        vm.currentIndex = 0;
        if(_reset) {
          _reset = false;
          vm.recentImages = _allImages;
        }        
      } else {
        vm.currentIndex++;
      }
    }
    
    function setResetFlag(images) {
      if(images.length && images[0].id !== _lastId) {
        _reset = true;
        _lastId = images[0].id;
      }
      return images;
    }
    
    function setAllImages(data) {
      _allImages = data.data;
      return _allImages;
    }
    
    function setRecentImages(images) {
      if(!vm.recentImages.length) {
        vm.recentImages = images;
      }
      return images;
    }
  }
})();
