const mongoose = require('mongoose');
const util = require('./util.js');
var bookSchema;
var Book;

class BookHandler {
	async connect(conn, onSuccess, onFailure) {
		try {
			mongoose.connect(conn.url, {
			    useNewUrlParser: true,
			    useUnifiedTopology: true,
				useFindAndModify: false,
				useCreateIndex: true
			}).then(() => {
				console.log("Connected to MongoDB on " + conn.url);
				bookSchema = new mongoose.Schema({
					title: String,
					authors: [String],
					isbn: String,
					subjects: [String]
				});
				bookSchema.index({
					title: 'text',
					//authors: 'text',
					//isbn: 'text',
					//subjects: 'text'
				});
				Book = mongoose.model('books', bookSchema);
				onSuccess();
			});
		} catch (err) {
			console.error(err);
			onFailure(err);
		}
	}
	
	/**
	* Disconnects from the database
	*/
	async disconnect() {
		mongoose.connection.close().then(function() {
			console.log("Disconnected");
		});
	}
	
	/**
	* Inserts book into database
	* @param bookInfo An object with appropriate fields 
	*/
	async insertBook(bookInfo) {
		let testBook = new Book(bookInfo);
		testBook.save(function(err) {
			if (err) throw err;
		});
	}
	
	/**
	* Search for books using a string
	* WARNING: DOES NOT WORK
	* @param query A string that the user puts in to search for a book
	* @returns an array of results, or an empty array
	*/
	async searchAllBooks(query) {
		let results = [];
		Book.find({ $text: { $search: query, $language: 'none', $caseSensitive: false }}).then(res => results = res).catch(err => console.error(err));
		return results;
	}
}

module.exports = BookHandler;