(function() {
    'use strict';

    angular
      .module('app.layout')
      .directive('abLayout', abLayout);

    function abLayout() {
      return {
        templateUrl: '/html/layout.html',
        restrict: 'E',
        scope: {},
        controller: abLayoutController,
        controllerAs: 'vm'
        };
    }

    function abLayoutController() {
      var vm = this;
    }

})();
