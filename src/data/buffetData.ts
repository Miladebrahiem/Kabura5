import type { Dish } from '../types/dish';

export const buffetData: Dish[] = [
  // Voorgerechten - Koud
  {
    id: 'vk1',
    name: 'Afghaanse Salade',
    description: 'Frisse salade met tomaat, komkommer, rode ui en een citroendressing',
    history: 'Een lichte start van de maaltijd, typisch voor de Afghaanse keuken',
    price: 4.95,
    type: 'vegan',
    category: 'Voorgerechten',
    subCategory: 'Koude Voorgerechten',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80'
  },
  {
    id: 'vk2',
    name: 'Borani Banjan',
    description: 'Gegrilde aubergine met yoghurtsaus en gedroogde munt',
    history: 'Een klassiek Afghaans voorgerecht dat de smaak van gegrilde groenten combineert met romige yoghurt',
    price: 5.95,
    type: 'vegetarian',
    category: 'Voorgerechten',
    subCategory: 'Koude Voorgerechten',
    imageUrl: 'https://images.unsplash.com/photo-1662376569449-73e286d49a91?auto=format&fit=crop&q=80'
  },

  // Voorgerechten - Warm
  {
    id: 'vw1',
    name: 'Afghaanse Samosa',
    description: 'Krokante driehoekige pasteitjes gevuld met kruidige aardappelen en groenten',
    history: 'Een populaire snack die zijn weg vond van de zijderoute naar de Afghaanse keuken',
    price: 6.95,
    type: 'vegetarian',
    category: 'Voorgerechten',
    subCategory: 'Warme Voorgerechten',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80'
  },
  {
    id: 'vw2',
    name: 'Mantoe',
    description: 'Gestoomde dumplings gevuld met gekruid gehakt en ui, geserveerd met yoghurtsaus',
    history: 'Een geliefd gerecht dat de Chinese invloed op de Afghaanse keuken laat zien',
    price: 7.95,
    type: 'meat',
    category: 'Voorgerechten',
    subCategory: 'Warme Voorgerechten',
    imageUrl: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80'
  },

  // Hoofdgerechten - Vlees
  {
    id: 'hv1',
    name: 'Kabuli Palaw',
    description: 'Traditionele rijstschotel met rozijnen, wortelen en lamsvlees',
    history: 'Het nationale gerecht van Afghanistan, genoemd naar de hoofdstad Kabul',
    price: 18.95,
    type: 'meat',
    category: 'Hoofdgerechten',
    subCategory: 'Vleesgerechten',
    imageUrl: 'https://images.unsplash.com/photo-1590593162201-f67611a18b87?auto=format&fit=crop&q=80'
  },
  {
    id: 'hv2',
    name: 'Qabeli Gosht',
    description: 'Gestoofd lamsvlees met geurige rijst, rozijnen en amandelen',
    history: 'Een koninklijk gerecht dat vroeger werd geserveerd aan het hof van Afghanistan',
    price: 19.95,
    type: 'meat',
    category: 'Hoofdgerechten',
    subCategory: 'Vleesgerechten',
    imageUrl: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80'
  },

  // Hoofdgerechten - Vegetarisch
  {
    id: 'hg1',
    name: 'Sabzi Chalaw',
    description: 'Gestoofde spinazie met rijst en kruiden',
    history: 'Een traditioneel vegetarisch gerecht dat de liefde voor verse groenten toont',
    price: 15.95,
    type: 'vegetarian',
    category: 'Hoofdgerechten',
    subCategory: 'Vegetarische Gerechten',
    imageUrl: 'https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?auto=format&fit=crop&q=80'
  },
  {
    id: 'hg2',
    name: 'Bamya Chalaw',
    description: 'Okra in tomatensaus met basmatirijst',
    history: 'Een geliefd vegetarisch gerecht dat de diversiteit van de Afghaanse keuken laat zien',
    price: 14.95,
    type: 'vegan',
    category: 'Hoofdgerechten',
    subCategory: 'Vegetarische Gerechten',
    imageUrl: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&q=80'
  },

  // Bijgerechten
  {
    id: 'b1',
    name: 'Naan',
    description: 'Traditioneel Afghaans brood uit de tandoor',
    history: 'Het dagelijkse brood van Afghanistan, gebakken in een traditionele kleioven',
    price: 2.95,
    type: 'vegan',
    category: 'Bijgerechten',
    imageUrl: 'https://images.unsplash.com/photo-1584534413576-10c3f641eb44?auto=format&fit=crop&q=80'
  },
  {
    id: 'b2',
    name: 'Challaw',
    description: 'Witte basmatirijst met kardemom',
    history: 'De basis van vele Afghaanse maaltijden, perfect gekookt met aromaten',
    price: 3.95,
    type: 'vegan',
    category: 'Bijgerechten',
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80'
  },

  // Desserts
  {
    id: 'd1',
    name: 'Firni',
    description: 'Romige rijstpudding met kardemom en pistache',
    history: 'Een traditioneel dessert dat wordt geserveerd bij speciale gelegenheden',
    price: 5.95,
    type: 'vegetarian',
    category: 'Desserts',
    imageUrl: 'https://images.unsplash.com/photo-1630953899906-d16511a72558?auto=format&fit=crop&q=80'
  },
  {
    id: 'd2',
    name: 'Afghaanse Baklava',
    description: 'Zoet bladerdeeggebak met noten en honing',
    history: 'Een zoete lekkernij die de invloed van de Perzische keuken weerspiegelt',
    price: 4.95,
    type: 'vegetarian',
    category: 'Desserts',
    imageUrl: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80'
  }
];