// app/models/bear.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PartnerSchema   = new Schema({
    name: String,
    phone: String,
    url: String
});

module.exports = mongoose.model('Partner', PartnerSchema);