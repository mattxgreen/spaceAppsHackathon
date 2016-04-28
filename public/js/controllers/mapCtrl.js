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
        url: PRISM_SERVER+'/api/all', //this route needs to return a json string with a objects that have 'latitude'
                           //and 'longitude' properties. It's okay if they have other irrelevant properties.
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
      });

      
  }
})();
/**
 * Created by root on 4/27/2016.
 */
