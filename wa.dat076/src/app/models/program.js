var mongoose = require('mongoose');
var util = require('./util');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
printReq = util.printReq;

var programSchema = new Schema({
    institution : {
        type: ObjectId, 
        ref: 'Institution',
        required: [true, printReq('institution', 'Program')]
    },
    name: {
        type: String,
        required: [true, printReq('name', 'Program')],
        index: {unique: true}
    },
    acronynm : {
        type: String,
        required: [true, printReq('acronym', 'Program')]
    },
    credit : {
        type: Number,
        required: [true, printReq('credit', 'Program')]
    }
})

var Program = mongoose.model('Program', programSchema);

module.exports = {
    Program
}