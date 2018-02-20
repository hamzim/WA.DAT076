
var mongoose = require('mongoose');
var util = require('./util');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
printReq = util.printReq;

var roomSchema = new Schema({
    building : {
        type: ObjectId, 
        ref: 'Building', 
        required: [true, printReq('building', 'Room')]
    },
    seats : {
        type: Number, 
        required: [true, printReq('seats', 'Room')]
    }
})

var Room = mongoose.model('Room', roomSchema);

module.exports = {
	Room
}