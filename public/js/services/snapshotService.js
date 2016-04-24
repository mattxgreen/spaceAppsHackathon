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
			
			/////////
			
      function send(user) {
        console.log(user);
        return $.ajax({
          method: 'POST',
          url : 'https://d645291f.ngrok.io/api',
          data: user
        })
      }
			
      function getAll(user) {
        console.log(user);
        return $.ajax({
          method: 'GET',
          url : 'https://d645291f.ngrok.io/api'
        })
      }
    }

})();
