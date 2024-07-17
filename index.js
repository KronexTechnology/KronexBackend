const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const { handleEmail,handleGetmail } = require('./controller/emailhandle');
const email = require('./model/email')

require("./db/connection");
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.post("/email", handleEmail)

app.get("/findemail", handleGetmail)
app.listen(port, (error) => {
    if (error) {
        console.log("Error starting server:", error);
    } else {
        console.log(`Server is running on port ${port}`);
    }
});
