// src/supabase.js
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://idrzbfsvobknfxeinvcq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkcnpiZnN2b2JrbmZ4ZWludmNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0Mzg2MzEsImV4cCI6MjA2MzAxNDYzMX0.NlJVCcvb2E32eRcyNhk8cjfeeGh68FenerQ4gHUfZHo';
export const supabase = createClient(supabaseUrl, supabaseKey);