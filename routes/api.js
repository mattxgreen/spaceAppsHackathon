var express = require('express');
var router = express.Router();
var User = require("../models/user");
var Snapshot = require("../models/snapshot")


router.get('/', function(req, res, next) {
  console.log('api call working');
  res.send()
});

router.post('/', function(req, res, next) {
  
  res.send()
});

module.exports = router;
