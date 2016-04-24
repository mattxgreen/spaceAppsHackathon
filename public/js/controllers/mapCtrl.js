(function()  {

"use strict";
angular
  .module("myApp")
  .controller("mapCtrl", mapCtrl);

  mapCtrl.$inject = ['$scope', 'SnapshotService']

  function mapCtrl($scope, SnapshotService) {
		SnapshotService.getAll();
  }
})();
