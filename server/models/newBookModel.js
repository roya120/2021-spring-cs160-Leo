const mongoose = require('mongoose')

const newBookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter the book title!"],
        trim: true
    },
    author: {
        type: String,
        required: [true, "Please enter the author name!"],
        trim: true
    },
    category: {
        type: String,
        required: [true, "Please select the category"],
        trim: true,
        unique: true
    },
    note: {
        type: String,
        trim:true
    },
    
    
}, {
    timestamps: true
})

module.exports = mongoose.model("Books", newBookSchema)