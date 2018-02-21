var mongoose = require('mongoose');
var util = require('./util');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
printReq = util.printReq;

var courseSchema = new Schema({
    code : {
        type: String,
        required: [true, printReq('code', 'Course')],
        index: {unique: true}
    },
    name : {
        type: String,
        required: [true, printReq('name', 'Course')]
    },
    institution : {
        type: ObjectId, 
        ref: 'Institution',
        required: [true, printReq('institution', 'Course')]
    },
    program : {
        type: ObjectId, 
        ref: 'Program',
        required: [true, printReq('program', 'Course')]
    },
    examiner : {
        type: ObjectId, 
        ref: 'Employee',
        required: [true, printReq('examiner', 'Course')]
    },
    lecturer : {
        type: ObjectId, 
        ref: 'Employee',
        required: [true, printReq('lecturer', 'Course')]
    },
    period : {
        type: String,
        required: [true, printReq('period', 'Course')]
    },
    block : {
        type: ObjectId, 
        ref: 'Block',
        required: [true, printReq('block', 'Course')]
    },
    credit : {
        type: Number,
        required: [true, printReq('credit', 'Course')]
    },
    website: String    
})

var Course = mongoose.model('Course', courseSchema);

module.exports = {
	Course
}
