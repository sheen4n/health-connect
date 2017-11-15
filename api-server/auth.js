var bcrypt = require('bcrypt-nodejs');
var jwt = require('jwt-simple');
var User = require('./models/User.js');
var ProUser = require('./models/ProUser.js');

var express = require('express');
var router = express.Router();

router.post('/register', (req, res) => {
    var userData = req.body;

    var user = new User(userData);

    user.save((err, newUser) => {
        if (err) {
            return res.status(500).send({ message: 'Error saving user - registration' });
        }

        createSendToken(res, newUser);
    });
});

router.post('/registerPro', (req, res) => {
    var userData = req.body;

    var proUser = new ProUser(userData);

    proUser.save((err, proUser) => {
        if (err) {
            return res.status(500).send({ message: 'Error saving user - registration' });
        }

        createSendToken(res, proUser);
    });
});

router.post('/loginPro', async (req, res) => {
    var loginData = req.body;

    var proUser = await ProUser.findOne({ email: loginData.email });

    if (!proUser) {
        return res.status(401).send({ message: 'Email or Password invalid' });
    }

    bcrypt.compare(loginData.pwd, proUser.pwd, (err, isMatch) => {
        if (!isMatch) {
            return res.status(401).send({ message: 'Email or Password INVALID' });
        } else {
            createSendToken(res, proUser);
        }
    });
});

router.post('/login', async (req, res) => {
    var loginData = req.body;

    var user = await User.findOne({ email: loginData.email });

    if (!user) {
        return res.status(401).send({ message: 'Email or Password invalid' });
    }

    bcrypt.compare(loginData.pwd, user.pwd, (err, isMatch) => {
        if (!isMatch) {
            return res.status(401).send({ message: 'Email or Password INVALID' });
        } else {
            createSendToken(res, user);
        }
    });
});

function createSendToken(res, user) {
    var payload = { sub: user._id };

    var token = jwt.encode(payload, '123');

    res.status(200).send({ token });
}


var auth = {
    router,
    checkAuthenticated: (req, res, next) => {
        if (!req.header('authorization')) {
            return res.status(401).send({ message: 'Unauthorized. Missing Auth Header' })
        }

        var token = req.header('authorization').split(' ')[1];

        var payload = jwt.decode(token, '123');

        if (!payload) {
            return res.status(401).send({ message: 'Unauthorized. Auth Header Invalid' })
        }

        req.userId = payload.sub;


        console.log("server", token);

        next();
    }
}


module.exports = auth;