const mongoose = require('mongoose');
const isValidCondition = require("./ConditionModel.js");

const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "Title is required!"],
		text: true
	},
	isbn10: {
		type: String,
		required: false,
		text: true
	},
	isbn13: {
		type: String,
		required: false,
		text: true
	},
	tags: {
		type: [String],
		required: false,
		text: true
	},
	condition: {
		type: String,
		required: [true, 'Condition of the book is required!'],
		validate: [isValidCondition, 'Invalid condition type!']
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	},
	zipcode: {
		type: Number,
		required: true,
		validate: [isValidZipCode, 'Invalid zip code!']
	},
	borrower: {
		type: mongoose.Schema.Types.ObjectId
	}
}, {
	timestamps: true
});

function isValidZipCode(zipCode) {
	return zipCode >= 0 && zipCode <= 99999;
}

bookSchema.set('autoIndex', false);

module.exports = mongoose.model("book", bookSchema)