
  
const mongoose = require('mongoose')


const googleUserSchema = new mongoose.Schema({
  
    name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("googleUsers", googleUserSchema)