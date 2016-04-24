(function() {
  "use strict";

  angular
    .module("myApp", ["ui.router", "nvd3", "rzModule"])
    .config(configFunction);

    configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configFunction($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state("home", {
          url: "/",
          templateUrl: "/html/home.html",
          controller: "homeCtrl"
        })
        .state("input", {
          url: "/input",
          templateUrl: "/html/input.html",
          controller: "inputCtrl"
        })
        .state("graph", {
          url: "/graph",
          templateUrl: "/html/graph.html",
          controller: "graphCtrl"
        })

      $urlRouterProvider.otherwise("/");
    }
})();
