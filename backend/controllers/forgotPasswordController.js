import userModel from "../models/userModel.js";
import { createTransport } from "nodemailer"
import crypto from "crypto"
import bcrypt from "bcrypt"
import dotenv from "dotenv"
dotenv.config({ path: './../.env' })

// Route to handle "forgot password" request
const forgotPassword = async (req, res) => {

  try {
    const { email } = req.body;

    // Check if email exists in the database
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(20).toString('hex');
    user.resetToken = resetToken;
    await user.save();

    //Send email with reset token
    const resetUrl = `https://todo-app-b96a5.web.app/resetPassword?token=${resetToken}`;

    const user_mail = await getParameter('GMAIL_USERNAME');
    const user_password = await getParameter('GMAIL_PASSWORD');

    var transporter = createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: user_mail,
        pass: user_password
      }
    });

    var mailOptions = {
      from: 'alok.yadav6000@gmail.com',
      to: email,
      subject: "Reset Password",
      html: `<h1>Reset Password</h1><h2>Click on the link to reset your password</h2><h3>${resetUrl}</h3>`
    };

    await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.status(200).json({ message: 'A link to reset your password have been sent to your email.' });
  }
  catch (err) {
    res.status(500).json({ message: 'We have ran into an error: ' + err.message });
  }
};

//  Route to handle password reset request
const resetPassword = async (req, res) => {
  const { token, password } = req.body;

  // Verify reset token
  console.log("token: ", token);
  const user = await userModel.findOne({ resetToken: token });
  if (!user) {
    return res.status(400).json({ message: 'Invalid token' });
  }

  // Update password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);
  user.resetToken = null;
  await user.save();

  res.status(200).json({ message: 'Password reset successful' });
};
export { forgotPassword, resetPassword }

