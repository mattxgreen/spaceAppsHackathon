"use strict";

var mongoose = require('mongoose');

var Snapshot;

var snapshotSchema = new mongoose.Schema({
  	lat: String,
  	lon: String,
  	cough: String,
  	short: String,
  	wheezing: String,
  	sneezing: String,
  	nobstruction: String,
  	ichy: String,
  	api: [],
  	airNowData: Boolean,
  	createdAt: { type: Date, default: Date.now }
});

Snapshot = mongoose.model("Snapshot", snapshotSchema);
module.exports = Snapshot;