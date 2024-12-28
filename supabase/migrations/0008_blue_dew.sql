/*
  # Update Buffet Categories Structure

  1. Changes
    - Add text-based category columns
    - Update dish type enum to include glutenfree
    - Set up category validation
  
  2. Categories Structure
    - Main categories:
      - Voorgerechten
      - Hoofdgerechten
      - Kebab gerechten
      - Bijgerechten
      - Nagerechten/Desserts
      - Drinken
    
    3. Sub-categories:
      - For Voorgerechten:
        - Koude Selectie
        - Warme Selecties
      - For Hoofdgerechten:
        - Rijstgerechten
        - Vlees gerechten
*/

-- First, update the dish_type enum to include glutenfree
ALTER TYPE dish_type ADD VALUE IF NOT EXISTS 'glutenfree';

-- Ensure category columns exist and remove any constraints
DO $$ 
BEGIN
  -- Drop existing constraints if they exist
  ALTER TABLE dishes DROP CONSTRAINT IF EXISTS valid_categories;
  ALTER TABLE dishes DROP CONSTRAINT IF EXISTS valid_subcategories;
  
  -- Add category if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'dishes' AND column_name = 'category'
  ) THEN
    ALTER TABLE dishes ADD COLUMN category text;
  END IF;

  -- Add sub_category if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'dishes' AND column_name = 'sub_category'
  ) THEN
    ALTER TABLE dishes ADD COLUMN sub_category text;
  END IF;
END $$;

-- Update any null categories to a default value
UPDATE dishes 
SET category = 'Voorgerechten'
WHERE category IS NULL OR category NOT IN (
  'Voorgerechten',
  'Hoofdgerechten',
  'Kebab gerechten',
  'Bijgerechten',
  'Nagerechten/Desserts',
  'Drinken'
);

-- Make category NOT NULL
ALTER TABLE dishes ALTER COLUMN category SET NOT NULL;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS dishes_category_idx ON dishes(category);
CREATE INDEX IF NOT EXISTS dishes_subcategory_idx ON dishes(sub_category);

-- Add check constraint for valid categories
ALTER TABLE dishes ADD CONSTRAINT valid_categories CHECK (
  category IN (
    'Voorgerechten',
    'Hoofdgerechten',
    'Kebab gerechten',
    'Bijgerechten',
    'Nagerechten/Desserts',
    'Drinken'
  )
);

-- Add check constraint for valid subcategories
ALTER TABLE dishes ADD CONSTRAINT valid_subcategories CHECK (
  sub_category IS NULL OR (
    (category = 'Voorgerechten' AND sub_category IN ('Koude Selectie', 'Warme Selecties'))
    OR 
    (category = 'Hoofdgerechten' AND sub_category IN ('Rijstgerechten', 'Vlees gerechten'))
  )
);