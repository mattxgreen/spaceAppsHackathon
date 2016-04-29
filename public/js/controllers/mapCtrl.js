(function() {

  "use strict";
  angular
    .module("myApp")
    .controller("mapCtrl", mapCtrl);

  mapCtrl.$inject = ['$scope', 'SnapshotService', '$window', 'GraphService','PRISM_SERVER'];

  function mapCtrl($scope, SnapshotService, $window, GraphService,PRISM_SERVER) {

    $window.map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 37.32,
        lng: -121.12
      },
      zoom: 4
    });

    var getTileUrl = function(tile, zoom) {
      return "//map1.vis.earthdata.nasa.gov/wmts-webmerc/" +
             "MODIS_Terra_Aerosol/default/2016-04-27/" +
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
      url: PRISM_SERVER+'/api/all',
      type: 'GET'
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

      var sickCities = [
        [40.7127837,-74.0059413],
        [41.8781136,-87.6297982],
        [29.7604267,-95.3698028],
        [33.4483771,-112.0740373],
        [29.4241219,-98.49362819999999],
        [32.715738,-117.1610838],
        [32.7766642,-96.79698789999999],
        [37.3382082,-121.8863286],
        [30.267153,-97.7430608],
        [39.768403,-86.158068],
        [30.3321838,-81.65565099999999],
        [37.7749295,-122.4194155],
        [39.9611755,-82.99879419999999],
        [35.2270869,-80.8431267],
        [42.331427,-83.0457538],
        [31.7775757,-106.4424559],
        [35.1495343,-90.0489801],
        [47.6062095,-122.3320708],
        [36.1626638,-86.7816016],
        [39.2903848,-76.6121893],
        [45.5230622,-122.6764816],
        [36.1699412,-115.1398296],
        [43.0389025,-87.9064736],
        [35.0853336,-106.6055534],
        [32.2217429,-110.926479],
        [36.7468422,-119.7725868],
        [39.0997265,-94.5785667],
        [33.4151843,-111.8314724],
        [33.7489954,-84.3879824],
        [38.8338816,-104.8213634],
        [41.2523634,-95.99798829999999],
        [35.7795897,-78.6381787],
        [37.8043637,-122.2711137],
        [44.977753,-93.2650108],
        [41.49932,-81.6943605],
        [37.688889,-97.336111],
        [32.735687,-97.10806559999999],
        [29.95106579999999,-90.0715323],
        [39.116015,-84.515004]
      ]

      for (var i = 0; i < sickCities.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(sickCities[i][0], sickCities[i][1]),
          map: map
        });
      }
    });
  }
})();
/**
 * Created by root on 4/27/2016.
 */
