const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')


router.post('/register', userCtrl.register)

router.post('/login', userCtrl.login)

router.post('/google_login', userCtrl.login)




module.exports = router