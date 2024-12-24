import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message, service } = req.body;

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS, // App password for your Gmail account
      },
    });

    // Create email message body
    const emailBody = `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
      Service: ${service}
    `;

    try {
      // Send email to your Gmail account
      await transporter.sendMail({
        from: email, // Sender's email
        to: process.env.GMAIL_USER, // Your Gmail address to receive messages
        subject: `New Contact Form Submission from ${name}`,
        text: emailBody, // Body of the email
      });

      res.status(200).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Failed to send message." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
