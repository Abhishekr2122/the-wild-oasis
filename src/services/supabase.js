import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tuohajsienigjfhxgbng.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1b2hhanNpZW5pZ2pmaHhnYm5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY3MzkwMjIsImV4cCI6MjAxMjMxNTAyMn0.btmA1Fg5w4Iwljehsnlsm1wcGiK8bMUCJMGyPvoF2Mo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
