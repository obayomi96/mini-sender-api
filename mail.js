const nodemailer = require('nodemailer');

const mailer = (name, email) => {

  const mailString = `
    <p>Hello ${name}, this is a test mail from nodejs</p>
    <h3>Testing with nodemailer</h3>
    <p>Cheers !</h3>
  `;

   // create reusable transporter object using the default SMTP transport
   const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'kamren.grant@ethereal.email',
      pass: 'q4Azw8nRwcQFwr9JdA'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const options = {
    from: '"Seun Martins" <kamren.grant@ethereal.email>', // sender address
    to: email, // list of receivers
    subject: "testing nodemailer", // Subject line
    text: "Hello Sucker", // plain text body
    html: mailString, // html body
  }

  // send mail with defined transport object
  transporter.sendMail(options, (error, info) => {
    if (error) {
      console.log('err', error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });

}

module.exports = mailer;
