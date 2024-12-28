/*
  # Add min_people column and update schema

  1. Changes
    - Add min_people column if it doesn't exist
    - Update dishes table constraints
    - Add index for min_people column
  
  2. Security
    - Maintain existing RLS policies
*/

DO $$ 
BEGIN
  -- Add min_people column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'dishes' AND column_name = 'min_people'
  ) THEN
    ALTER TABLE dishes ADD COLUMN min_people integer NOT NULL DEFAULT 1;
    ALTER TABLE dishes ADD CONSTRAINT min_people_positive CHECK (min_people > 0);
  END IF;
END $$;

-- Add index for min_people queries
CREATE INDEX IF NOT EXISTS dishes_min_people_idx ON dishes(min_people);