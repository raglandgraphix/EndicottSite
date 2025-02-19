import { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const sendgridApiKey = process.env.SENDGRID_API_KEY;
    if (!sendgridApiKey) {
      throw new Error('SendGrid API key is missing.');
    }

    sendgrid.setApiKey(sendgridApiKey);

    const msg = {
      to: 'jragland@endicott.com', // Replace with your email
      from: 'john@raglandgraphix.com', // Replace with your verified SendGrid sender
      subject: 'Test Email',
      text: 'This is a test email from SendGrid.',
    };

    await sendgrid.send(msg);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email.' });
  }
}