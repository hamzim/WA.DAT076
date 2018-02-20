
var mongoose = require('mongoose');
var util = require('./util');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
printReq = util.printReq;

var timeslotSchema = new Schema({
    day : {
        type: String, 
        required: [true, printReq('day', 'Timeslot')]
    },
    hour : {
        type: Number,
        required: [true, printReq('hour', 'Timeslot')],
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    },
    minute : {
        type: Number,
        required: [true, printReq('minute', 'Timeslot')],
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    },
    duration : {
        type: Number,
        required: [true, printReq('duration', 'Timeslot')],
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    }  
})

var Timeslot = mongoose.model('Timeslot', timeslotSchema);

module.exports = {
    Timeslot
}