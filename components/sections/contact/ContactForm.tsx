'use client';

import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { toast } from 'sonner';
import {
  contactFormSchema,
  type ContactFormValues,
  requestTypes,
  productOptions,
} from '@/lib/validations/contact';
import { products, getLocalized } from '@/data/products';
import { Button } from '@/components/ui/Button';
import { Send, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';

export function ContactForm() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const searchParams = useSearchParams();
  const preSelectedProduct = searchParams.get('product');
  const preSelectedType = searchParams.get('type') as ContactFormValues['requestType'] | null;

  const translatedRequestTypes = requestTypes.map((rt) => ({
    value: rt.value,
    label: t(`form_type_${rt.value}` as Parameters<typeof t>[0]),
  }));

  const translatedProductOptions = products.map((p) => ({
    value: p.slug,
    label: getLocalized(p.name, locale),
  }));

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
      const productLabel = translatedProductOptions.find((p) => p.value === preSelectedProduct)?.label;
      const typeLabel = translatedRequestTypes.find((rt) => rt.value === preSelectedType)?.label;
      if (productLabel && typeLabel) {
        setValue(
          'message',
          `${productLabel}\n${typeLabel}\n\n`
        );
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preSelectedProduct, preSelectedType, setValue]);

  const messageValue = watch('message') ?? '';

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('send_error');

      toast.success(t('form_success_title'), {
        description: t('form_success_desc'),
        duration: 5000,
        icon: <CheckCircle2 className="w-5 h-5 text-green-500" />,
      });

      reset();
    } catch {
      toast.error(t('form_error_title'), {
        description: t('form_error_desc'),
        duration: 5000,
        icon: <AlertCircle className="w-5 h-5 text-red-500" />,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">

      <fieldset className="space-y-5">
        <legend className="text-xs tracking-[0.2em] uppercase text-sage-700 font-medium mb-5">
          {t('form_section_identity')}
        </legend>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label={t('form_fullname')} required error={errors.fullName?.message}>
            <input
              {...register('fullName')}
              placeholder={t('form_fullname_placeholder')}
              className="form-input"
            />
          </FormField>

          <FormField label={t('form_company')} required error={errors.company?.message}>
            <input
              {...register('company')}
              placeholder={t('form_company_placeholder')}
              className="form-input"
            />
          </FormField>
        </div>

        <FormField label={t('form_position')} optional error={errors.position?.message} optionalLabel={t('form_optional')}>
          <input
            {...register('position')}
            placeholder={t('form_position_placeholder')}
            className="form-input"
          />
        </FormField>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label={t('form_email')} required error={errors.email?.message}>
            <input
              {...register('email')}
              type="email"
              placeholder={t('form_email_placeholder')}
              className="form-input"
            />
          </FormField>

          <FormField label={t('form_phone')} required error={errors.phone?.message}>
            <input
              {...register('phone')}
              type="tel"
              placeholder={t('form_phone_placeholder')}
              className="form-input"
            />
          </FormField>
        </div>

        <FormField label={t('form_country')} required error={errors.country?.message}>
          <input
            {...register('country')}
            placeholder={t('form_country_placeholder')}
            className="form-input"
          />
        </FormField>
      </fieldset>

      <div className="h-px bg-sage-500/15" />

      <fieldset className="space-y-5">
        <legend className="text-xs tracking-[0.2em] uppercase text-sage-700 font-medium mb-5">
          {t('form_section_request')}
        </legend>

        <FormField label={t('form_request_type')} required error={errors.requestType?.message}>
          <Controller
            name="requestType"
            control={control}
            render={({ field }) => (
              <div className="flex flex-wrap gap-2">
                {translatedRequestTypes.map((type) => (
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

        <FormField label={t('form_products')} required error={errors.products?.message}>
          <Controller
            name="products"
            control={control}
            render={({ field }) => (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {translatedProductOptions.map((product) => {
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

        <FormField label={t('form_volume')} optional error={errors.estimatedVolume?.message} optionalLabel={t('form_optional')}>
          <input
            {...register('estimatedVolume')}
            placeholder={t('form_volume_placeholder')}
            className="form-input"
          />
        </FormField>

        <FormField
          label={t('form_message')}
          required
          hint={`${messageValue.length} ${t('form_counter_suffix')}`}
          error={errors.message?.message}
        >
          <textarea
            {...register('message')}
            rows={6}
            placeholder={t('form_message_placeholder')}
            className="form-input resize-none"
          />
        </FormField>
      </fieldset>

      <div className="h-px bg-sage-500/15" />

      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            {...register('acceptTerms')}
            type="checkbox"
            className="mt-0.5 w-4 h-4 accent-navy-700 shrink-0"
          />
          <span className="text-sm text-ink/60 font-light leading-relaxed group-hover:text-ink/80 transition-colors">
            {t('form_gdpr')}
          </span>
        </label>
        {errors.acceptTerms && (
          <p className="mt-2 text-xs text-red-500 flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.acceptTerms.message}
          </p>
        )}
      </div>

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
              {t('form_submitting')}
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              {t('form_submit')}
            </>
          )}
        </Button>
        <p className="text-xs text-ink/40 font-light">
          {t('form_submit_note')}
        </p>
      </div>
    </form>
  );
}

interface FormFieldProps {
  label?: string;
  required?: boolean;
  optional?: boolean;
  optionalLabel?: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}

function FormField({ label, required, optional, optionalLabel, hint, error, children }: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      {label && (
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-navy-700">
            {label}
            {required && <span className="text-red-500 ml-0.5">*</span>}
            {optional && (
              <span className="text-ink/40 font-light ml-1.5 text-xs">{optionalLabel}</span>
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
