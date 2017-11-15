var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Favorite = require('./models/Favorite.js');


/* GET FAVORITE FACILITIES FOR ONE USER */
router.get('/user/:favoriteUserUID', async function(req, res, next) {
  // console.log(req.name, "thats right");
  try { var favorites = await Favorite.find({'favoriteUserUID' : req.params.favoriteUserUID}, '-pwd -__v'); }
  catch (error) {
      console.error(error);
      res.sendStatus(500);
  }
  res.json(favorites);
});

/* GET FAVORITE FACILITY BASED ON FAVORITE ID */
router.get('/:favoriteUID', async function(req, res, next) {
  // console.log(req.name, "thats right");
  try { var favorite = await Favorite.findOne({'favoriteUID' : req.params.favoriteUID}, '-pwd -__v'); }
  catch (error) {
      console.error(error);
      res.sendStatus(500);
  }
  res.json(favorite);
});

/* SAVE FAVORITE */
router.post('/', function(req, res, next) {
    Favorite.create(req.body, function (err, post) {
    if (err) return next(err);
    
    res.json(post);
  });
});

/* UPDATE FAVORITE */
router.patch('/:id', function(req, res, next) {
    Favorite.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE FAVORITE */
router.delete('/:favoriteUID', function(req, res, next) {
    Favorite.findOneAndRemove({'favoriteUID' : req.params.favoriteUID}, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;