"use strict";

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jwt-simple');

const JWT_SECRET = 'secret';

var User;
var userSchema = new mongoose.Schema({

  // username: { type: String, unique: true, required: true },
  // password: { type: String, required: true }
  snapshots: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Snapshots' } ],
  createdAt: { type: Date, default: Date.now }
});



// userSchema.statics.register = function(userObj, cb) {
//   bcrypt.hash(userObj.password, 13, function(err, hash) {
//     if(err) return cb(err);
//     User.create({

//       username: userObj.username,
//       password: hash

//     }, function(err, user) {
//       if(err) return cb(err);
//       //if valid, return user without password
//       user.password = null;
//       cb(null, user);
//     });
//   });
// };

// userSchema.statics.authenticate = function(userObj, cb) {
//   User.findOne({username: userObj.username}, function(err, dbUser) {
//     if(err || !dbUser) return cb("Authentication failed");
//     bcrypt.compare(userObj.password, dbUser.password, function(err, isGood) {
//       if(err || !isGood) return cb("Authenication failed");
//       dbUser.password = null;
//       cb(null, dbUser);
//     });
//   });
// };


// userSchema.statics.authMiddle = function(req, res, next) {
//   var token = req.cookies.usercookie;
//   try {
//     var payload = jwt.decode(token, JWT_SECRET);
//   } catch(err) {
//     return res.clearCookie("usercookie").status(401).send(err);
//   }
//   //Valid token
//   User.findById(payload.userId, function(err, user) {
//     if(err || !user) return res.status(401).send(err);
//     user.password = null;
//     req.user = user;
//     next();
//   });
// };


// userSchema.methods.generateToken = function() {
//   var payload = {
//     userId: this._id,
//     iat: Date.now()
//   };
//   var token = jwt.encode(payload, JWT_SECRET);
//   return token;
// }



User = mongoose.model("User", userSchema);
module.exports = User;


//
