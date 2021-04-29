const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')



router.post('/addBook',userCtrl.addBook)




module.exports = router