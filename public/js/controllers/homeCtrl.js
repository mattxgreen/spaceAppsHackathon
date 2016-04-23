"use strict";

angular
  .module("myApp")

  .controller("homeCtrl", function($scope, SnapshotService) {
    $scope.addSnapshot = function() {
      $scope.user.loc = {};
      $scope.user.loc.type = [];
      $scope.user.loc.type.push($scope.input.lat, $scope.input.long);
      $scope.user.loc.index = '2dsphere'
      SnapshotService.send($scope.user)
    }

})
