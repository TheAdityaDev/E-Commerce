const mongoose = require('mongoose');
require('dotenv').config()


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
          maxPoolSize: 20,
          minPoolSize: 5,
          serverSelectionTimeoutMS: 3000,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        process.exit(1)
    }
}

module.exports =  connectDB;