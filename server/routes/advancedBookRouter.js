const router = require('express').Router()
const BookCtrl = require('../controllers/BookController')

router.post('/add', BookCtrl.insertBook)
router.put('/borrow', BookCtrl.borrowBook)
router.put('/return', BookCtrl.returnBook)
router.get('/search', BookCtrl.searchBooks)
router.put('/update', BookCtrl.updateBook);

module.exports = router