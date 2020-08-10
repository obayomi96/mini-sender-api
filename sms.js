require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;

const smsCleint = (phonenumber, smsText) => {
  const client = require('twilio')(accountSid, authToken);
  client.messages
    .create({
       body: smsText,
       from: twilioNumber,
       to: phonenumber
     })
    .then(message => console.log(message.sid));
}

module.exports = smsCleint;
