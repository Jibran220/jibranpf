import nodemailer from "nodemailer";
export const sendEmail = async (
  subject,
  message,
  send_to,
  sent_from,
  reply_to
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "muhammadjibran890@gmail.com", // generated ethereal user
      pass: "srffpnbdmmgfpmgj", // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const options = {
    from: sent_from,
    to: send_to,
    replyTo: reply_to,
    subject: subject,
    html: message,
  };

  // Send Email
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};
