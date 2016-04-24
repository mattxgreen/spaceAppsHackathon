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
    });

    $scope.addSnapshot = function() {

      // console.log($scope.user);

      SnapshotService.send($scope.user)
      .then(function(res) {
        console.log('res', res);
         $state.go('map');
      }, function(err) {
        console.log('err', err);
      })
    };

    $scope.something = function() {
      console.log($scope.test);
    };

    $scope.slider = {
      coughSlider: 1,
      itchy:1,
      obstruction:1,
      sneezing:1,
      wheezing:1,
      shortness:1,
      options: {
        floor: 1,
        ceil: 5,
        showSelectionBar: true,
        getSelectionBarColor: function(value) {
            if (value === 1)
                return '#1f0';
            if (value === 2)
                return '#40bf00';
            if (value === 3)
                return '#bb6600';
            if (value === 4)
                return '#dd4000';
            if (value === 5)
                return '#f10';
            return '#333';
        },
        getPointerColor: function(value) {
            if (value === 1)
                return '#1f0';
            if (value === 2)
                return '#40bf00';
            if (value === 3)
                return '#bb6600';
            if (value === 4)
                return '#dd4000';
            if (value === 5)
                return '#f10';
            return '#333';
        }
      }
};

  }
})();
