const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const connectDB = require('./server/database/connection');
const { options } = require('nodemon/lib/config');

const app = express();

dotenv.config({path:'./config.env'})
//TEST
//if we work on a local host the port will be 8080
const PORT = process.env.PORT|| 8080

//log requests
app.use(morgan('tiny'));

//This is connection between mongodb connection and our server
connectDB();

//Parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

//load assets
app.use('/css', express.static(path.resolve(__dirname,"assets/css")))
app.use('/img', express.static(path.resolve(__dirname,"assets/img")))
app.use('/js', express.static(path.resolve(__dirname,"assets/js")))


//This command will load routers from server/routes/router.js
app.use('/', require('./server/routes/router'))

app.listen(PORT, ()=>{console.log('Server is running on http://localhost:3000/')});