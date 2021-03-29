if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }

const express = require('express')
const bcrypt = require('bcrypt')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const app = express()

const passport = require('passport')
const initializePassport = require('./passport-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)
app.use(methodOverride('_method'))


//database connection
//const mongoose = require('mongoose')

// mongoose.connect('mongodb+srv://root:root@cluster0.tfrcc.mongodb.net/test?retryWrites=true&w=majority',
// {useNewUrlParser: true, useUnifiedTopology:true})
// const db = mongoose.connection

// db.on('error',(err) => {
//     console.log(err)
// })

// db.once('open',()=>{
//     console.log('Database Connection Established!')
// })
const users = []


app.set('view-engine','ejs')
app.use(express.static('public'));
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }))
  app.use(passport.initialize())
app.use(passport.session())
//takes the info from fields and get it in req variables in app.post methods
app.use(express.urlencoded({extended: false}))


//get from localhost:..
app.get('/',(req, res)=>{
    res.render('index.ejs', { name: req.body.firstname })
})
//get from localhost../login
app.get('/login', checkNotAuthenticated,(req, res)=>{
    res.render('login.ejs')
})
//post once we submit the button in login
app.post('/login', passport.authenticate( 'local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))
//get from localhost../register
app.get('/register', checkNotAuthenticated,(req, res)=>{
    res.render('register.ejs')
})
//post once we submit the button in register
app.post('/register', async (req, res)=>{
    //creating hashed password; we need try and catch for it. we add async in front of (req, res) line 28, and await in line 31
    try{
        const hashedPassword =  await bcrypt.hash(req.body.password,10)
        //it is for trial
        //push password in users variable that i created in line 5
        users.push({
            id: Date.now().toString(),
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password:hashedPassword
    
        })
        //redirecting users to login once they register
        res.redirect('/login')
    }
    catch{
        //if any failure direct user to register page
        res.redirect('/register')

    }
    console.log(users)
  
})


app.listen(4000)

app.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
  })



// function checkAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//       return next()
//     }
  
//     res.redirect('/login')
//   }
  
  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/')
    }
    next()
  }
