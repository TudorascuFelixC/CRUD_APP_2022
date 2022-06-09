const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect("mongodb+srv://felixtudorascu1:Jucarie18@cluster0.85ikzk3.mongodb.net/users?retryWrites=true&w=majority", {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            //useFindAndModify:false,
            //useCreateIndex:true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB