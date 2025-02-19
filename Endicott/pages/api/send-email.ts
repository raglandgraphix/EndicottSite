// pages/api/send-email.ts

import { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';

// Initialize SendGrid with your API key.  **IMPORTANT:** Store this securely, ideally as an environment variable.
//const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
if (process.env.SENDGRID_API_KEY) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  if (req.method === 'POST') {
    
    // if (process.env.SENDGRID_API_KEY) {
    //   sendgrid.setApiKey(process.env.SENDGRID_API_KEY); 
    // }
    // if (!process.env.SENDGRID_API_KEY) {
    //   console.error('SENDGRID_API_KEY is not defined in environment variables.');
    //   return res.status(500).json({ message: 'SendGrid API key is missing.' }); // Return error early
    // }
    try {
      const { position,firstName,middleName,lastName, StreetAddress,City,State,Zipcode,MainPhone,OtherPhone,email,startDate,Fulltime,Parttime,Temporary,FirstShift,SecondShift,ThirdShift,PEYes,AgeYes,CBYes,CitizenYes, } = req.body; // Extract the 'name' from the form data
      
      
      // Construct the email message
      const msg = {
        to: 'jacim@endicott.com', // Your own email or a placeholder.  SendGrid requires at least one entry in the 'to' field.
  bcc: [
    { email: 'jragland@endicott.com', name: 'Catch Bounce' }
    // Add more recipients here
  ],
        from: 'endicottforms@gmail.com', // Replace with your verified sender email in SendGrid
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
            <li style="list-style-type: none; padding-left: 0;">${City} ${State}${Zipcode}</li>
            <li><strong>Main Phone:</strong> ${MainPhone}</li>
            <li><strong>Other Phone:</strong> ${OtherPhone}</li>
            <li><strong>email:</strong> ${email}</li>

            </ul>
          </div>
            <div style="border:solid thin black">
                <div style="background-color:#a24a13;">
                     <h3 style="color:white;">Applicant Desired Information</h3>
                </div>
                <ul>
                    <li><strong>Position Applied for:</strong> ${position}</li>
                    <li><strong>Date Applicant can start: </stong>${startDate}</li>
                    <li><strong>Full Time: </strong>${Fulltime}</li>
                    <li><strong>Part Time: </strong>${Parttime}</li>
                    <li><strong>Temporary: </strong>${Temporary}</li>
                    <li><strong>First Shift: </strong>${FirstShift}</li>
                    <li><strong>Second Shift: </strong>${SecondShift}</li>
                    <li><strong>Third Shift: </strong>${ThirdShift}</li>
                    <li><strong>Previously Employed at Endicott: </strong> ${PEYes}</li>
                    <li><strong>At Least 18 Years Old: </strong> ${AgeYes}</li>
                    <li><strong>Color Blind: </strong> ${CBYes}</li>
                    <li><strong>U.S. Citizen: </strong> ${CitizenYes}</li>
                </ul>
          </div>
          
        `, // You can also use a plain text version: text: `Name: ${name}`
      };

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