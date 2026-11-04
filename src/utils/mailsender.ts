import nodemailer from "nodemailer";
import config from "../config";

export const sendMail = async (to: string, subject: string, text: string, attachments:{
    filename: string; content:Buffer ; contentType:string 
} [] =[],) => {
//       console.log({
//     user: config.nodemailer_host_email,
//     pass: config.nodemailer_host_pass,
//   });
  const transporter = nodemailer.createTransport({
  host: "smtp.example.com",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
await transporter.sendMail({
  from: "sender@example.com",
  to: "",
  subject: "",
  text: "",
html: "", // html body
attachments,
});

}