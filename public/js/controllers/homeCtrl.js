(function()  {

"use strict";
angular
  .module("myApp")
  .controller("homeCtrl", homeCtrl);

  homeCtrl.$inject = ['$scope', 'SnapshotService', '$state']

  function homeCtrl($scope, SnapshotService, $state) {
    $scope.addSnapshot = function() {
      $scope.user.loc = {};
      $scope.user.loc.type = [];
      $scope.user.loc.type.push($scope.input.lat, $scope.input.long);
      $scope.user.loc.index = '2dsphere'

      SnapshotService.send($scope.user)
      $state.go('map')
      .then(function(res) {
        console.log('res', res);
        // $state.go('map');
      }, function(err) {
        console.log('err', err);
      })
    }
  }
})();
