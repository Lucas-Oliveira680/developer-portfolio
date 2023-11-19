import emailjs from 'emailjs-com'
import type { VercelRequest, VercelResponse } from '@vercel/node'

emailjs.init(process.env['EMAILJS_USER_ID']!)

export default function handler(req: VercelRequest, res: VercelResponse) {
  const emailData = req.body

  emailjs
    .send(process.env['EMAILJS_SERVICE_ID']!, process.env['EMAILJS_TEMPLATE_ID']!, emailData)
    .then((response: any) => {
      res.status(200).json({ message: 'Email sent successfully' })
    })
    .catch((error: any) => {
      res.status(500).json({ message: 'Failed to send email', error })
    })
}
