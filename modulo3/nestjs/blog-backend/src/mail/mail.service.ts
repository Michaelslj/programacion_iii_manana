import * as nodemailer from 'nodemailer';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SendMailDto } from './dto/send-mail.dto';
import axios from 'axios';
import e from 'express';

@Injectable()
export class MailService {
  async sendMail(dto: SendMailDto) {
    console.log('MAIL_USER:', process.env.MAIL_USER);
    console.log('MAIL_PASS:', process.env.MAIL_PASS);  
    const transporter = nodemailer.createTransport({
      service: 'smtp.gmail.com',
      port: 465,
      secure:true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls:{rejectUnauthorized:false},
    });

    try {
      const info = await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: dto.to,
        subject: dto.subject,
        html: dto.message,
      });
      return { messageId: info.messageId };
    } catch (error) {
      throw new InternalServerErrorException('No se pudo enviar el correo');
    }
}
  async fetchUserListFromPublicApi() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.data;
  }

  async sendWithSendGrid(dto: SendMailDto) {
    try {
      const res = await axios.post(
        'https://api.sendgrid.com/v3/mail/send',
        {
          personalizations: [{ to: [{ email: dto.to }] }],
          from: { email: process.env.SENDGRID_SENDER },
          subject: dto.subject,
          content: [{ type: 'text/html', value: dto.message }],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      return { status: res.status };
    } catch (error) {
        console.log(error)
      throw new InternalServerErrorException('No se pudo enviar el correo con SendGrid');
    }
  }
}


