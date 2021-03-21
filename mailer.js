const nodemailer = require("nodemailer");

exports.sendConfirmationEmail = ({ userName, userEmail }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GOOGLE_USER,
      pass: process.env.GOOGLE_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.GOOGLE_USER,
    to: userEmail,

    subject: `your family friend ${userEmail}`,
    html: `<a  target="_" href=http://localhost:3000/Confirmation>Please click on the link for activation of account</a>`,
  };
  transporter.sendMail(mailOptions, async (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("email sent " + info.response);
    }
  });
};
