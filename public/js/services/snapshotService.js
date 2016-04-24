(function() {
  "use strict";

  angular
    .module("myApp")
    .factory("SnapshotService", SnapshotService)

    SnapshotService.$inject = ['$http'];

    function SnapshotService ($http) {

			var service = {
				send: send,
				getAll: getAll
			};
			return service;

      function send(user) {
        return $.ajax({
          method: 'POST',
          url : 'https://7d298d1b.ngrok.io/api',
          data: user
        })
      }
      function getAll() {
        return $.ajax({
          method: 'GET',
          url : 'https://7d298d1b.ngrok.io/api/all'
        })
      }
    }

})();
