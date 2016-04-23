var express = require('express');
var router = express.Router();
var User = require("../models/user")


//Get all users
router.get('/', function(req, res) {
  User.find({}, function(err, users) {
    res.status(err ? 400 : 200).send(err || users);
  })
});

router.post('/', function(req, res) {
  // User.create()
});


//User profile
// User.authMiddle
router.get("/profile",  function(req, res) {
  res.send(req.user);
});

//Authenticate on login and set cookie
// router.post("/authenticate", function(req, res) {
//   User.authenticate(req.body, function(err, dbUser) {
//     if(err) return res.status(400).send(err);
//     var token = dbUser.generateToken();
//     res.cookie("usercookie", token).send(dbUser);
//   });
// });

//Register
router.post("/register", function(req, res) {
  User.register(req.body, function(err, dbUser) {
    if(err) return res.status(400).send(err);
    var token = dbUser.generateToken();
    res.cookie("usercookie", token).send(dbUser)
  });
});

router.post("/logout", function(req, res) {
  res.clearCookie("usercookie").send();
})







module.exports = router;
