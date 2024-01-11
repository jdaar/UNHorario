import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    'https://kvxgeeqrrzlufwawwsfn.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2eGdlZXFycnpsdWZ3YXd3c2ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ0MzQzMjksImV4cCI6MjAyMDAxMDMyOX0.Xs0qT1UYtc3OFh0oK0Wdu3SZnVjIeLi7eBY2FWQ0Re0'
)

