// Environment configuration
export const ENV = {
  SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL || "",
  SUPABASE_ANON_KEY: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "",
  GEMINI_API_KEY: process.env.EXPO_PUBLIC_GEMINI_API_KEY || "",
  IMGBB_API_KEY: process.env.EXPO_PUBLIC_IMGBB_API_KEY || "",
  // SECRET_KEY: Constants.expoConfig?.extra?.secretKey || process.env.SECRET_KEY,
} as const;
