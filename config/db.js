const mongoose = require('mongoose');

const connectDB = async(req,res,next) => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
          });
        console.log("successfully connected to database");
    } catch (error) {
        console.error("fail connection to database ");
    }
}
module.exports = connectDB
