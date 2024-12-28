/*
  # Add Multi-level Category Support

  1. New Structure
    - Main categories
    - Sub-categories
    - Sub-sub-categories
  
  2. Changes
    - Add sub_category and sub_sub_category columns
    - Add indexes for better performance
    - Update RLS policies
*/

-- Add category columns if they don't exist
DO $$ 
BEGIN
  -- Ensure main category exists
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'dishes' AND column_name = 'category'
  ) THEN
    ALTER TABLE dishes ADD COLUMN category text NOT NULL DEFAULT 'Uncategorized';
  END IF;

  -- Add sub_category if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'dishes' AND column_name = 'sub_category'
  ) THEN
    ALTER TABLE dishes ADD COLUMN sub_category text;
  END IF;

  -- Add sub_sub_category if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'dishes' AND column_name = 'sub_sub_category'
  ) THEN
    ALTER TABLE dishes ADD COLUMN sub_sub_category text;
  END IF;
END $$;

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS dishes_category_idx ON dishes(category);
CREATE INDEX IF NOT EXISTS dishes_sub_category_idx ON dishes(sub_category);
CREATE INDEX IF NOT EXISTS dishes_sub_sub_category_idx ON dishes(sub_sub_category);