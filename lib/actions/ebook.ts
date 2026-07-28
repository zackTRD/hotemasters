'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  email: z.email('Format d\'email invalide'),
});

export async function subscribeToEbook(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.issues[0]?.message || 'Erreur de validation',
    };
  }

  const { email } = validatedFields.data;

  try {
    // 1. Save to Resend Contacts
    const { error: contactError } = await resend.contacts.create({
      email,
      unsubscribed: false,
    });

    if (contactError) {
      console.error('Resend Contact Error:', contactError);
      // We continue anyway to send the email
    }

    // 2. Send Preview Email using Resend
    const ebookLink = process.env.EBOOK_PREVIEW_LINK || '#';
    
    const { error: mailError } = await resend.emails.send({
      from: 'Hotemasters <onboarding@resend.dev>',
      to: email,
      subject: 'Votre chapitre gratuit de l\'ebook Hotemasters',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1a1a1a; margin: 0; padding: 0; background-color: #f9fafb; }
              .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; overflow: hidden; shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; }
              .header { background-color: #1a1a1a; padding: 40px 20px; text-align: center; }
              .logo { color: #ffffff; font-size: 24px; font-weight: bold; letter-spacing: -0.5px; }
              .content { padding: 40px; }
              .title { font-size: 24px; font-weight: 700; color: #111827; margin-bottom: 16px; text-align: center; }
              .text { font-size: 16px; color: #4b5563; margin-bottom: 32px; text-align: center; }
              .cta-container { text-align: center; margin-bottom: 32px; }
              .button { background-color: #FF5A5F; color: #ffffff !important; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px; display: inline-block; transition: background-color 0.2s; }
              .footer { padding: 24px; text-align: center; font-size: 14px; color: #9ca3af; border-top: 1px solid #f3f4f6; }
              .accent { color: #FF5A5F; font-weight: 600; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">HOTEMASTERS</div>
              </div>
              <div class="content">
                <h1 class="title">Merci de votre intérêt !</h1>
                <p class="text">
                  C'est un plaisir de vous voir rejoindre la communauté <span class="accent">Hotemasters</span>. 
                  Comme promis, voici votre accès privilégié au premier chapitre de notre guide pour les hôtes Airbnb.
                </p>
                <div class="cta-container">
                  <a href="${ebookLink}" class="button">Accéder au chapitre gratuit</a>
                </div>
                <p class="text" style="font-size: 14px; margin-bottom: 0;">
                  Nous espérons que ces premières pages vous apporteront déjà des conseils précieux pour booster votre activité.
                </p>
              </div>
              <div class="footer">
                &copy; ${new Date().getFullYear()} Hotemasters. Tous droits réservés.<br>
                Optimisez votre location courte durée comme un pro.
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (mailError) {
      console.error('Resend Mail Error:', mailError);
      return { error: 'Une erreur est survenue lors de l\'envoi de l\'email.' };
    }

    return { success: true };
  } catch (error: any) {
    console.error('Subscription Error:', error);
    return { error: 'Une erreur est survenue lors de l\'inscription.' };
  }
}
