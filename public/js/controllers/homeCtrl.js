(function()  {

"use strict";
angular
  .module("myApp")
  .controller("homeCtrl", homeCtrl);

  homeCtrl.$inject = ['$scope', 'SnapshotService', '$state']

  function homeCtrl($scope, SnapshotService, $state) {
    $scope.user = {};

    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position);
      $scope.user.lat = position.coords.latitude.toFixed(2);
      $scope.user.lon = position.coords.longitude.toFixed(2);
    })

    $scope.addSnapshot = function() {
      if($scope.user) {
        console.log($scope.user);
        SnapshotService.send($scope.user)
        .then(function(res) {
          console.log('res', res);
          $state.go('map');
        }, function(err) {
          console.log('err', err);
        })
      }
      }
      // console.log($scope.user);

    $scope.something = function() {
      console.log($scope.test);
    }

  }
})();
