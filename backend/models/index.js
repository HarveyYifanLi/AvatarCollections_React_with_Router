var mongoose = require('mongoose');
mongoose.set('debug', true);

mongoose.connect('mongodb://localhost/avatar-api'); // once this line is run, a new db will be created in mongo
mongoose.Promise = Promise;
module.exports.Avatar = require("./avatar");
