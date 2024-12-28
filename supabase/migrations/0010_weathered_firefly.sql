/*
  # Add Form Submissions Tables

  1. New Tables
    - form_submissions
      - Generic table for all form submissions
    - callback_requests
      - Specific table for callback requests
  
  2. Security
    - Enable RLS
    - Add policies for public submission and admin viewing
*/

-- Create form submissions table
CREATE TABLE IF NOT EXISTS form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  form_type text NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  message text,
  submitted_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

-- Create callback requests table
CREATE TABLE IF NOT EXISTS callback_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  preferred_date date,
  preferred_time time,
  contact_preference text NOT NULL,
  submitted_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

-- Enable RLS
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE callback_requests ENABLE ROW LEVEL SECURITY;

-- Policies for form submissions
CREATE POLICY "Anyone can insert form submissions" ON form_submissions
  FOR INSERT TO public
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view submissions" ON form_submissions
  FOR SELECT TO authenticated
  USING (true);

-- Policies for callback requests
CREATE POLICY "Anyone can insert callback requests" ON callback_requests
  FOR INSERT TO public
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view callback requests" ON callback_requests
  FOR SELECT TO authenticated
  USING (true);

-- Add indexes
CREATE INDEX form_submissions_type_idx ON form_submissions(form_type);
CREATE INDEX form_submissions_status_idx ON form_submissions(status);
CREATE INDEX callback_requests_status_idx ON callback_requests(status);
CREATE INDEX callback_requests_submitted_at_idx ON callback_requests(submitted_at);