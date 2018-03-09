var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


router.get("/", function(req, res) {
  burger.all(function(data) {
    
    console.log(data);
    res.render("index", {data});
  });
});

router.post("/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    res.redirect("/");
  });
});

router.put("/burgers/update", function(req, res) {
  burger.update(req.body.burger_id, function(result){
    console.log(result);
    res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;
