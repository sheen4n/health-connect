// var mongoose = require('mongoose');

// var ChatSchema = new mongoose.Schema({
//   room: String,
//   nickname: String,
//   message: String,
//   updated_at: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('Chat', ChatSchema);

var mongoose = require('mongoose');

var ChatSchema = new mongoose.Schema({
  chatId: String,
  senderUID: String,
  receiverUID: String,
  senderName: String,
  proUserName: String,
  normalUserName: String,
  message: String,
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Chat', ChatSchema);