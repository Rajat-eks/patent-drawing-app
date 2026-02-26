const FORM_PREFILL_KEY = "patent-drawing-app-form-prefill";

export interface SavedFormDetails {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
}

export function getSavedFormDetails(): Partial<SavedFormDetails> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(FORM_PREFILL_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Partial<SavedFormDetails>;
    return {
      name: parsed.name ?? "",
      email: parsed.email ?? "",
      phone: parsed.phone ?? "",
      organization: parsed.organization ?? "",
    };
  } catch {
    return {};
  }
}

export function saveFormDetails(details: Partial<SavedFormDetails>): void {
  if (typeof window === "undefined") return;
  try {
    const existing = getSavedFormDetails();
    const merged = {
      ...existing,
      ...details,
    };
    localStorage.setItem(FORM_PREFILL_KEY, JSON.stringify(merged));
  } catch {
    // ignore
  }
}

export function getInitialFormState<T extends SavedFormDetails>(
  defaults: T
): T {
  const saved = getSavedFormDetails();
  return {
    ...defaults,
    name: saved.name ?? defaults.name,
    email: saved.email ?? defaults.email,
    phone: saved.phone ?? defaults.phone,
    organization: saved.organization ?? defaults.organization,
  };
}
