const mongoose = require('mongoose');

const bookGenreListSchema = new mongoose.Schema({
	bookid: {
		type: mongoose.SchemaTypes.ObjectId,
		required: [true, "List must be attached to book!"]
	},
	genres: {
		type: [String],
		required: [true, "Genre is required!"],
		text: true
	}
});

//bookGenreListSchema.set('autoIndex', false);

module.exports = mongoose.model("bookgenrelist", bookGenreListSchema);