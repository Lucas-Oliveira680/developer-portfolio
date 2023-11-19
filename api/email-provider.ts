import { send } from '@emailjs/nodejs'
import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const emailData = req.body

  send(process.env['EMAILJS_SERVICE_ID']!, process.env['EMAILJS_TEMPLATE_ID']!, emailData, {
    publicKey: process.env['EMAILJS_PUBLIC_KEY']!,
    privateKey: process.env['EMAILJS_PRIVATE_KEY']!,
  })
    .then(() => {
      res.status(200).json({ message: 'Email sent successfully' })
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to send email', error })
    })
}
