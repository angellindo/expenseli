// App constants
export const COLORS = {
  primary: "#3B82F6",
  secondary: "#1D4ED8",
  success: "#10B981",
  error: "#EF4444",
  warning: "#F59E0B",
  background: "#F8FAFC",
  backgroundDark: "#0A0A0A",
  text: "#1E293B",
  textDark: "#FFFFFF",
  gray: "#64748B",
} as const;

export const FONTS = {
  spaceGrotesk: "SpaceGrotesk",
  instrumentSans: "InstrumentSans",
  instrumentSerif: "InstrumentSerif",
} as const;

export const CATEGORIES = [
  "Dining",
  "Groceries",
  "Shopping",
  "Entertainment",
  "Transportation",
  "Utilities",
  "Housing",
  "Health",
  "Education",
  "Travel",
  "Other",
] as const;

export const CURRENCIES = [
  "USD",
  "CAD",
  "EUR",
  "GBP",
  "AUD",
  "INR",
  "JPY",
  "CNY",
] as const;

export const PAYMENT_METHODS = [
  "Credit Card",
  "Debit Card",
  "Cash",
  "Apple Pay",
  "Google Pay",
  "PayPal",
  "Gift Card",
  "Store Credit",
  "Other",
] as const;
