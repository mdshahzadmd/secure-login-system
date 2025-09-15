import nodemailer from "nodemailer";

async function sendMail(to, subject, text, html) {
  if (!to) {
    throw new Error("No recipients defined");
  }
  // Configure the transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // or another email service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    html,
  };

  // Send the email
  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    throw error;
  }
}

export default sendMail;
