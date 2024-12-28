const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const MONGODB_URL = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${MONGODB_URL}`);
    console.log("MongoDB connected",conn.connect);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
