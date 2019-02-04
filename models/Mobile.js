const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const MobileSchema = new Schema({
	brand: {
		type: String,
		required: true,
	},
	model: {
		type: String,
		required: true,
	},
	year: {
		type: String
	}
});

module.exports = Mobile = mongoose.model('mobiles', MobileSchema);