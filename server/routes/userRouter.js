const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')


router.post('/register', userCtrl.register)

router.post('/activation', userCtrl.activateEmail)

router.post('/login', userCtrl.login)

router.post('/logout', userCtrl.logout)

router.post('/google_login', userCtrl.googleLogin)




module.exports = router
