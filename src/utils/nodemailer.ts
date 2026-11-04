const nodemailer = require("nodemailer");

interface ISENDMAIL {
    to: string;
    subject: string;
    text: string;
    html?: string;
}
const sendMail = async ({ to, subject, text, html }: ISENDMAIL) => {
    
    const transporter = nodemailer.createTransport({
      host: "smtp.example.com",
      port: 587,
      secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
    from: '"Example Team" <team@example.com>', // sender address
    to: "alice@example.com, bob@example.com", // list of recipients
    subject: "Hello", // subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // HTML body
    });
}

export default sendMail;