
var mongoose = require('mongoose');
var util = require('./util');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
printReq = util.printReq;

var buildingSchema = new Schema({
    name: {
        type: String,
        required: [true, printReq('name', 'Building')],
        index: {unique: true}
    },
    adress : {
        type: String, 
        required: [true, printReq('adress', 'Building')]
    }
})

var Building = mongoose.model('Building', buildingSchema);

module.exports = {
	Building
}