// pages/api/send-email.ts
'use client'
import { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';

// Initialize SendGrid with your API key.  **IMPORTANT:** Store this securely, ideally as an environment variable.
//const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
// if (process.env.SENDGRID_API_KEY) {
//   sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  
  if (req.method === 'POST') {
    console.log(SENDGRID_API_KEY);
    if (process.env.SENDGRID_API_KEY) {
      sendgrid.setApiKey(process.env.SENDGRID_API_KEY); 
    }
    // if (!process.env.SENDGRID_API_KEY) {
    //   console.error('SENDGRID_API_KEY is not defined in environment variables.');
    //   return res.status(500).json({ message: 'SendGrid API key is missing.' }); // Return error early
    // }
    try {
      const { position,firstName, middleName,lastName,StreetAddress } = req.body; // Extract the 'name' from the form data
      
      
      // Construct the email message
      const msg = {
        to: 'jragland@endicott.com', // Replace with your recipient email
        from: 'john@raglandgraphix.com', // Replace with your verified sender email in SendGrid
        subject: 'New Empolyement Applicant',
        html: `
          <p>A new employment application form has been submitted:</p>
          <div style="border:solid thin black">
            <div style="background-color:#a24a13;">
              <h3 style="color:white;">Applicant Personal Information</h3>
            </div>
            
            <ul>
            <li>${firstName} ${middleName} ${lastName} </li>
            <li style="list-style-type: none; padding-left: 0;">${StreetAddress}</li>
            </ul>
          </div>
          <ul>
            
            <li><strong>Position Applied for:</strong> ${position}</li>
            
          </ul>
        `, // You can also use a plain text version: text: `Name: ${name}`
      };
console.log(msg);
      // Send the email
      await sendgrid.send(msg);

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' }); // Only allow POST requests
  }
}


