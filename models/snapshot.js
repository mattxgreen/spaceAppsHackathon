"use strict";

var mongoose = require('mongoose');


var Snapshot;

var snapshotSchema = new mongoose.Schema({
	
	// userid: String,
  	loc: { type: [Number], index: '2dsphere'},
  	cough: Number,
  	short: Number,
  	wheezing: Number,
  	sneezing: Number,
  	nobstruction: Number,
  	ichy: Number,
  	createdAt: { type: Date, default: Date.now },

  //INPUT SYM

});



Snapshot = mongoose.model("Snapshot", snapshotSchema);
module.exports = Snapshot;
