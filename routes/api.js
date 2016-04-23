var express = require('express');
var router = express.Router();
var User = require("../models/user");
var Snapshot = require("../models/snapshot")


router.get('/', function(req, res, next) {
  console.log('api call working');
  res.send()
});

router.post('/', function(req, res, next) {
	// Req.body comes => Snapshot Schema
  Snapshot.create(req.body, function(){
  	if(err){
  		res.status(400).send(err);
  	} else{
  		res.send()
  	}
  });
  
});

module.exports = router;
