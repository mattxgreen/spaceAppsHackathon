(function() {
  "use strict";

  angular
    .module("myApp", ["ui.router"])
    .config(configFunction);

    configFunction.$inject = ['$stateProvider', '$urlRouterProvider']

    function configFunction($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state("home", {
          url: "/",
          templateUrl: "/html/home.html",
          controller: "homeCtrl"
        })
        .state("map", {
          url: "/map",
          templateUrl: "/html/map.html",
          controller: "mapCtrl"
        })

      $urlRouterProvider.otherwise("/");
    }
})();
