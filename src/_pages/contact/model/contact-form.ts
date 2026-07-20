export interface ContactFormValues {
  readonly name: string;
  readonly email: string;
  readonly company: string;
  readonly market: string;
  readonly message: string;
}

export type ContactSubmissionPhase = "idle" | "launching" | "success";

export const contactFormDefaultValues: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  market: "",
  message: "",
};

export const contactMarketOptions = [
  "Southeast Asia",
  "Middle East",
  "South Asia",
  "Central Asia",
  "The Caucasus",
  "Multi-market / not sure yet",
] as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactName(value: string) {
  const name = value.trim();

  if (!name) return "Please enter your name.";
  if (name.length < 2) return "Please enter at least 2 characters.";

  return undefined;
}

export function validateContactEmail(value: string) {
  const email = value.trim();

  if (!email) return "Please enter your work email.";
  if (!emailPattern.test(email)) return "Please enter a valid email address.";

  return undefined;
}

export function validateContactCompany(value: string) {
  const company = value.trim();

  if (!company) return "Please enter your company name.";
  if (company.length < 2) return "Please enter at least 2 characters.";

  return undefined;
}

export function validateContactMarket(value: string) {
  return value ? undefined : "Please select a priority market.";
}

export function validateContactMessage(value: string) {
  const message = value.trim();

  if (!message) return "Please tell us about your expansion plans.";
  if (message.length < 10) return "Please add a little more detail (20 characters minimum).";

  return undefined;
}

export function getContactFieldError(errors: readonly unknown[]) {
  return errors.find((error): error is string => typeof error === "string");
}

export function waitForFakeTransmission(duration: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, duration);
  });
}
