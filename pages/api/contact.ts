import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: 'anton.jaldegren@gmail.com',
      from: 'anton.jaldegren@gmail.com',
      subject: 'jaldegren.dev | Nytt meddelande!',
      text: `Nytt meddelande från jaldegren.dev\n\nNamn: ${req.body.name}\n\nEmail: ${req.body.email}\n\nMessage:\n${req.body.message}`,
    });
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
