/*
  # Insert Initial Dishes

  1. Data Changes
    - Insert initial dish records with categories, prices, and descriptions
    - All dishes have proper categorization and types
    - Prices are set per person
    - Minimum people requirements are set

  2. Categories
    - Voorgerechten (Koude/Warme Selecties)
    - Hoofdgerechten (Rijst/Vlees)
    - Kebab gerechten
    - Bijgerechten
    - Nagerechten/Desserts

  Note: All prices are per person
*/

-- Insert dishes safely
INSERT INTO dishes (
  name,
  description,
  price,
  type,
  category,
  sub_category,
  min_people,
  active
)
VALUES
  -- Voorgerechten - Koude Selecties
  (
    'Afghaanse Salade',
    'Frisse salade met tomaat, komkommer, rode ui en een citroendressing',
    4.95,
    'vegan',
    'Voorgerechten',
    'Koude Selectie',
    10,
    true
  ),
  (
    'Borani Banjan',
    'Gegrilde aubergine met yoghurtsaus en gedroogde munt',
    5.95,
    'vegetarian',
    'Voorgerechten',
    'Koude Selectie',
    10,
    true
  ),

  -- Voorgerechten - Warme Selecties
  (
    'Afghaanse Samosa',
    'Krokante driehoekige pasteitjes gevuld met kruidige aardappelen en groenten',
    6.95,
    'vegetarian',
    'Voorgerechten',
    'Warme Selecties',
    10,
    true
  ),
  (
    'Mantoe',
    'Gestoomde dumplings gevuld met gekruid gehakt en ui, geserveerd met yoghurtsaus',
    7.95,
    'meat',
    'Voorgerechten',
    'Warme Selecties',
    10,
    true
  ),

  -- Hoofdgerechten - Rijstgerechten
  (
    'Kabuli Palaw',
    'Traditionele rijstschotel met rozijnen, wortelen en lamsvlees',
    18.95,
    'meat',
    'Hoofdgerechten',
    'Rijstgerechten',
    10,
    true
  ),
  (
    'Qabeli Gosht',
    'Gestoofd lamsvlees met geurige rijst, rozijnen en amandelen',
    19.95,
    'meat',
    'Hoofdgerechten',
    'Rijstgerechten',
    10,
    true
  ),

  -- Hoofdgerechten - Vegetarisch
  (
    'Sabzi Chalaw',
    'Gestoofde spinazie met rijst en kruiden',
    15.95,
    'vegetarian',
    'Hoofdgerechten',
    'Vlees gerechten',
    10,
    true
  ),
  (
    'Bamya Chalaw',
    'Okra in tomatensaus met basmatirijst',
    14.95,
    'vegan',
    'Hoofdgerechten',
    'Vlees gerechten',
    10,
    true
  ),

  -- Bijgerechten
  (
    'Naan',
    'Traditioneel Afghaans brood uit de tandoor',
    2.95,
    'vegan',
    'Bijgerechten',
    null,
    10,
    true
  ),
  (
    'Challaw',
    'Witte basmatirijst met kardemom',
    3.95,
    'vegan',
    'Bijgerechten',
    null,
    10,
    true
  ),

  -- Nagerechten
  (
    'Firni',
    'Romige rijstpudding met kardemom en pistache',
    5.95,
    'vegetarian',
    'Nagerechten/Desserts',
    null,
    10,
    true
  ),
  (
    'Afghaanse Baklava',
    'Zoet bladerdeeggebak met noten en honing',
    4.95,
    'vegetarian',
    'Nagerechten/Desserts',
    null,
    10,
    true
  );