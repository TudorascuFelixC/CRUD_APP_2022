const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(process.env.DATABASE_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            //useFindAndModify:false,
            //useCreateIndex:true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);

        return "Connected to database"
    }catch(err){
        console.log(err);
        return "could not connect to database";
        process.exit(1);

    }
}

module.exports = connectDB