// //mongoDB validation,casting and business logic is a lenthy process
// //so use mongoose

const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/notebook?directConnection=true";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = connectToMongo;
