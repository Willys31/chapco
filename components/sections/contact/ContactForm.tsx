'use client';

import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import {
  contactFormSchema,
  type ContactFormValues,
  requestTypes,
  productOptions,
} from '@/lib/validations/contact';
import { Button } from '@/components/ui/Button';
import { Send, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';

export function ContactForm() {
  const searchParams = useSearchParams();
  const preSelectedProduct = searchParams.get('product');
  const preSelectedType = searchParams.get('type') as ContactFormValues['requestType'] | null;

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      company: '',
      position: '',
      email: '',
      phone: '',
      country: '',
      requestType: preSelectedType ?? undefined,
      products: preSelectedProduct ? [preSelectedProduct] : [],
      estimatedVolume: '',
      message: '',
      acceptTerms: false,
    },
  });

  useEffect(() => {
    if (preSelectedProduct && preSelectedType) {
      const productLabel = productOptions.find((p) => p.value === preSelectedProduct)?.label;
      const typeLabel = requestTypes.find((t) => t.value === preSelectedType)?.label;
      if (productLabel && typeLabel) {
        setValue(
          'message',
          `Bonjour,\n\nJe souhaite vous contacter au sujet de : ${productLabel}.\nType de demande : ${typeLabel}.\n\n[Précisez ici vos volumes, conditionnements, destinations...]\n\nCordialement,`
        );
      }
    }
  }, [preSelectedProduct, preSelectedType, setValue]);

  const messageValue = watch('message') ?? '';

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Erreur lors de l'envoi");

      toast.success('Message envoyé avec succès !', {
        description: 'Nous reviendrons vers vous sous 48h ouvrées.',
        duration: 5000,
        icon: <CheckCircle2 className="w-5 h-5 text-green-500" />,
      });

      reset();
    } catch {
      toast.error("Erreur lors de l'envoi", {
        description: 'Veuillez réessayer ou nous contacter directement par téléphone.',
        duration: 5000,
        icon: <AlertCircle className="w-5 h-5 text-red-500" />,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">

      {/* ── IDENTITÉ ── */}
      <fieldset className="space-y-5">
        <legend className="text-xs tracking-[0.2em] uppercase text-sage-700 font-medium mb-5">
          Vos coordonnées
        </legend>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label="Nom complet" required error={errors.fullName?.message}>
            <input
              {...register('fullName')}
              placeholder="Jean Dupont"
              className="form-input"
            />
          </FormField>

          <FormField label="Entreprise" required error={errors.company?.message}>
            <input
              {...register('company')}
              placeholder="SARL Distribution SA"
              className="form-input"
            />
          </FormField>
        </div>

        <FormField label="Fonction" optional error={errors.position?.message}>
          <input
            {...register('position')}
            placeholder="Directeur achats"
            className="form-input"
          />
        </FormField>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label="Email professionnel" required error={errors.email?.message}>
            <input
              {...register('email')}
              type="email"
              placeholder="jean.dupont@entreprise.com"
              className="form-input"
            />
          </FormField>

          <FormField label="Téléphone" required error={errors.phone?.message}>
            <input
              {...register('phone')}
              type="tel"
              placeholder="+33 6 00 00 00 00"
              className="form-input"
            />
          </FormField>
        </div>

        <FormField label="Pays" required error={errors.country?.message}>
          <input
            {...register('country')}
            placeholder="France"
            className="form-input"
          />
        </FormField>
      </fieldset>

      <div className="h-px bg-sage-500/15" />

      {/* ── DEMANDE ── */}
      <fieldset className="space-y-5">
        <legend className="text-xs tracking-[0.2em] uppercase text-sage-700 font-medium mb-5">
          Votre demande
        </legend>

        {/* Type de demande */}
        <FormField label="Type de demande" required error={errors.requestType?.message}>
          <Controller
            name="requestType"
            control={control}
            render={({ field }) => (
              <div className="flex flex-wrap gap-2">
                {requestTypes.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => field.onChange(type.value)}
                    className={`px-4 py-2.5 text-sm rounded-md border transition-all duration-200 ${
                      field.value === type.value
                        ? 'bg-navy-700 border-navy-700 text-white shadow-md'
                        : 'bg-white border-sage-500/30 text-ink/70 hover:border-sage-500 hover:bg-cream'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            )}
          />
        </FormField>

        {/* Produits — multi-select */}
        <FormField
          label="Produit(s) d'intérêt"
          required
          error={errors.products?.message}
        >
          <Controller
            name="products"
            control={control}
            render={({ field }) => (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {productOptions.map((product) => {
                  const checked = field.value?.includes(product.value) ?? false;
                  return (
                    <label
                      key={product.value}
                      className={`flex items-center gap-3 px-4 py-3 rounded-md border cursor-pointer transition-all duration-200 ${
                        checked
                          ? 'bg-sage-500/10 border-sage-500'
                          : 'bg-white border-sage-500/20 hover:border-sage-500/50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={(e) => {
                          const next = e.target.checked
                            ? [...(field.value ?? []), product.value]
                            : (field.value ?? []).filter((v) => v !== product.value);
                          field.onChange(next);
                        }}
                        className="w-4 h-4 accent-forest-500 shrink-0"
                      />
                      <span className="text-sm text-ink/80">{product.label}</span>
                    </label>
                  );
                })}
              </div>
            )}
          />
        </FormField>

        {/* Volume estimé */}
        <FormField label="Volume estimé" optional error={errors.estimatedVolume?.message}>
          <input
            {...register('estimatedVolume')}
            placeholder="ex: 5 tonnes/mois, 2 conteneurs/an…"
            className="form-input"
          />
        </FormField>

        {/* Message */}
        <FormField
          label="Votre message"
          required
          hint={`${messageValue.length} / 2000`}
          error={errors.message?.message}
        >
          <textarea
            {...register('message')}
            rows={6}
            placeholder="Décrivez votre besoin, vos volumes, votre marché de destination..."
            className="form-input resize-none"
          />
        </FormField>
      </fieldset>

      <div className="h-px bg-sage-500/15" />

      {/* ── RGPD ── */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            {...register('acceptTerms')}
            type="checkbox"
            className="mt-0.5 w-4 h-4 accent-navy-700 shrink-0"
          />
          <span className="text-sm text-ink/60 font-light leading-relaxed group-hover:text-ink/80 transition-colors">
            J&apos;accepte que mes données soient utilisées par CHAP & CO pour traiter
            ma demande. Conformément au RGPD, vous pouvez à tout moment demander
            la suppression de vos données.
          </span>
        </label>
        {errors.acceptTerms && (
          <p className="mt-2 text-xs text-red-500 flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.acceptTerms.message}
          </p>
        )}
      </div>

      {/* ── SUBMIT ── */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Envoyer ma demande
            </>
          )}
        </Button>
        <p className="text-xs text-ink/40 font-light">
          Réponse garantie sous 48h ouvrées
        </p>
      </div>
    </form>
  );
}

// ─────────────────────────────────────────────────────
// FormField wrapper
// ─────────────────────────────────────────────────────
interface FormFieldProps {
  label?: string;
  required?: boolean;
  optional?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}

function FormField({ label, required, optional, hint, error, children }: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      {label && (
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-navy-700">
            {label}
            {required && <span className="text-red-500 ml-0.5">*</span>}
            {optional && (
              <span className="text-ink/40 font-light ml-1.5 text-xs">(facultatif)</span>
            )}
          </label>
          {hint && <span className="text-xs text-ink/40">{hint}</span>}
        </div>
      )}

      {children}

      {error && (
        <p className="text-xs text-red-500 flex items-center gap-1.5 mt-1">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}
