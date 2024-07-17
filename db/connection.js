
// const mongoose = require("mongoose")
// require('dotenv').config();

// mongoose.connect(process.env.MONGO_URL
// ).then(()=>{
//     console.log("Database connected")
// }).catch((error)=>{
//     console.log(`Database not connected :${error}`)
// })

















require('dotenv').config(); // Load environment variables from .env file

const mongoose = require("mongoose");

// Access environment variables
const mongoUrl = process.env.MONGO_URL;

// Connect to MongoDB using the environment variable
mongoose.connect(mongoUrl)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });