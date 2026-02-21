import { createClient } from 
'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = "https://auhikfbzfufxtywumtna.supabase.co"
const supabaseKey = "sb_publishable_8LWIsqI6VEM8zhHPA7uUcw_7ubq1nZh"

export const supabase = createClient(supabaseUrl, supabaseKey);