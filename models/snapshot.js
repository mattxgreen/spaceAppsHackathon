"use strict";

var mongoose = require('mongoose');


var Snapshot;

var snapshotSchema = new mongoose.Schema({
	userid: String,
  	loc: { type: [Number], index: '2dsphere'}
  //INPUT SYM

});



Snapshot = mongoose.model("Snapshot", snapshotSchema);
module.exports = Snapshot;
