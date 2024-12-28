/*
  # Add buffet packages support
  
  1. New Tables
    - buffet_packages
      - id (uuid, primary key)
      - name (text)
      - description (text)
      - price (decimal)
      - min_people (integer)
      - image_url (text)
      - category (text)
      - active (boolean)
      - created_at (timestamptz)
      - updated_at (timestamptz)
    
    - package_dishes
      - package_id (uuid, references buffet_packages)
      - dish_id (uuid, references dishes)
      - created_at (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access
    - Add policies for authenticated write access
*/

-- Create buffet_packages table
CREATE TABLE IF NOT EXISTS buffet_packages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price decimal(10,2) NOT NULL DEFAULT 0,
  min_people integer NOT NULL DEFAULT 1,
  image_url text,
  category text NOT NULL,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),

  CONSTRAINT price_positive CHECK (price >= 0),
  CONSTRAINT min_people_positive CHECK (min_people > 0)
);

-- Create package_dishes junction table
CREATE TABLE IF NOT EXISTS package_dishes (
  package_id uuid REFERENCES buffet_packages(id) ON DELETE CASCADE,
  dish_id uuid REFERENCES dishes(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  PRIMARY KEY (package_id, dish_id)
);

-- Enable RLS
ALTER TABLE buffet_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE package_dishes ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Public users can view active packages" ON buffet_packages
  FOR SELECT TO public
  USING (active = true);

CREATE POLICY "Authenticated users can manage packages" ON buffet_packages
  FOR ALL TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Public users can view package dishes" ON package_dishes
  FOR SELECT TO public
  USING (true);

CREATE POLICY "Authenticated users can manage package dishes" ON package_dishes
  FOR ALL TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS buffet_packages_category_idx ON buffet_packages(category);
CREATE INDEX IF NOT EXISTS buffet_packages_active_idx ON buffet_packages(active);
CREATE INDEX IF NOT EXISTS package_dishes_package_id_idx ON package_dishes(package_id);
CREATE INDEX IF NOT EXISTS package_dishes_dish_id_idx ON package_dishes(dish_id);

-- Add updated_at trigger
CREATE TRIGGER update_buffet_packages_updated_at
  BEFORE UPDATE ON buffet_packages
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();