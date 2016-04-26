(function() {

  "use strict";
  angular
    .module("myApp")
    .controller("homeCtrl", homeCtrl);

  homeCtrl.$inject = ['$scope', 'SnapshotService', '$window', 'GraphService'];

  function homeCtrl($scope, SnapshotService, $window, GraphService) {
    var vm = this;

    $window.map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 37.32,
        lng: -121.12
      },
      zoom: 4
    });

    var getTileUrl = function(tile, zoom) {
      return "//map1.vis.earthdata.nasa.gov/wmts-webmerc/" +
             "MODIS_Terra_Aerosol/default/2013-12-02/" +
             "GoogleMapsCompatible_Level6/" +
              zoom + "/" + tile.y + "/" +
              tile.x + ".png";
    };

      var layerOptions = {
        alt: "MODIS_Terra_Aerosol",
        getTileUrl: getTileUrl,
        maxZoom: 6,
        minZoom: 1,
        name: "MODIS_Terra_Aerosol",
        tileSize: new google.maps.Size(256, 256),
        opacity: 0.5
      };

      var imageMapType = new google.maps.ImageMapType(layerOptions);
      map.overlayMapTypes.insertAt(0, imageMapType);


      var request = $.ajax({
        url: 'https://7d298d1b.ngrok.io/api/all', //this route needs to return a json string with a objects that have 'latitude'
                           //and 'longitude' properties. It's okay if they have other irrelevant properties.
        type: 'GET',
        // datatype: 'json'
      });

      request.done(function(response){
        var coords = [];

        response.forEach(function(set){
          coords.push([set.lat, set.lon]);
        });

        var infowindow = new google.maps.InfoWindow();
        var marker;

        for (var i = 0; i < coords.length; i++) {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(coords[i][0], coords[i][1]),
            map: map
          });
        }

      });
    //
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
                    x: num
                    , y: num*20 + random()*20
                    , size: Math.random()
                    , shape: shapes[j % 6]
                });
            }
        }
        return data;
    }
  }
})();
