// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const dotenv= require('dotenv').config();
const mail = require('@sendgrid/mail')

mail.setApiKey('***');

export default function handler(req, res) {
  const body= JSON.parse(req.body)

  const message = `
  Name: ${body.from_name}\r\n
  Email:${body.from_email}\r\n
  Company-Name: ${body.company_name}\r\n
  Company-Type: ${body.company_type}\r\n
  Contact: ${body.contact}\r\n
  Plan: ${body.plan}\r\n
  Message:${body.message}
  `
  const data={
    to:'introtelecomdev@gmail.com',
    from:`hello@introtelecom.in`,
    subject:'New Enquiry',
    text:message,
    html:message.replace(/\r\n/g, '<br>')
  }
  mail.send(data)
  console.log(body)
  res.status(200).json({ status:'Ok' })
}
