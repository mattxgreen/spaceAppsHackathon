(function () {
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

    abLayoutController.$inject = ['$scope', 'SnapshotService', '$state'];

    function abLayoutController($scope, SnapshotService, $state) {
        var vm = this;

        // View model methods
        vm.addSnapshot = addSnapshot;

        vm.user = {
            cough: 1,
            short: 1,
            wheezing: 1,
            sneezing: 1,
            nobstruction: 1,
            itchy: 1
        };

        vm.slider = {
            options: {
                floor: 1,
                ceil: 5,
                showSelectionBar: true,
                getSelectionBarColor: function (value) {
                    if (value === 1)
                        return '#1f0';
                    if (value === 2)
                        return '#40bf00';
                    if (value === 3)
                        return '#bb6600';
                    if (value === 4)
                        return '#dd4000';
                    if (value === 5)
                        return '#f10';
                    return '#333';
                },
                getPointerColor: function (value) {
                    if (value === 1)
                        return '#1f0';
                    if (value === 2)
                        return '#40bf00';
                    if (value === 3)
                        return '#bb6600';
                    if (value === 4)
                        return '#dd4000';
                    if (value === 5)
                        return '#f10';
                    return '#333';
                }
            }
        };

        navigator.geolocation.getCurrentPosition(function (position) {
            vm.user.lat = position.coords.latitude.toFixed(2);
            vm.user.lon = position.coords.longitude.toFixed(2);
        });

        function addSnapshot() {
            if (vm.user) {
                SnapshotService
                    .send(vm.user)
                    .success(function (res) {
                        $("#myModal").modal("hide");
                    })
            }
        }

        // console.log($scope.user);
    }

})();
