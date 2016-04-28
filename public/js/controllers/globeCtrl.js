/**
 * Created by root on 4/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('globeCtrl',globeCtrl);

    // globeCtrl.$inject = [''];

    function globeCtrl () {


      if(!Detector.webgl){
      			Detector.addGetWebGLMessage();
      		}
      		else{

      	    	console.log("Detector.js loaded!");

      	        var years = ['2016','2015','2014','2013'];
      	        var container = document.getElementById('container');
      	        console.log(container);
      	        var globe = new DAT.Globe(container);
      	        console.log(globe);
      	        var i, tweens = [];
      	        var settime = function(globe, t) {
      	            return function() {
      	                new TWEEN.Tween(globe).to({time: t/years.length},500).easing(TWEEN.Easing.Cubic.EaseOut).start();
      	                var y = document.getElementById('year'+years[t]);
      	                if (y.getAttribute('class') === 'year active') {
      	                    return;
      	                }
      	                var yy = document.getElementsByClassName('year');
      	                for(i=0; i<yy.length; i++) {
      	                    yy[i].setAttribute('class','year');
      	                }
      	                y.setAttribute('class', 'year active');
      	            };
      	        };
      	        for(var i = 0; i<years.length; i++) {
      	            var y = document.getElementById('year'+years[i]);
      	            y.addEventListener('mouseover', settime(globe,i), false);
      	        }
      	        var xhr;
      	        TWEEN.start();
      	        xhr = new XMLHttpRequest();
      	        xhr.open('GET', '../../data/test.json', true);
      	        xhr.onreadystatechange = function(e) {
      	            if (xhr.readyState === 4) {
      	                if (xhr.status === 200) {
      	                    var data = JSON.parse(xhr.responseText);
      	                    window.data = data;
      	                    for (i=0;i<data.length;i++) {
      	                        globe.addData(data[i][1], {format: 'magnitude', name: data[i][0], animated: true});
      	                    }
      	                    globe.createPoints();
      	                    settime(globe,0)();
      	                    globe.animate();
      	                }
      	            }
      	        };
      			xhr.send(null);
      		}









    }
})();
