var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('../config/mailConfig');

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var phone = req.body.phone
  var issue = req.body.issue
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n phone: ${phone} \n issue: ${issue} \n message: ${message} `

  var mail = {
    from: name,
    to: 'zephyrr2722@gmail.com',  //Change to email address that you want to receive messages on
    subject: 'New Message from Appointment Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;
