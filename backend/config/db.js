const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then((conn) => {
      console.log(`MongoDB Connected: ${conn.connection.host}.cyan.underline`);
    })
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;

