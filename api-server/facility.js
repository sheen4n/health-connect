var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Facility = require('./models/Facility.js');

/* GET ALL FACILITY */
// router.get('/:room', function(req, res, next) {
//   Chat.find({ room: req.params.room }, function (err, chats) {
//     if (err) return next(err);
//     res.json(chats);
//   });
// });

router.get('/all', async function(req, res, next) {
    // console.log(req.name, "thats right");
    try { var facilities = await Facility.find({}, '-pwd -__v'); }
    catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
    res.json(facilities);
});

/* GET ONE FACILITY */
router.get('/:facilityId', async function(req, res, next) {
  // console.log(req.name, "thats right");
  try { var facility = await Facility.findOne({'_id' : req.params.facilityId}, '-pwd -__v'); }
  catch (error) {
      console.error(error);
      res.sendStatus(500);
  }
  res.json(facility);
});

/* GET FACILITIES for ONE USER */
router.get('/owner/:ownerId', async function(req, res, next) {
  // console.log(req.name, "thats right");
  try { var facilities = await Facility.find({'ownerUID' : req.params.ownerId}, '-pwd -__v'); }
  catch (error) {
      console.error(error);
      res.sendStatus(500);
  }
  res.json(facilities);
});

/* SAVE FACILITY */
router.post('/', function(req, res, next) {
  Facility.create(req.body, function (err, post) {
    if (err) return next(err);
    
    res.json(post);
  });
});

/* UPDATE FACILITY */
router.put('/:id', function(req, res, next) {
  Facility.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE FACILITY */
router.delete('/:id', function(req, res, next) {
  Facility.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;