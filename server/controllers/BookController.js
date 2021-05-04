const mongoose = require('mongoose');
const BookInfo = require('../models/BookModel');
const Users = require('../models/userModel');
const BookAuthorListInfo = require('../models/BookAuthorListModel');
const BookGenreListInfo = require('../models/BookGenreListModel');

const BookCtrlExport = {
	borrowBook: async (req, res) => {
		try {
			const { userid, bookid } = req.body;
			
			// check if the req has the right fields
			if (!userid || !bookid)
				return res.status(400).json({msg: "User ID and book ID required!"});
				
			// find the book
			let thisBook = await BookInfo.findById(mongoose.Types.ObjectId(bookid))
			.catch((err) => {
				console.error(err);
				return res.status(404).json({msg: "Unable to find book!"});
			});
			
			// find the user
			let thisUser = await Users.findOne({
				_id: mongoose.Types.ObjectId(userid)
			})
			.catch((err) => {
				console.error(err);
				return res.status(404).json({msg: "Unable to find user!"});
			});
			
			// check if the user and book exist
			if (!thisBook || !thisUser) {
				return res.status(404).json({msg: "Invalid user or book!"});
			}
			
			// check if the user is already borrowing the book
			if (mongoose.Types.ObjectId(thisBook.borrower).equals(mongoose.Types.ObjectId(userid))) {
				return res.status(400).json({msg: "Already borrowing book!"});
			} else {
				thisBook.borrower = thisUser;
			}
			
			// borrow the book
			await thisBook.save().then(() => {})
			.catch((err) => {
				console.error(err);
				return res.status(400).json({msg: "Unable to borrow book!"});
			});
			
			return res.status(200).json({msg: "Successful"});
		} catch (err) {
			return res.status(500).json({msg: err.message});
		}
	},
	insertBook: async (req, res) => {
		try {
			const { title, owner, isbn10, isbn13, zipcode, authors, genres, condition } = req.body;
			
			// check if the fields are right
			if (!title || !owner || !zipcode || !genres || !condition) {
				return res.status(400).json({msg: "Book is missing required information!"});
			}
			
			// TO DO: VALIDATE REQUEST BODY
			
			let newBookAuthorListInfo = {};
			let newBookGenreListInfo = {};
			let newBookListInfo = {
				title: title,
				owner: owner,
				zipcode: zipcode,
				condition: condition,
				isbn10: isbn10,
				isbn13: isbn13
			}
			
			if (typeof owner == 'string') {
				newBookListInfo.owner = mongoose.Types.ObjectId(owner);
			}
			
			// create a book object that everything else will reference
			let newBook = new BookInfo(newBookListInfo);
			let bookId = 0;
			await newBook.save()
			.then((doc) => { bookId = doc._id; })
			.catch((err) => {
				console.error(err);
				return res.status(400).json({msg: "Unable to list book!"});
			})
			
			// if the book has no author, just skip this
			if (authors) {
				newBookAuthorListInfo = {
					bookid: bookId,
					authors: authors
				};
				let newBookAuthorList = new BookAuthorListInfo(newBookAuthorListInfo);
				await newBookAuthorList.save()
				.then(() => {})
				.catch((err) => {
					console.error(err);
					return res.status(400).json({msg: "Unable to list book!"});
				});
			}
			
			// put genres
			newBookGenreListInfo = {
				bookid: bookId,
				genres: req.body['genres']
			};
			let newBookGenreList = new BookGenreListInfo(newBookGenreListInfo);
			await newBookGenreList.save()
			.then(() => {})
			.catch((err) => {
				console.error(err);
				return res.status(400).json({msg: "Unable to list book!"});
			});
			
			return res.status(200).json({msg: "Successful"});
		} catch (err) {
			return res.status(500).json({msg: err.message});
		}
	},
	returnBook: async (req, res) => {
		try {
			const { userid, bookid } = req.body;
			
			// check if the fields are right
			if (!userid || !bookid) {
				return res.status(400).json({msg: "User ID and book ID required!"});
			}
				
			// find the book that the user is already borrowing
			let thisBook = await BookInfo.findOne({
				$and: [
					{
						_id: mongoose.Types.ObjectId(bookid)
					},
					{
						borrower: mongoose.Types.ObjectId(userid)
					}
				]
			})
			.catch((err) => {
				console.error(err);
				return res.status(404).json({msg: "Unable to find book!"});
			});
			
			// find if the user exists
			let thisUser = await Users.findOne({
				_id: userid
			})
			.catch((err) => {
				console.error(err);
				return res.status(404).json({msg: "Unable to find user!"});
			});
			
			// check if the book and user exist
			if (!thisBook || !thisUser) {
				return res.status(404).json({msg: "Invalid user or book!"});
			}
			
			// check if the user is borrowing this book
			if (mongoose.Types.ObjectId(thisBook.borrower).equals(mongoose.Types.ObjectId(userid))) {
				thisBook.borrower = undefined;
				await thisBook.save()
				.then(() => {})
				.catch((err) => {
					console.error(err);
					return res.status(400).json({msg: "Unable to return book!"});
				});
			} else {
				return res.status(400).json({msg: "Unable to return book!"});
			}
			return res.status(200).json({msg: "Successful"});
		} catch (err) {
			return res.status(500).json({msg: err.message});
		}
	},
	searchBooks: async (req, res) => {
		let results = {};
		try {
			const { mode, query } = req.body;
			
			if (mode==="author") {
				// search by author
				if (typeof query !== 'string') {
					return res.status(400).json({msg: "Wrong search type!"});
				}
				let tempDoc = {};
				await BookAuthorListInfo.find({
					authors: {
						$in: query
					}
				})
				.then((doc) => {
					tempDoc = doc;
				})
				.catch((err) => {
					console.error(err);
					return res.status(400).json({msg: "Unable to find book!"});
				});
				for (var i = 0; i < tempDoc.length; i++) {
					results = [];
					results[i] = await BookInfo.findById(tempDoc[i].bookid)
					.catch((err) => {
						console.error(err);
						return res.status(400).json({msg: "Unable to find book!"});
					});
				}
			} else if (mode==="genres" || mode==="categories" || mode==="subjects") {
				// search by genre
				if (!Array.isArray(query)) {
					return res.status(400).json({msg: "Wrong search type!"});
				}
				let tempDoc = {};
				await BookGenreListInfo.find({
					genres: {
						$in: query
					}
				})
				.then((doc) => {
					tempDoc = doc;
				})
				.catch((err) => {
					console.error(err);
					return res.status(400).json({msg: "Unable to find book!"});
				});
				for (var i = 0; i < tempDoc.length; i++) {
					results = [];
					results[i] = await BookInfo.findById(tempDoc[i].bookid)
					.catch((err) => {
						console.error(err);
						return res.status(400).json({msg: "Unable to find book!"});
					});
				}
			} else {
				// search by title
				if (typeof query !== 'string') {
					return res.status(400).json({msg: "Wrong search type!"});
				}
				await BookInfo.find({
					$text: {
						$search: query
					}
				})
				.then((doc) => {
					results = doc;
				})
				.catch((err) => {
					console.error(err);
					return res.status(400).json({msg: "Unable to find book!"});
				});
			}
		} catch (err) {
			return res.status(500).json({msg: err.message});
		}
		return res.status(200).json(results);
	},
	updateBook: async (req, res) => {
		try {
			const { bookid, title, owner, isbn10, isbn13, zipcode, authors, genres, condition } = req.body;
			// check if the fields are right
			if (!owner || !bookid) {
				return res.status(400).json({msg: "Owner or book id not provided!"});
			}
			
			// TO DO: VALIDATE REQUEST BODY
			
			let newBookId = 0;
			if (typeof bookid == 'string') {
				newBookId = mongoose.Types.ObjectId(bookid);
			}
			let newBookAuthorListInfo = {};
			let newBookGenreListInfo = {};
			
			let bookResult = await BookInfo.findById(newBookId)
			.catch((err) => {
				return res.status(400).json({msg: "Unable to find book!"});
			});
			
			let thisOwner = mongoose.Types.ObjectId(owner)
			if (!bookResult.owner.equals(thisOwner)) {
				return res.status(400).json({msg: "Wrong owner!"});
			}
			
			if (title) bookResult.title = title;
			if (zipcode) bookResult.zipcode = zipcode;
			if (condition) bookResult.condition = condition;
			if (isbn10) bookResult.isbn10 = isbn10;
			if (isbn13) bookResult.isbn13 = isbn13;
			
			await bookResult.save()
			.then(() => {})
			.catch((err) => {
				console.error(err);
				return res.status(400).json({msg: "Unable to save book!"});
			});
			
			if (!bookResult) {
				return res.status(404).json({msg: "Book does not exist!"});
			}
			
			if (authors && Array.isArray(authors)) {
				newBookAuthorListInfo = {
					bookid: newBookId,
					authors: authors
				}
				let bookAuthorResult = await BookAuthorListInfo.findOneAndUpdate(
					{ bookid: newBookId }, newBookAuthorListInfo
				);
				if (!bookAuthorResult) {
					// create a new author object
					let newBookAuthorList = new BookAuthorListInfo(newBookAuthorListInfo);
					await newBookAuthorList.save()
					.then(() => {})
					.catch((err) => {
						console.error(err);
						return res.status(400).json({msg: "Unable to create author information!"});
					});
				}
			}
			
			if (genres && Array.isArray(genres)) {
				 newBookGenreListInfo = {
					bookid: bookid,
					genres: genres
				}
				await BookGenreListInfo.findOneAndUpdate(
					{ bookid: bookid }, newBookGenreListInfo
				).then(() => {})
				.catch((err) => {
					console.error(err);
					return res.status(400).json({msg: "Unable to update genre information!"});
				});
			}
			
			return res.status(200).json({msg: "Successful"});
		} catch (err) {
			return res.status(500).json({msg: err.message});
		}
	}
};
module.exports = BookCtrlExport;