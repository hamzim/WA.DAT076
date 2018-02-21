var mongoose = require('mongoose');
var util = require('./util');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
printReq = util.printReq;

var institutionSchema = new Schema({
    name: {
        type: String,
        required: [true, printReq('name', 'Institution')],
        index: {unique: true}
    },
    head: {
        type: ObjectId, 
        ref: 'Employee',
        required: [true, printReq('head', 'Institution')]
    },
    acronynm : {
        type: String,
        required: [true, printReq('acronym', 'Institution')]
    },
    building : {
        type: ObjectId, 
        ref: 'Building', 
        required: [true, printReq('building', 'Institution')]
    }
})

var Institution = mongoose.model('Institution', institutionSchema);

module.exports = {
    Institution
}