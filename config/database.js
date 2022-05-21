const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;

const URI = mongoURI;

async function connectDB(){
  try {
    await mongoose.connect(URI);
    console.log('DB connection successful');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDB;
