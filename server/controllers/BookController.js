const mongoose = require('mongoose');
const BookInfo = require('../models/BookModel');
const Users = require('../models/userModel');

class BookController {
	/**
	* Connect to a MongoDB database
	* @param url The URL to the MongoDB database
	* @param onSuccess a function to call if connection succeeds
	* @param onFailure a function onFailure(err) if connection fails
	*/
	async connect(url, onSuccess, onFailure) {
		try {
			mongoose.connect(url, {
				useNewUrlParser: true,
			    useUnifiedTopology: true
			}).then(() => {
				console.log("Connected to MongoDB on " + url);
				BookInfo.collection.getIndexes();
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
	* @returns true if success, false if failure
	*/
	async insertBook(bookInfo) {
		var state = false;
		let newBook = new BookInfo(bookInfo);
		await newBook.save()
		.then(() => { state = true; })
		.catch((err) => {
			console.error(err);
		});
		return state;
	}
	
	/**
	* Searches for books by title
	* TO DO: make it search for things other than title
	* @param queryString A string representing the search query
	* @returns an array of book objects, or an empty array
	*/
	async searchBooks(queryString) {
		let results = [];
		try {
			results = await BookInfo.find({
				$text: {
					$search: queryString
				}
			});
		} catch (err) {
			console.error(err);
		}
		return results;
	}
	
	/**
	* Make a specific user borrow a book
	* @param userId the ObjectId for the user as an ObjectId object
	* @param bookId the ObjectId for the book as an ObjectId object
	* @returns true if success, false if failure
	*/
	async borrowBook(userId, bookId) {
		let status = false;
		try {
			let thisBook = await BookInfo.findOne({
				_id: bookId
			});
			let thisUser = await Users.findOne({
				_id: userId
			});
			
			thisBook.borrower = thisUser;
			await thisBook.save();
			status = true;
		} catch (err) {
			console.error(err);
		}
		return status;
	}
	
	/**
	* Make a specific user return a book
	* @param userId the ObjectId for the user as an ObjectId object
	* @param bookId the ObjectId for the book as an ObjectId object
	* @returns true if success, false if failure
	*/
	async returnBook(userId, bookId) {
		let status = false;
		try {
			let thisBook = await BookInfo.findOne({
				$and: [
					{
						_id: bookId
					},
					{
						borrower: userId
					}
				]
			});
			
			if (mongoose.Types.ObjectId(thisBook.borrower).equals(mongoose.Types.ObjectId(userId))) {
				thisBook.borrower = undefined;
				await thisBook.save();
				status = true;
			} else {
				throw "User does not exist!";
			}
		} catch (err) {
			console.error(err);
		}
		return status;
	}
}

module.exports = BookController;