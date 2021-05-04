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
			let thisBook = await BookInfo.findOne({
				_id: bookid
			}).then(() => {})
			.catch((err) => {
				console.error(err);
				return res.status(404).json({msg: "Unable to find book!"});
			});
			
			// find the user
			let thisUser = await Users.findOne({
				_id: userid
			}).then(() => {})
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
			
			// create a book object that everything else will reference
			let newBook = new BookInfo(req.body);
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
				genres: bookInfo['genres']
			};
			let newBookGenreList = new BookGenreListInfo(newBookGenreListInfo);
			await newBookGenreList.save()
			.then(() => {})
			.catch((err) => {
				console.error(err);
				return res.status(400).json({msg: "Unable to list book!"});
			});
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
						_id: bookid
					},
					{
						borrower: userid
					}
				]
			}).then(() => {})
			.catch((err) => {
				console.error(err);
				return res.status(404).json({msg: "Unable to find book!"});
			});
			
			// find if the user exists
			let thisUser = await Users.findOne({
				_id: userid
			}).then(() => {})
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
		} catch (err) {
			return res.status(500).json({msg: err.message});
		}
	},
	searchBooks: async (req, res) => {
		try {
			const { mode, query } = req.body;
			
			if (mode.equals("author")) {
				// search by author
				if (typeof query !== 'string') {
					return res.status(400).json({msg: "Wrong search type!"});
				}
				results = await BookAuthorListInfo.find({
					genres: {
						$in: query
					}
				}).then(() => {})
				.catch((err) => {
					console.error(err);
					return res.status(400).json({msg: "Unable to find book!"});
				});
			} else if (mode.equals("genre") || mode.equals("category") || mode.equals("subject")) {
				// search by genre
				if (!Array.isArray(query)) {
					return res.status(400).json({msg: "Wrong search type!"});
				}
				results = await BookGenreListInfo.find({
					authors: {
						$in: genreArray
					}
				}).then(() => {})
				.catch((err) => {
					console.error(err);
					return res.status(400).json({msg: "Unable to find book!"});
				});
			} else {
				// search by title
				if (typeof query !== 'string') {
					return res.status(400).json({msg: "Wrong search type!"});
				}
				results = await BookInfo.find({
					$text: {
						$search: queryString
					}
				}).then(() => {})
				.catch((err) => {
					console.error(err);
					return res.status(400).json({msg: "Unable to find book!"});
				});
			}
		} catch (err) {
			return res.status(500).json({msg: err.message});
		}
	},
	updateBook: async (req, res) => {
		try {
			const { bookid, title, isbn10, isbn13, zipcode, authors, genres, condition } = req.body;
			// check if the fields are right
			if (!title || !bookid || !zipcode || !genres || !condition) {
				return res.status(400).json({msg: "Book is missing required information!"});
			}
			
			// TO DO: VALIDATE REQUEST BODY
			
			let newBookInfo = {
				title: title,
				isbn10: isbn10,
				isbn13: isbn13,
				zipcode: zipcode,
				condition: condition
			};
			let newBookAuthorListInfo = {};
			let newBookGenreListInfo = {};
			
			let bookResult = await BookInfo.findByIdAndUpdate(bookId, newBookInfo)
			.then(() => {})
			.catch((err) => {
				console.error(err);
				return res.status(400).json({msg: "Unable to find book!"});
			});
			
			if (!bookResult) {
				return res.status(404).json({msg: "Book does not exist!"});
			}
			
			if (Array.isArray(authors)) {
				newBookAuthorListInfo = {
					bookid: bookid,
					authors: authors
				}
				let bookAuthorResult = await BookAuthorListInfo.findOneAndUpdate(
					{ bookid: bookid }, newBookAuthorListInfo
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
			} else {
				return res.status(400).json({msg: "Invalid author information!"});
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
		} catch (err) {
			return res.status(500).json({msg: err.message});
		}
	}
};
module.exports = BookCtrlExport;