export const RSVP_LIMITS = {
  name: 120,
  danceSong: 200,
  dietaryRestrictions: 500,
  message: 1000,
} as const;

const NAME_MIN_LETTERS = 2;

/** Tar bort styrtecken och begränsar längd innan data skickas vidare */
export function sanitizeRsvpField(value: string, maxLength: number): string {
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .trim()
    .slice(0, maxLength);
}

/** Minst två bokstäver — "." eller "---" godkänns inte */
export function isValidGuestName(name: string): boolean {
  const trimmed = sanitizeRsvpField(name, RSVP_LIMITS.name);
  if (!trimmed) return false;
  const letterCount = (trimmed.match(/\p{L}/gu) ?? []).length;
  return letterCount >= NAME_MIN_LETTERS;
}

export function validateRsvpInput(name: string, attending: string) {
  const trimmedName = sanitizeRsvpField(name, RSVP_LIMITS.name);
  const errors: { name?: string; attending?: string } = {};

  if (!trimmedName) {
    errors.name = 'Skriv ditt namn';
  } else if (!isValidGuestName(name)) {
    errors.name = 'Skriv ett riktigt namn (minst två bokstäver)';
  }

  if (attending !== 'yes' && attending !== 'no') {
    errors.attending = 'Välj om du kommer eller inte';
  }

  return { errors, trimmedName, isValid: Object.keys(errors).length === 0 };
}

export function canSubmitRsvp(name: string, attending: string): boolean {
  return isValidGuestName(name) && (attending === 'yes' || attending === 'no');
}
