require('dotenv').config();
var express = require('express');
var router = express.Router();
var User = require("../models/user");
var Snapshot = require("../models/snapshot")

var AQU = 'http://www.airnowapi.org/aq/observation/latLong/current/?format=application/json&latitude=38.3651&longitude=-122.7&distance=25&' + process.env.API_KEY;

// Basic Test response
router.get('/', function(req, res, next) {
  console.log('api call working');
  res.send('api get')
});


// Add new Snapshot
router.post('/', function(req, res, next) {
	// Req.body comes => Snapshot Schema
	console.log(req.body);
  Snapshot.create(req.body, function(err){
  	if(err){
  		return res.status(400).send(err);
  	} 
  		res.send(req.body);
  });
  
});

router.get('/geo/:loc', function(req, res, next){
	Snapshot.find({})
		.exec(function(err, snapshots){

		})
})



// Get the Whole Collection
router.get('/all', function(req, res, next){
	Snapshot.find({})
		.exec(function(err, snapshots){
			if(err) return res.status(400).send(err);
			res.send(snapshots);
		});
});

module.exports = router;
