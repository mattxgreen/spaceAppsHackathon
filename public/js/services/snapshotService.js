(function() {
  "use strict";
  angular
    .module("myApp")
    .factory("SnapshotService", SnapshotService);
    SnapshotService.$inject = ['PRISM_SERVER'];
    function SnapshotService (PRISM_SERVER) {
			var service = {
				send: send,
				getAll: getAll
			};
			return service;

      function send(user) {
        return $.ajax({
          method: 'POST',
          url : PRISM_SERVER+'/api',
          data: user
        })
      }
      function getAll() {
        return $.ajax({
          method: 'GET',
          url : PRISM_SERVER+'/api/all'
        })
      }
    }

})();
