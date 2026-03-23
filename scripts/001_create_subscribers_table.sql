-- Create subscribers table for storing email sign-ups
CREATE TABLE IF NOT EXISTS public.subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  email_sent BOOLEAN DEFAULT FALSE,
  email_sent_at TIMESTAMP WITH TIME ZONE,
  source TEXT DEFAULT 'free_chapter',
  ip_address TEXT,
  user_agent TEXT
);

-- Create index for faster email lookups
CREATE INDEX IF NOT EXISTS idx_subscribers_email ON public.subscribers(email);

-- Create index for finding unsent emails
CREATE INDEX IF NOT EXISTS idx_subscribers_email_sent ON public.subscribers(email_sent) WHERE email_sent = FALSE;

-- Enable Row Level Security
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- Policy: Allow inserts from anyone (for the signup form)
CREATE POLICY "Allow public inserts" ON public.subscribers
  FOR INSERT
  WITH CHECK (true);

-- Policy: Only service role can read/update (for admin access and email sending)
-- This means the table data is only accessible via server-side code with service role key
CREATE POLICY "Service role can do everything" ON public.subscribers
  FOR ALL
  USING (auth.role() = 'service_role');

-- Add comment to table
COMMENT ON TABLE public.subscribers IS 'Email subscribers for free chapter download';
