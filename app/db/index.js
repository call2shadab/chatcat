'use strict';
const config = require('../config');
const Mongoose = require('mongoose');
const logger = require('../logger');
Mongoose.connect(config.dbURI, { useNewUrlParser: true });
let db = Mongoose.connection;
db.on('error', error => {
    logger.log('error', 'Mongoose connection error: ' + error);
});

const chatUser = new Mongoose.Schema({
    profileID: String,
    fullName: String,
    profilePic: String
});

let userModel = Mongoose.model('chatUser', chatUser);

module.exports = {
    Mongoose,
    userModel
}
