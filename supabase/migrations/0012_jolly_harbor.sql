/*
  # Insert Additional Dishes

  1. Data Changes
    - Insert additional authentic Afghan dishes
    - Maintain proper categorization and types
    - Set appropriate prices per person
    - Include descriptions and dietary information

  2. Categories Added To
    - Voorgerechten (Koude/Warme Selecties)
    - Hoofdgerechten (Rijst/Vlees)
    - Kebab gerechten
    - Bijgerechten
    - Nagerechten/Desserts

  Note: All prices are per person
*/

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
    'Afghaanse Hummus',
    'Romige hummus met tahin, olijfolie en Afghaanse kruiden',
    4.95,
    'vegan',
    'Voorgerechten',
    'Koude Selectie',
    10,
    true
  ),
  (
    'Borani Kadu',
    'Gegrilde pompoen met yoghurtsaus en gedroogde munt',
    5.95,
    'vegetarian',
    'Voorgerechten',
    'Koude Selectie',
    10,
    true
  ),

  -- Voorgerechten - Warme Selecties
  (
    'Aushak',
    'Gestoomde dumplings gevuld met prei en spinazie, geserveerd met tomatensaus',
    7.95,
    'vegetarian',
    'Voorgerechten',
    'Warme Selecties',
    10,
    true
  ),
  (
    'Bolani',
    'Gevuld platbrood met aardappel en kruiden',
    6.95,
    'vegan',
    'Voorgerechten',
    'Warme Selecties',
    10,
    true
  ),

  -- Hoofdgerechten - Rijstgerechten
  (
    'Zamarod Palaw',
    'Basmatirijst met spinazie en lamsvlees',
    17.95,
    'meat',
    'Hoofdgerechten',
    'Rijstgerechten',
    10,
    true
  ),
  (
    'Naranj Palaw',
    'Saffraan rijst met sinaasappelschil, amandelen en rozijnen',
    16.95,
    'vegan',
    'Hoofdgerechten',
    'Rijstgerechten',
    10,
    true
  ),

  -- Hoofdgerechten - Vlees gerechten
  (
    'Korma Gosht',
    'Gestoofd lamsvlees in rijke tomatensaus met Afghaanse kruiden',
    18.95,
    'meat',
    'Hoofdgerechten',
    'Vlees gerechten',
    10,
    true
  ),
  (
    'Sabzi Gosht',
    'Lamsvlees met spinazie en kruiden',
    19.95,
    'meat',
    'Hoofdgerechten',
    'Vlees gerechten',
    10,
    true
  ),

  -- Kebab gerechten
  (
    'Chopan Kebab',
    'Gemarineerde lamskoteletten van de grill',
    21.95,
    'meat',
    'Kebab gerechten',
    null,
    10,
    true
  ),
  (
    'Murgh Kebab',
    'Gemarineerde kipfilet van de grill',
    16.95,
    'meat',
    'Kebab gerechten',
    null,
    10,
    true
  ),
  (
    'Sabzi Kebab',
    'Gegrilde groenten met Afghaanse kruiden',
    14.95,
    'vegan',
    'Kebab gerechten',
    null,
    10,
    true
  ),

  -- Bijgerechten
  (
    'Afghaanse Rijst',
    'Geurige basmatirijst met saffraan en kardemom',
    4.95,
    'vegan',
    'Bijgerechten',
    null,
    10,
    true
  ),
  (
    'Salata',
    'Frisse salade met tomaat, komkommer en rode ui',
    3.95,
    'vegan',
    'Bijgerechten',
    null,
    10,
    true
  ),

  -- Nagerechten/Desserts
  (
    'Gosh Feel',
    'Traditioneel Afghaans koekje met pistache en kardemom',
    4.95,
    'vegetarian',
    'Nagerechten/Desserts',
    null,
    10,
    true
  ),
  (
    'Sheer Yakh',
    'Afghaans roomijs met saffraan en pistache',
    5.95,
    'vegetarian',
    'Nagerechten/Desserts',
    null,
    10,
    true
  );