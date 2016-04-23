(function() {
  "use strict";

  angular
    .module("myApp")
    .service("SnapshotService", SnapshotService)

    SnapshotService.$inject = ['$http'];

    function SnapshotService ($http) {
      this.send = function(user) {
        console.log(user);
        // return true;
        return $http.post('http://8d7aa83a.ngrok.io/api', user);
      }
    }

})();
