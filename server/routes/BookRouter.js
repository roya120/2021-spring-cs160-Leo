const router = require('express').Router()
const BookController = require('../controllers/BookController')

router.post('/book', BookController.insertBook)

router.get('/book', BookController.searchBooks)

module.exports = router