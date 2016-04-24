require('dotenv').config();
var express = require('express');
var router = express.Router();
var User = require("../models/user");
var Snapshot = require("../models/snapshot");
var http = require('http');
var request = require('request');
var urlBase = 'http://www.airnowapi.org/aq/observation/latLong/current/?format=application/json'
var dist = '&distance=25&API_KEY=' + process.env.API_KEY;

router.get('/', function(req, res, next) {
  console.log('api call working');
  res.send('api get')
});


// Add new Snapshot
router.post('/', function(req, res, next) {
	var snap = req.body;
	var lat = snap.lat;
  	var lon = snap.lon;
  	var urlAPI = urlBase + '&latitude=' + lat + '&longitude=' + lon + dist;
  	request(urlAPI, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        snap.api = JSON.parse(body);
	        snap.airNowData = true;
	        Snapshot.create(snap, function(err){
  				if(err) return res.status(400).send(err);
  				return res.send(snap);
  			});
	    }
	    else {
	    	snap.airNowData = false;
	    	Snapshot.create(snap, function(err){
  				if(err) return res.status(400).send(err);
  				return res.send();
  			});
	    }
	});
});



//*******************************************************************
//********************Corellations***********************************
//*******************************************************************

router.get('/cough', function(req, res, next){
	Snapshot.find({})
		.exec(function(err, snapshots){
			if(err) return res.status(400).send(err);
			res.send(snapshots);
		});
});


router.get('/short', function(req, res, next){
	Snapshot.find({})
		.exec(function(err, snapshots){
			if(err) return res.status(400).send(err);
			res.send(snapshots);
		});
});

router.get('/wheezing', function(req, res, next){
	Snapshot.find({})
		.exec(function(err, snapshots){
			if(err) return res.status(400).send(err);
			res.send(snapshots);
		});
});


router.get('/nobstruction', function(req, res, next){
	Snapshot.find({})
		.exec(function(err, snapshots){
			if(err) return res.status(400).send(err);
			res.send(snapshots);
		});
});

router.get('/ichy', function(req, res, next){
	Snapshot.find({})
		.exec(function(err, snapshots){
			if(err) return res.status(400).send(err);
			res.send(snapshots);
		});
});

router.get('/sneezing', function(req, res, next){
	Snapshot.find({})
		.exec(function(err, snapshots){
			if(err) return res.status(400).send(err);
			res.send(snapshots);
		});
});

// Get the Whole Collection
router.get('/all', function(req, res, next){
	Snapshot.find({})
		.exec(function(err, snapshots){
			if(err) return res.status(400).send(err);
			res.send(snapshots);
		});
});

module.exports = router;
