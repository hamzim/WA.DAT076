
var mongoose = require('mongoose');
var util = require('./util');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
printReq = util.printReq;

var roomSchema = new Schema({
	name: {
        type: String,
        required: [true, printReq('name', 'Room')]
    },
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

roomSchema.index({name: 1, building: 1}, {unique: true});

var Room = mongoose.model('Room', roomSchema);

module.exports = {
	Room
}