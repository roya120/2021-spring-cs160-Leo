const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
//const sendMail = require('./sendMail')
const {google} = require('googleapis')
const OAuth2 = google.auth.OAuth2


const {CLIENT_URL} = process.env

const userCtrl = {
    register: async (req, res) => {
        try {
            const {firstname, lastname, email, password} =req.body
            //postman POST TEST
            // console.log({name, email, password})

            //empty field check
            if(!firstname || !lastname || !email || !password)
                return res.status(400).json({msg: "Please fill in all fields."})

            //email validation check
            if(!validateEmail(email))
                return res.status(400).json({msg: "Invalid emails."})   

            //duplicate email check
            const user = await Users.findOne({email})
            if(user) return res.status(400).json({msg: "This email already exists."})

            //password length check
            if(password.length < 6)
                return res.status(400).json({msg: "Password must be at least 6 characters."})

            //hashing the password 
            const passwordHash = await bcrypt.hash(password, 12)

            //postman check
            // console.log({password, passwordHash})

            //users info with hashed passsword
            const newUser = new Users({
                firstname,lastname, email, password:passwordHash
            })
             await newUser.save()
          

            //postman console check
             console.log(newUser)

            //creating secret code token
           // const activation_token = createActivationToken(newUser)


            //email verfication
            // const url = `${CLIENT_URL}/user/activate/`
            // sendMail(email, url,"Verify your email.")

            //postman console check
            // console.log({activation_token})
            

            res.json({msg:"Register Success!"})



        }
        catch (err){
            return res.status(500).json({msg: err.message})
            
        }
    },
    login: async (req, res) => {
        try {
            const {email, password} = req.body
            const user = await Users.findOne({email})
            if(!user) return res.status(400).json({msg: "This email is not registered."})

            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) return res.status(400).json({msg: "Incorrect email/password. Please try again."})

            res.json({msg: "Login success!"})

        }

        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    googleLogin: async (req, res) => {

        try {
            
        }
        catch(err){

        }
    }


   
}
//validate email
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// const createActivationToken = (payload) => {
//     return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {expiresIn: '5m'})
// }
// const createAccessToken = (payload) => {
//     return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
// }

// const createRefreshToken = (payload) => {
//     return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
// }






module.exports = userCtrl