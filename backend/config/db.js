// MongoDB connection
const mongoose = require("mongoose");
require("dotenv").config({path: './config.env'});

const db = process.env.MONGODB_URI;
//console.log(db)

const connectDB = async () => {
  const conn = await mongoose
    .connect(
      "mongodb+srv://root:root@cluster0.xeujs.mongodb.net/medblog?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    )
    .then(console.log("MongoDB connected!"))
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
