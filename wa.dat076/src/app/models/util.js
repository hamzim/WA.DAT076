var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

function printReq(strField, strSchema){
    return strField.concat((' is a required field in ').concat(strSchema.concat('.')));
}

module.exports = {
	printReq: printReq,
	mongoose, 
	Schema, ObjectId}
