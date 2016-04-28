(function() {

  "use strict";
  angular
    .module("myApp")
    .controller("graphCtrl", graphCtrl);

  graphCtrl.$inject = ['$scope', 'SnapshotService', '$window', 'GraphService','PRISM_SERVER'];

  function graphCtrl($scope, SnapshotService, $window, GraphService,PRISM_SERVER) {
    var vm = this;
    vm.options = {
        chart: {
            type: 'scatterChart',
            height: 450,
            color: d3.scale.category10().range(),
            scatter: {
                onlyCircles: true
            },
            showDistX: true,
            showDistY: true,
          //tooltipContent: function(d) {
          //    return d.series && '<h3>' + d.series[0].key + '</h3>';
          //},
            duration: 350,
            xAxis: {
                axisLabel: 'X Axis',
                tickFormat: function(d){
                    return d3.format('.02f')(d);
                }
            },
            yAxis: {
                axisLabel: 'Y Axis',
                tickFormat: function(d){
                    return d3.format('.02f')(d);
                },
                axisLabelDistance: -5
            },
            zoom: {
                //NOTE: All attributes below are optional
                enabled: true,
                scaleExtent: [1, 10],
                useFixedDomain: false,
                useNiceScale: false,
                horizontalOff: false,
                verticalOff: false,
                unzoomEventType: 'dblclick.zoom'
            }
        }
    };

    vm.data = generateData(4,30);

    /* Random Data Generator (took from nvd3.org) */
    function generateData(groups, points) {
        var data = [],
            shapes = ['circle'],
            random = d3.random.normal();

        var symptoms = ['Cough', 'Shortness of Breath', 'Wheezing', 'Sneezing']

        for (var i = 0; i < groups; i++) {
            data.push({
                key: symptoms[i],
                values: []
            });

            for (var j = 0; j < points; j++) {
                var num = Math.abs(Math.floor(random()*2));
                data[i].values.push({
                    x: num,
                    y: num*20 + random()*20,
                    size: Math.random(),
                    shape: shapes[j % 6]
                });
            }
        }
        return data;
    }
  }
})();
