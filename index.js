const express = require('express');
const bodyParser = require('body-parser');

const mailer = require('./mail');
const smsCleint = require('./sms');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const users = [];

app.post('/send', (req, res) => {
  const { name, email, phone, smsText } = req.body;
  const newUser = {
    name,
    email,
    phone,
    smsText
  };

  users.push(newUser);

  mailer(newUser.name, newUser.email);

  smsCleint(newUser.phone, newUser.smsText);

  res.status(201).send({
    message: `Welcome ${newUser.name}, check your email for confirmation!`,
    data:  newUser
  });
});

app.listen(3000, () => {
  console.log(`Server listening on port 3000 !`);
});

module.exports = app;
