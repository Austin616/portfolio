const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow cross-origin requests from your React app
app.use(bodyParser.json()); // Parse JSON bodies

// POST route to handle form submissions
app.post('/contact', (req, res) => {
  const { firstName, lastName, email, phoneNumber, topic, message } = req.body;

  // Set up nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'austintran616@gmail.com', // Replace with your email
      pass: 'qtmc dflq aiyp mwpa' // Replace with your email password or app password
    }
  });

  // Email options
  let mailOptions = {
    from: email, // Sender's email from the form
    to: 'austintran616@gmail.com', // Your email where the form will send the data
    subject: `Contact Form Submission: ${topic}`,
    text: `You have a new contact form submission:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phoneNumber}\n\nTopic: ${topic}\nMessage:\n${message}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email.' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ success: true, message: 'Message received!' });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
