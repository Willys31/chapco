import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/validations/contact';
import { requestTypes, productOptions } from '@/lib/validations/contact';
import type { ContactFormValues } from '@/lib/validations/contact';

function buildEmailHtml(data: ContactFormValues): string {
  const requestTypeLabel = requestTypes.find((t) => t.value === data.requestType)?.label ?? data.requestType;
  const productLabels = data.products
    .map((p) => productOptions.find((po) => po.value === p)?.label)
    .filter(Boolean)
    .join(', ');

  const field = (label: string, value: string, bold = false) =>
    `<tr>
      <td style="padding:6px 12px 6px 0;color:#6b7280;font-size:13px;vertical-align:top;white-space:nowrap">${label}</td>
      <td style="padding:6px 0;font-size:14px;font-weight:${bold ? 500 : 300};color:#1A1A2E">${value}</td>
    </tr>`;

  const section = (title: string, rows: string) =>
    `<div style="margin-bottom:24px;padding-bottom:24px;border-bottom:1px solid #e5e7eb">
      <p style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#7FB069;margin:0 0 12px">${title}</p>
      <table style="border-collapse:collapse;width:100%">${rows}</table>
    </div>`;

  const identityRows = [
    field('Nom complet', data.fullName),
    field('Entreprise', data.company, true),
    ...(data.position ? [field('Fonction', data.position)] : []),
    field('Email', data.email),
    field('Téléphone', data.phone),
    field('Pays', data.country),
  ].join('');

  const demandRows = [
    field('Type de demande', requestTypeLabel, true),
    field('Produits', productLabels),
    ...(data.estimatedVolume ? [field('Volume estimé', data.estimatedVolume)] : []),
  ].join('');

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:32px;background:#f9fafb;font-family:Arial,sans-serif">
  <div style="max-width:600px;margin:0 auto">
    <div style="background:#1E2A5E;padding:32px;border-radius:8px 8px 0 0">
      <p style="color:#A8C9A8;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;margin:0 0 8px">CHAP & CO — Formulaire de contact</p>
      <h1 style="color:#ffffff;font-size:22px;font-weight:300;margin:0">Nouvelle demande — ${requestTypeLabel}</h1>
    </div>
    <div style="background:#FAF8F3;padding:32px;border-radius:0 0 8px 8px;border:1px solid #e5e7eb;border-top:0">
      ${section('Identité', identityRows)}
      ${section('Demande', demandRows)}
      <div style="margin-bottom:24px">
        <p style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#7FB069;margin:0 0 12px">Message</p>
        <div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:6px;padding:16px">
          <p style="margin:0;font-size:14px;line-height:1.7;white-space:pre-wrap;font-weight:300;color:#1A1A2E">${data.message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
        </div>
      </div>
      <div style="border-top:1px solid #e5e7eb;padding-top:16px">
        <p style="margin:0 0 4px;font-size:12px;color:#6b7280">Email envoyé automatiquement depuis le formulaire chapco.ci</p>
        <p style="margin:0;font-size:12px;color:#6b7280">Pour répondre directement à ${data.fullName}, utilisez l'adresse : <strong>${data.email}</strong></p>
      </div>
    </div>
  </div>
</body>
</html>`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = contactFormSchema.parse(body);

    if (!process.env.RESEND_API_KEY) {
      console.log('[Contact] Dev mode — form data received:', {
        from: validated.company,
        type: validated.requestType,
        email: validated.email,
      });
      return NextResponse.json({ success: true, id: 'dev-mode' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: 'CHAP & CO <noreply@chapco.ci>',
      to: ['cmessou@chapco.ci'],
      replyTo: validated.email,
      subject: `[${validated.requestType.toUpperCase()}] Nouvelle demande de ${validated.company}`,
      html: buildEmailHtml(validated),
    });

    if (error) {
      console.error('[Resend] Error:', error);
      return NextResponse.json({ error: "Erreur lors de l'envoi de l'email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('[Contact API] Error:', error);
    return NextResponse.json({ error: 'Données invalides ou erreur serveur' }, { status: 400 });
  }
}
