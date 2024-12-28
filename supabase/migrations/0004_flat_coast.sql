/*
  # Update dishes schema and policies

  1. Changes
    - Add sub_category column to dishes table
    - Add performance indexes
    - Update RLS policies with more granular control

  2. Indexes
    - Category ID index for foreign key lookups
    - Type index for filtering by dish type
    - Active status index for filtering active dishes
    - Price index for range queries

  3. Security
    - Drop and recreate policies to avoid conflicts
    - Add granular policies for CRUD operations
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
CREATE INDEX IF NOT EXISTS dishes_price_idx ON dishes USING btree(price);

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Public users can view active dishes" ON dishes;
DROP POLICY IF EXISTS "Authenticated users can manage dishes" ON dishes;

-- Create new policies with more granular control
CREATE POLICY "dishes_select_policy" ON dishes
  FOR SELECT TO public
  USING (active = true);

CREATE POLICY "dishes_insert_policy" ON dishes
  FOR INSERT TO authenticated
  WITH CHECK (true);

CREATE POLICY "dishes_update_policy" ON dishes
  FOR UPDATE TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "dishes_delete_policy" ON dishes
  FOR DELETE TO authenticated
  USING (true);