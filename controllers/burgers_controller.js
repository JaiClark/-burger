var express = require("express");

var router = express.Router();


var burgers_db = require("../models/burger.js");

router.get("/", function(req, res) {
  burgers_db.all(function(data) {
    var hbsObject = {
      recipes: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/recipes", function(req, res) {
  burgers_db.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
   
    res.json({ id: result.insertId });
  });
});

router.put("/api/recipes/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers_db.update({
    burger_name: req.body.burger_name
  }, condition, function(result) {
    if (result.changedRows == 0) {
      
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/recipes/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burgers_db.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;