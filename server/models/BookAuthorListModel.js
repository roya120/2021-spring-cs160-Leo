const mongoose = require('mongoose');

const bookAuthorListSchema = new mongoose.Schema({
	bookid: {
		type: mongoose.SchemaTypes.ObjectId,
		required: [true, "List must be attached to book!"]
	},
	authors: {
		type: [String],
		required: false,
		text: true
	}
});

//bookAuthorListSchema.set('autoIndex', false);

module.exports = mongoose.model("bookauthorlist", bookAuthorListSchema);