const express = require('express')
const bcrypt = require('bcrypt')
const app = express()

const users = []

app.set('view-engine','ejs')
//takes the info from fields and get it in req variables in app.post methods
app.use(express.urlencoded({extended: false}))

//get from localhost:..
app.get('/', (req, res)=>{
    res.render('index.ejs')
})
//get from localhost../login
app.get('/login', (req, res)=>{
    res.render('login.ejs')
})
//post once we submit the button in login
app.post('/login', (req, res)=>{
    
})
//get from localhost../register
app.get('/register', (req, res)=>{
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
  
})

app.listen(4000)