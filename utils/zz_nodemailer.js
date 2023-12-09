const nodemailer = require('nodemailer');

const nodemailer = (req, res, next) => {
    // Create a transporter for Nodemailer using OAuth2
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        }
        });

    const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: userData.email,
        subject: 'Welcome',
        text: 'Hello from cellar vault!',
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
        console.error('Error sending email:', error);
        } else {
        console.log('Email sent:', info.response);
        }
    });
}

module.exports = nodemailer