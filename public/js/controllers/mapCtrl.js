(function() {

    "use strict";
    angular
      .module("myApp")
      .controller("mapCtrl", mapCtrl);

    mapCtrl.$inject = ['$scope', 'SnapshotService']

    function mapCtrl($scope, SnapshotService) {
    	SnapshotService.getAll()
      .then(function(res) {
        console.log('res', res);
      }, function(err) {
        console.log('err', err);
      })



  }
})();
