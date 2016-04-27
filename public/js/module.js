(function () {
    "use strict";

    angular
        .module("myApp", [

            // Third party modules
            "ui.router",
            "nvd3",
            "rzModule",

            // Custom modules
            "app.layout"])
        .constant('PRISM_SERVER', 'http://localhost:3000')
        .config(configFunction);
    // .config(mapsConsfig)

    configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];
    // mapsConfig.$inject = ['uiGmapGoogleMapApiProvider'];

    function configFunction($stateProvider, $urlRouterProvider) {
        $stateProvider
        // .state("home", {
        //   url: "/",
        //   templateUrl: "/html/home.html",
        //   controller: "homeCtrl",
        //   controllerAs: 'vm'
        // })
            .state("input", {
                url: "/input",
                templateUrl: "/html/input.html",
                controller: "inputCtrl",
                controllerAs: 'vm'
            })
            .state("graph", {
                url: "/graph",
                templateUrl: "/html/graph.html",
                controller: "graphCtrl",
                controllerAs: 'vm'
            })
            .state("map", {
                url: '/map',
                templateUrl: "/html/map.html",
                controller: "mapCtrl"
            })
            .state("globe", {
                url: '/globe',
                templateUrl: "/html/globe.html",
                controller: "globeCtrl"
            });

        $urlRouterProvider.otherwise("/graph");
    }

    // function mapsConfig(uiGmapGoogleMapApiProvider) {
    //   uiGmapGoogleMapApiProvider.configure({
    //       //    key: 'your api key',
    //       v: '3.20', //defaults to latest 3.X anyhow
    //       libraries: 'weather,geometry,visualization'
    //   });
    // }

})();
