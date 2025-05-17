import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sdhcwdviclpgsuiiyakg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkaGN3ZHZpY2xwZ3N1aWl5YWtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1MTE2NDAsImV4cCI6MjA2MDA4NzY0MH0.LuslalHAUuqeF08k1OEYdWrQ0OTQHKU8jU2znTAMkJo";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
