/*
  # Create dishes and categories tables

  1. New Tables
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text, unique)
      - `slug` (text, unique)
      - `created_at` (timestamp)
    
    - `dishes`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `history` (text)
      - `price` (decimal)
      - `type` (enum: vegan, vegetarian, meat)
      - `category_id` (uuid, foreign key)
      - `sub_category` (text)
      - `image_url` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      - `active` (boolean)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to manage dishes
    - Add policies for public users to read dishes
*/

-- Create dish type enum
CREATE TYPE dish_type AS ENUM ('vegan', 'vegetarian', 'meat');

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
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
  history text,
  price decimal(10,2) NOT NULL DEFAULT 0,
  type dish_type NOT NULL,
  category_id uuid REFERENCES categories(id) ON DELETE CASCADE,
  sub_category text,
  image_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  active boolean DEFAULT true,
  
  CONSTRAINT price_positive CHECK (price >= 0)
);

-- Enable RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE dishes ENABLE ROW LEVEL SECURITY;

-- Policies for categories
CREATE POLICY "Allow public read access" ON categories
  FOR SELECT TO public
  USING (true);

CREATE POLICY "Allow authenticated users full access" ON categories
  FOR ALL TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policies for dishes
CREATE POLICY "Allow public read access to active dishes" ON dishes
  FOR SELECT TO public
  USING (active = true);

CREATE POLICY "Allow authenticated users full access" ON dishes
  FOR ALL TO authenticated
  USING (true)
  WITH CHECK (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically update updated_at
CREATE TRIGGER update_dishes_updated_at
  BEFORE UPDATE ON dishes
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();