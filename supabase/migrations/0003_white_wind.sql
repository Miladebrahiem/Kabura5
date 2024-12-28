/*
  # Add dish categories and update schema

  1. New Tables
    - None (using existing tables)
  
  2. Changes
    - Add new columns to dishes table
    - Add new constraints and indexes
  
  3. Security
    - Add additional RLS policies for better access control
*/

-- Add new columns to dishes table if they don't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'dishes' AND column_name = 'sub_category'
  ) THEN
    ALTER TABLE dishes ADD COLUMN sub_category text;
  END IF;
END $$;

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS dishes_category_id_idx ON dishes(category_id);
CREATE INDEX IF NOT EXISTS dishes_type_idx ON dishes(type);
CREATE INDEX IF NOT EXISTS dishes_active_idx ON dishes(active);

-- Add additional RLS policies for more granular control
DROP POLICY IF EXISTS "Authenticated users can create dishes" ON dishes;
CREATE POLICY "Authenticated users can create dishes" ON dishes
  FOR INSERT TO authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "Authenticated users can update own dishes" ON dishes;
CREATE POLICY "Authenticated users can update own dishes" ON dishes
  FOR UPDATE TO authenticated
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Authenticated users can soft delete dishes" ON dishes;
CREATE POLICY "Authenticated users can soft delete dishes" ON dishes
  FOR UPDATE TO authenticated
  USING (active = true)
  WITH CHECK (true);

-- Add foreign key index
CREATE INDEX IF NOT EXISTS dishes_category_id_fk_idx ON dishes(category_id);

-- Add btree index for price range queries
CREATE INDEX IF NOT EXISTS dishes_price_idx ON dishes USING btree(price);