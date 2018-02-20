
var mongoose = require('mongoose');
var util = require('./util');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
printReq = util.printReq;

var employeeSchema = new Schema({
    lastname : {
        type: String, 
        required: [true, printReq('lastname', 'Employee')]
    },
    firstname : {
        type: String, 
        required: [true, printReq('firstname', 'Employee')]
    },
    email : {
        type: String, 
        required: [true, printReq('email', 'Employee')]
    },
    institution : {
        type: ObjectId,
        ref: 'Institution', 
        required: [true, printReq('institution', 'Employee')]
    },
    office : {
        type: ObjectId, 
        ref: 'Room', 
        required: [true, printReq('office', 'Employee')]
    }
})

var Employee = mongoose.model('Employee', employeeSchema);

module.exports = {
    Employee
}