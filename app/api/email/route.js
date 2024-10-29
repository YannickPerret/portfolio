import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    // Lire et valider les données du corps de la requête
    const { email, name, message, honeypot } = await request.json();

    // Vérifier le champ honeypot pour détecter les robots
    if (honeypot) {
        // Si le champ honeypot est rempli, on ignore la requête
        return NextResponse.json({ message: 'Spam detected' }, { status: 400 });
    }

    // Configurer le transporteur de Nodemailer pour envoyer l'email
    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: parseInt(process.env.MAIL_PORT, 10),
        secure: process.env.MAIL_PORT === '465',
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: "noreply@yannickperret.com",
        to: process.env.MAIL_USERNAME,
        replyTo: email,
        subject: `Message from ${name} (${email})`,
        text: message,
    };

    try {
        await transport.verify();
        await transport.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent' });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({ message: 'GET method is not supported' }, { status: 405 });
}