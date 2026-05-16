/** EmailJS — client-side public key (syns i webbläsaren oavsett hur den lagras) */
const defaults = {
  publicKey: 'TrPdgkkOUYIHHEi6A',
  serviceId: 'service_fzp1zvi',
  templateId: 'template_jvsuzlv',
} as const;

export const emailjsConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || defaults.publicKey,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || defaults.serviceId,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || defaults.templateId,
};

export const isEmailJsConfigured = (): boolean =>
  Boolean(emailjsConfig.publicKey && emailjsConfig.serviceId && emailjsConfig.templateId);
