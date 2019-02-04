const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RepairSchema = new Schema({
    mobile: {
        type: Schema.Types.ObjectId,
        ref: 'mobiles'
    },
    handle: {
        type: String,
        required: true,
        max:40 
    },
    title: {
        type: String,
		required: true,
    },
    type: { //hardware or software
        type: String,
		required: true,
    },
    priceInPaisa: {
        type: Number
    }
});

module.exports = Repair = mongoose.model('repair', RepairSchema);
