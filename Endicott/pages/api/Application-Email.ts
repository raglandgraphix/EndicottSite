// pages/api/send-email.ts (API route)
//import nodemailer from 'nodemailer';

export default async function handler() {
  // if (req.method === 'POST') {
  //   const { name, email, message } = req.body;

  //   // Create a transporter using your email provider's credentials
  //   const transporter = nodemailer.createTransport({
  //     service: 'your_email_provider', // e.g., 'Gmail', 'Outlook'
  //     auth: {
  //       user: process.env.EMAIL_USER, 
  //       pass: process.env.EMAIL_PASSWORD,
  //     },
  //   });

  //   try {
  //     // Send the email
  //     await transporter.sendMail({
  //       from: process.env.EMAIL_USER,
  //       to: 'your_destination_email@example.com', // Replace with your email address
  //       subject: 'New Contact Form Submission',
  //       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  //       // You can also use HTML for the email body
  //       // html: `<h1>New Contact Form Submission</h1><p>Name: ${name}</p>...`
  //     });

  //     res.status(200).json({ message: 'Email sent successfully!' });
  //   } catch (error) {
  //     console.error('Error sending email:', error);
  //     res.status(500).json({ message: 'Error sending email.' });
  //   }
  // } else {
  //   res.status(405).end(); // Method Not Allowed
  // }
}