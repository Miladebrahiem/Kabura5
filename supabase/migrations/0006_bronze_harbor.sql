/*
  # Fix Category Relationship

  1. Changes
    - Add category column for direct category name storage
    - Migrate existing data
    - Add indexes for performance
  
  2. Security
    - Maintain existing RLS policies
*/

-- Add category column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'dishes' AND column_name = 'category'
  ) THEN
    ALTER TABLE dishes ADD COLUMN category text;
  END IF;
END $$;

-- Create index on category for better query performance
CREATE INDEX IF NOT EXISTS dishes_category_idx ON dishes(category);

-- Update existing rows to copy category name from category_id relation if needed
UPDATE dishes d
SET category = dc.name
FROM dish_categories dc
WHERE d.category_id = dc.id AND d.category IS NULL;

-- Make category column NOT NULL with a default
ALTER TABLE dishes 
  ALTER COLUMN category SET NOT NULL,
  ALTER COLUMN category SET DEFAULT 'Uncategorized';