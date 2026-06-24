import nodemailer from 'nodemailer';
import fs from 'fs';

const passwordFile = 'D:/Projects/delete/shridhar-gmail-app-password.txt';
const senderEmail = 'shridhar.javafsd@gmail.com';
const receiverEmail = 'dyesmuk@gmail.com';
const mailSubject = 'Sample Mail';
const mailBody = 'This is sample mail.';

const password = fs.readFileSync(passwordFile, 'utf8').trim();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: senderEmail,
        pass: password
    }
});

const sendDemoMail = async () => {
    try {
        const info = await transporter.sendMail({
            from: senderEmail,
            to: receiverEmail,
            subject: mailSubject,
            text: mailBody
        });

        console.log('Email sent successfully');
        console.log('Message ID:', info.messageId);
    } catch (err) {
        console.error('Failed to send email:', err.message);
    }
}

sendDemoMail();