import nodemailer from "nodemailer";
import { config } from "dotenv";

config(); // Carrega o .env

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true para port 465, false para outras
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PWD_APP // A senha de app do Google
    },
    tls: {
        rejectUnauthorized: false // Ajuda a evitar erros de certificado em localhost
    }
});

export const sendMailText = async (to, subject, html) => {
    try {
        const info = await transporter.sendMail({
            from: `"Imovim System" <${process.env.EMAIL_USER}>`, // Fica mais bonito com nome
            to,
            subject,
            html
        });
        
        console.log("Email enviado: %s", info.messageId);
        return true;
    } catch (error) {
        console.error("Erro ao enviar email:", error);
        return false;
    }
}
