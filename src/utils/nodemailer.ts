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
  const transporter = nodemailer.createTransport({
    host: config.smtp_host,
    port: config.nodemailer_port,
    secure: false,
    auth: {
      user: config.nodemailer_host_email,
      pass: config.nodemailer_host_pass,
    },
  });

  const info = await transporter.sendMail({
    from: `"Your App" <${config.nodemailer_host_email}>`,
    to: to,
    subject: subject,
    text: text,
    html: text,
    attachments: attachments,
  });

  console.log("Accepted:", info.accepted);
  console.log("Rejected:", info.rejected);
  console.log("Response:", info.response);

  return info;
};
