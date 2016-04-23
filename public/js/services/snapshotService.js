(function() {
  "use strict";

  angular
    .module("myApp")
    .service("SnapshotService", SnapshotService)

    SnapshotService.$inject = ['$http'];

    function SnapshotService ($http) {
      this.send = function(user) {
        console.log(user);
        return $.ajax({
          method: 'POST',
          url : 'https://d645291f.ngrok.io/api',
          data: user
        })
      }
    }

})();
