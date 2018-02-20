
var mongoose = require('mongoose');
var util = require('./util');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
printReq = util.printReq;

var blockSchema = new Schema({
    name: {
        type: String,
        required: [true, printReq('name', 'Block')]
    },
    slots: [{
        type: ObjectId,
        required: [true, printReq('slots', 'Block')]
    }]
})

var Block = mongoose.model('Block', blockSchema);

module.exports = {
	Block
}