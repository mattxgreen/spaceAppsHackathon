(function() {
  "use strict";

  angular
    .module("myApp")
    .service("SnapshotService", SnapshotService)

    SnapshotService.$inject = ['$http'];

    function SnapshotService ($http) {
      this.send = function(user) {
        console.log(user);
        http.post('/something', user);
      }
    }

})();
