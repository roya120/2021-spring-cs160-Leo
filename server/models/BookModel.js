const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "Title is required!"],
		text: true
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	},
	borrower: {
		type: mongoose.Schema.Types.ObjectId
	}
}, {
	timestamps: true
});

bookSchema.set('autoIndex', false);

module.exports = mongoose.model("book", bookSchema)