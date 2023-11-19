import type { VercelRequest, VercelResponse } from '@vercel/node'
import emailjs from 'emailjs-com'

export default (req: VercelRequest, res: VercelResponse) => {
  // Assuming EmailJS is properly initialized elsewhere or you're using an API key directly
  const emailData = req.body

  emailjs
    .send(process.env['EMAILJS_SERVICE_ID']!, process.env['EMAILJS_TEMPLATE_ID']!, emailData)
    .then(response => {
      res.status(200).json({ message: 'Email sent successfully' })
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to send email', error })
    })
}
