const nodemailer = require("nodemailer");
const email = require("../model/email");
require("dotenv").config();

async function handleEmail(req, res) {
  try {
    const Email = new email(req.body);
    const createMail = await Email.save();

    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    // Email content
    let mailOptions = {
      from: "kronextechnology@gmail.com",
      to: req.body.email, // Customer's email address
      subject: "Thank you for your response!",
      text: "Dear Customer,\n\nThank you for your response. We appreciate your feedback and look forward to serving you again.\n\nBest regards,\nKronex Technology",
    };

    let info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.response}`);

    res.status(201).send(createMail);
  } catch (e) {
    console.log(e);
    res.status(401).send(e);
  }
}

async function handleGetmail(req, res) {
  try {
    const emaildata = await email.find();
    res.send(emaildata);
  } catch (e) {
    console.log(`error ${e}`);
    res.status(500).send(e);
  }
}

module.exports = {
  handleEmail,
  handleGetmail,
};
