import { createClient } from "@supabase/supabase-js";

// For now, we'll use placeholder values
// In Phase 2, we'll set up proper environment variables
const supabaseUrl = "https://your-project.supabase.co";
const supabaseAnonKey = "your-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// We'll configure this properly in Phase 2
