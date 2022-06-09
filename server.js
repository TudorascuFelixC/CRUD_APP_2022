const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const connectDB = require('./server/database/connection');
const { options } = require('nodemon/lib/config');

const app = express();

dotenv.config({path:'./config.env'})
var http = require('http');

http.createServer(function(request, response){

    //The following code will print out the incoming request text
    request.pipe(response);

}).listen(8080, '127.0.0.1');

console.log('Listening on port 8080...');
//if we work on a local host the port will be 8080
const PORT = process.env.PORT|| 8080
//log requests
app.use(morgan('tiny'));

//mongodb connection
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

//load assets
app.use('/css', express.static(path.resolve(__dirname,"assets/css")))
app.use('/img', express.static(path.resolve(__dirname,"assets/img")))
app.use('/js', express.static(path.resolve(__dirname,"assets/js")))


//load routers
app.use('/', require('./server/routes/router'))

app.listen(PORT, ()=>{console.log('Server is running on http://localhost:${3000}')});