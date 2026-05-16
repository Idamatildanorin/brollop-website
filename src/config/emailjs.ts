/** EmailJS — nycklar via .env (VITE_*), committas inte */
export const emailjsConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '',
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '',
};

export const isEmailJsConfigured = (): boolean =>
  Boolean(emailjsConfig.publicKey && emailjsConfig.serviceId && emailjsConfig.templateId);
