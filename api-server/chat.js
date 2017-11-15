var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Chat = require('./models/Chat.js');

/* GET ALL CHATS */
router.get('/:chatId', function(req, res, next) {
  Chat.find({ chatId: req.params.chatId }, function (err, chats) {
    if (err) return next(err);
    res.json(chats);
  });
});

/* GET LATEST CHATS for 1 User for Inbox - Showing Latest Message towards Unique Users */

router.get('/inbox/:UID', function(req, res, next) {
  // Chat.find({ "chatId": { "$regex": req.params.UID, "$options": "i" } },
  //  function (err, chats) {
  //   if (err) return next(err);
  //   res.json(chats);
  // });
  Chat.aggregate(   [
    { "$match": {
      "chatId": { "$regex": req.params.UID, "$options": "i" }
    }},
    {
      $group: {
      _id: {chatId: '$chatId'},
      chatId: {$last: '$chatId'},
      updated_at : {$max: '$updated_at'},
      senderUID: {$last: '$senderUID'},
      receiverUID: {$last: '$receiverUID'},
      message: {$last: '$message'},
      proUserName: {$last: '$proUserName'},
      normalUserName: {$last: '$normalUserName'}
      }
    }, 
    // updated_at: {$max: '$updated_at'}}},
    {$sort: {updated_at: -1}}
  ] ,
  function (err, chats) {
   if (err) return next(err);
   res.json(chats);
 });
});

/* GET ALL CHATS for 1 User for Inbox */
router.get('/inbox-all/:UID', function(req, res, next) {
  Chat.find({ "chatId": { "$regex": req.params.UID, "$options": "i" } },
   function (err, chats) {
    if (err) return next(err);
    res.json(chats);
  });
});


/* SAVE CHAT */
router.post('/', function(req, res, next) {
  Chat.create(req.body, function (err, post) {
    if (err) return next(err);
    
    res.json(post);
  });
});

module.exports = router;