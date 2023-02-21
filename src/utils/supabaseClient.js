import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_TECHNOHACK_SUPABASE_URL;
const supabaseSecretKey = process.env.REACT_APP_TECHNOHACK_SUPABASE_API_KEY;

const SupabaseClient = createClient(supabaseUrl, supabaseSecretKey);

export { SupabaseClient };
