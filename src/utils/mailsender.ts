import nodemailer from "nodemailer";
import config from "../config";

export const sendMail = async (
  to: string,
  subject: string,
  text: string,
  attachments: {
    filename: string;
    content: Buffer;
    contentType: string;
  }[] = [],
) => {
  //       console.log({
  //     user: config.nodemailer_host_email,
  //     pass: config.nodemailer_host_pass,
  //   });
  const transporter = nodemailer.createTransport({
    host: config.smtp_host,
    port: 587,
    secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
    auth: {
      user: config.nodemailer_host_email,
      pass: config.nodemailer_host_pass,
    },
  });
  await transporter.sendMail({
    from: config.nodemailer_host_email,
    to,
    subject,
    html: text, // html body (OTP template)
    attachments,
  });
};
