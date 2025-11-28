import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://pnnzneikeuljkwmruinl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBubnpuZWlrZXVsamt3bXJ1aW5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyOTI1NzAsImV4cCI6MjA3OTg2ODU3MH0.P192r0HUPPnHoT63tWK3SyrTJMkredCdrziMqCSu7GU';
export const supabase = createClient(supabaseUrl, supabaseKey);