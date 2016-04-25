(function() {
  "use strict";

  angular
    .module("myApp", ["ui.router", "nvd3", "rzModule"])
    .config(configFunction);
    // .config(mapsConsfig)

    configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];
    // mapsConfig.$inject = ['uiGmapGoogleMapApiProvider'];

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

    // function mapsConfig(uiGmapGoogleMapApiProvider) {
    //   uiGmapGoogleMapApiProvider.configure({
    //       //    key: 'your api key',
    //       v: '3.20', //defaults to latest 3.X anyhow
    //       libraries: 'weather,geometry,visualization'
    //   });
    // }

})();
