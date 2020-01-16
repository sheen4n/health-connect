var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var auth = require('./auth');
var jwt = require('jwt-simple');
var http = require('http');
var path = require('path');

var User = require('./models/User');
var ProUser = require('./models/ProUser');
var Post = require('./models/Post');
var Favorite = require('./models/Favorite');

var favicon = require('serve-favicon');
var logger = require('morgan');
var chat = require('./chat');
var facility = require('./facility');
var favorite = require('./favorite');



//Mongoose Settings
mongoose.Promise = Promise;


var mongooseUrl = '';

mongoose.connect(mongooseUrl, { useMongoClient: true }, (err) => {
    if (!err) {
        console.log("connected to Mongo")
    } else {

    }
});

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/posts/:id', async (req, res) => {
    // res.send('hello world');
    // res.send(posts);
    var author = req.params.id;

    try { 
       
        var posts = await Post.find({author}, '-__v -_id -author');
        res.send(posts);
    }
    catch (error) {
        console.error(error);
        res.sendStatus(500);
    }

});

app.post('/post', auth.checkAuthenticated ,(req, res) => {
    var postData = req.body;
    
    postData.author = req.userId;

    var post = new Post(postData);

    post.save((err, result) => {
        if (err) {
            console.error("saving post error");
            return res.status(500).send({message: 'saving post error'});
        }
    });
    res.sendStatus(200);

});

app.get('/users', async (req, res) => {
    // res.send('hello world');
    console.log(req.userId, "thats right");
    try { var users = await User.find({}, '-pwd -__v'); }
    catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
    console.log("server 2");
    res.send(users);
});

app.get('/prousers', async (req, res) => {
    // res.send('hello world');
    console.log(req.userId, "thats right");
    try { var proUsers = await ProUser.find({}, '-pwd -__v'); }
    catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
    console.log("server 2");
    res.send(proUsers);
});

app.get('/user/:uid', async (req, res) => {
    // res.send('hello world');
    try { var user = await User.findOne({'uid' : req.params.uid}, '-pwd -__v'); }
    catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
    console.log("server 2");
    res.send(user);
});

app.get('/prouser/:uid', async (req, res) => {
    // res.send('hello world');
    try { var proUser = await ProUser.findOne({'uid' : req.params.uid}, '-pwd -__v'); }
    catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
    console.log("server 2");
    res.send(proUser);
});

app.get('/profile/:id', async (req, res) => {
    // console.log(req.params.id);
    try { 
        // var user = await User.findById(req.params.id, '-pwd -__v');
        var user = await User.findOne({'uid' : req.params.id});
        res.send(user);
    }
    catch (error) {
        console.error(error);
        res.sendStatus(500);
    }

});

app.use('/auth', auth.router);

app.use('/chat', chat);

app.use('/facility', facility);
app.use('/favorite', favorite);

app.listen(port);
