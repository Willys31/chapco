import type { ContactFormValues } from '@/lib/validations/contact';
import { requestTypes, productOptions } from '@/lib/validations/contact';

interface ContactEmailTemplateProps {
  data: ContactFormValues;
}

export function ContactEmailTemplate({ data }: ContactEmailTemplateProps) {
  const requestTypeLabel = requestTypes.find((t) => t.value === data.requestType)?.label;
  const productLabels = data.products
    .map((p) => productOptions.find((po) => po.value === p)?.label)
    .filter(Boolean) as string[];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', color: '#1A1A2E' }}>
      {/* Header */}
      <div style={{ background: '#1E2A5E', padding: '32px', borderRadius: '8px 8px 0 0' }}>
        <p style={{ color: '#A8C9A8', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 8px' }}>
          CHAP & CO — Formulaire de contact
        </p>
        <h1 style={{ color: '#ffffff', fontSize: '24px', fontWeight: 300, margin: 0 }}>
          Nouvelle demande — {requestTypeLabel}
        </h1>
      </div>

      {/* Body */}
      <div style={{ background: '#FAF8F3', padding: '32px', borderRadius: '0 0 8px 8px', border: '1px solid #e5e7eb' }}>

        {/* Identité */}
        <div style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7FB069', margin: '0 0 16px' }}>
            Identité
          </h2>
          <Field label="Nom complet" value={data.fullName} />
          <Field label="Entreprise" value={data.company} highlight />
          {data.position && <Field label="Fonction" value={data.position} />}
          <Field label="Email" value={data.email} />
          <Field label="Téléphone" value={data.phone} />
          <Field label="Pays" value={data.country} />
        </div>

        {/* Demande */}
        <div style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7FB069', margin: '0 0 16px' }}>
            Demande
          </h2>
          <Field label="Type de demande" value={requestTypeLabel ?? data.requestType} highlight />
          <Field label="Produits" value={productLabels.join(', ')} />
          {data.estimatedVolume && (
            <Field label="Volume estimé" value={data.estimatedVolume} />
          )}
        </div>

        {/* Message */}
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7FB069', margin: '0 0 16px' }}>
            Message
          </h2>
          <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '6px', padding: '16px' }}>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', whiteSpace: 'pre-wrap', fontWeight: 300 }}>
              {data.message}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '20px' }}>
          <p style={{ margin: '0 0 4px', fontSize: '12px', color: '#6b7280' }}>
            Email envoyé automatiquement depuis le formulaire chapco.ci
          </p>
          <p style={{ margin: 0, fontSize: '12px', color: '#6b7280' }}>
            Pour répondre directement à {data.fullName}, utilisez l&apos;adresse : <strong>{data.email}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div style={{ display: 'flex', gap: '12px', marginBottom: '10px', alignItems: 'flex-start' }}>
      <span style={{ fontSize: '12px', color: '#6b7280', minWidth: '120px', paddingTop: '2px' }}>
        {label}
      </span>
      <span style={{ fontSize: '14px', fontWeight: highlight ? 500 : 300, color: '#1A1A2E' }}>
        {value}
      </span>
    </div>
  );
}
