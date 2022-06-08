require('dotenv').config()
const express =require('express')
const mongoose=require('mongoose')
const fileUpload=require('express-fileupload')
const cors=require('cors')
const router=require('./routes/router')
const errorHandler =require('./middleware/ErrorHandlingMiddleware')
const path=require('path')
const PORT=process.env.PORT || 5000

const app=express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileUpload({}))
app.use('/api',router)



app.use(errorHandler)
async function start() {
    try {
        await mongoose.connect("mongodb+srv://kofein4ick:12345qwerty@cluster0.ynlzo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify:true
        })
        app.listen(PORT, ()=> console.log(`Server start on port ${PORT}`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()