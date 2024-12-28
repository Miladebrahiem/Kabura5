/*
  # Create dishes and categories tables

  1. New Tables
    - `dish_categories`
      - `id` (uuid, primary key)
      - `name` (text, unique)
      - `slug` (text, unique)
      - `created_at` (timestamp)
    
    - `dishes`
      - `id` (uuid, primary key) 
      - `name` (text)
      - `description` (text)
      - `price` (decimal)
      - `type` (enum: vegan, vegetarian, meat)
      - `category_id` (uuid, foreign key)
      - `history` (text)
      - `image_url` (text)
      - `min_people` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      - `active` (boolean)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to manage dishes
    - Add policies for public users to view active dishes
*/

-- Create dish type enum if it doesn't exist
DO $$ 
BEGIN
  CREATE TYPE dish_type AS ENUM ('vegan', 'vegetarian', 'meat');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- Create categories table
CREATE TABLE IF NOT EXISTS dish_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  slug text NOT NULL UNIQUE,
  created_at timestamptz DEFAULT now()
);

-- Create dishes table
CREATE TABLE IF NOT EXISTS dishes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price decimal(10,2) NOT NULL DEFAULT 0,
  type dish_type NOT NULL DEFAULT 'meat',
  category_id uuid REFERENCES dish_categories(id) ON DELETE CASCADE,
  history text,
  image_url text,
  min_people integer NOT NULL DEFAULT 1,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  active boolean DEFAULT true,
  
  CONSTRAINT price_positive CHECK (price >= 0),
  CONSTRAINT min_people_positive CHECK (min_people > 0)
);

-- Enable RLS
ALTER TABLE dish_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE dishes ENABLE ROW LEVEL SECURITY;

-- Policies for categories
CREATE POLICY "Public users can view categories" ON dish_categories
  FOR SELECT TO public
  USING (true);

CREATE POLICY "Authenticated users can manage categories" ON dish_categories
  FOR ALL TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policies for dishes
CREATE POLICY "Public users can view active dishes" ON dishes
  FOR SELECT TO public
  USING (active = true);

CREATE POLICY "Authenticated users can manage dishes" ON dishes
  FOR ALL TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create updated_at function
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$ 
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop trigger if exists and recreate
DROP TRIGGER IF EXISTS update_dishes_updated_at ON dishes;
CREATE TRIGGER update_dishes_updated_at
  BEFORE UPDATE ON dishes
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();