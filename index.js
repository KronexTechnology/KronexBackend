const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const email = require("./model/email");
require("./db/connection");
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.post("/email", async (req, res) => {
    try {
        const Email = new email(req.body);
        const createMail = await Email.save();

        // Create a transporter object using SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'kronextechnology@gmail.com',  // Your email address
                pass: 'noyq dmwc eapk kcop'  // Your email password
            }
        });

        // Email content
        let mailOptions = {
            from: 'kronextechnology@gmail.com',
            to: req.body.email,  // Customer's email address
            subject: 'Thank you for your response!',
            text: 'Dear Customer,\n\nThank you for your response. We appreciate your feedback and look forward to serving you again.\n\nBest regards,\nKronex Technology'
        };

        let info = await transporter.sendMail(mailOptions);
        console.log(`Email sent: ${info.response}`);

        res.status(201).send(createMail);
    } catch (e) {
        console.log(e);
        res.status(401).send(e);
    }
});

app.get("/findemail", async (req, res) => {
    try {
        const emaildata = await email.find();
        res.send(emaildata);
    } catch (e) {
        console.log(`error ${e}`);
        res.status(500).send(e);
    }
});

app.listen(port, (error) => {
    if (error) {
        console.log("Error starting server:", error);
    } else {
        console.log(`Server is running on port ${port}`);
    }
});
