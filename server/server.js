require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')

const app = express()
app.use(express.json())
app.use(cors())

app.use(fileUpload({
    useTempFiles:true
}))


// app.use('/', (req, res, next)=>{
//     res.json({msg:"Hello"})
// })
//Routes
app.use('/user',require('./routes/userRouter'))
app.use('/book',require('./routes/bookRouter'))

//mongodb connection
const CONNECTION_URL = process.env.MONGODB_URL
mongoose.connect(CONNECTION_URL, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log("Connected to mongodb")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log('Server is running on port', PORT)
})