// Fun geography facts for kids
export const geographyFacts = [
  {
    id: 1,
    category: "Countries",
    fact: "Russia is so big that it spans 11 time zones! When it's morning in one part of Russia, it's evening in another!",
    emoji: "🇷🇺"
  },
  {
    id: 2,
    category: "Oceans",
    fact: "The Pacific Ocean is so big that all the continents could fit inside it with room to spare!",
    emoji: "🌊"
  },
  {
    id: 3,
    category: "Deserts",
    fact: "Antarctica is actually the world's largest desert! It's so cold that it gets very little rain or snow.",
    emoji: "🧊"
  },
  {
    id: 4,
    category: "Mountains",
    fact: "Mount Everest grows about 4 millimeters taller every year because the tectonic plates are still pushing it up!",
    emoji: "🏔️"
  },
  {
    id: 5,
    category: "Rivers",
    fact: "The Amazon River has no bridges across it! People use boats and ferries to cross this mighty river.",
    emoji: "🛶"
  },
  {
    id: 6,
    category: "Islands",
    fact: "There are over 267,570 islands in Finland! That's more islands than any other country in the world.",
    emoji: "🏝️"
  },
  {
    id: 7,
    category: "Cities",
    fact: "Tokyo, Japan is home to about 37 million people! That's more than the entire population of Canada.",
    emoji: "🏙️"
  },
  {
    id: 8,
    category: "Animals",
    fact: "Penguins can only be found naturally in the Southern Hemisphere, mostly in Antarctica!",
    emoji: "🐧"
  },
  {
    id: 9,
    category: "Volcanoes",
    fact: "There are about 1,500 active volcanoes around the world, and about 50-70 erupt every year!",
    emoji: "🌋"
  },
  {
    id: 10,
    category: "Languages",
    fact: "Papua New Guinea has over 800 different languages spoken - more than any other country!",
    emoji: "🗣️"
  },
  {
    id: 11,
    category: "Weather",
    fact: "The hottest temperature ever recorded was 134°F (56.7°C) in Death Valley, California!",
    emoji: "🌡️"
  },
  {
    id: 12,
    category: "Forests",
    fact: "The Amazon rainforest produces about 20% of the world's oxygen - that's why it's called the 'lungs of the Earth'!",
    emoji: "🌳"
  },
  {
    id: 13,
    category: "Borders",
    fact: "The border between the USA and Canada is the longest peaceful border in the world at 5,525 miles long!",
    emoji: "🤝"
  },
  {
    id: 14,
    category: "Lakes",
    fact: "Lake Baikal in Russia contains about 20% of all the fresh water on Earth and is over 25 million years old!",
    emoji: "💧"
  },
  {
    id: 15,
    category: "Continents",
    fact: "Africa is so big that you could fit the USA, China, India, and most of Europe inside it!",
    emoji: "🌍"
  },
  {
    id: 16,
    category: "Countries",
    fact: "Vatican City is so small that you can walk across the entire country in just 17 minutes!",
    emoji: "🚶‍♂️"
  },
  {
    id: 17,
    category: "Oceans",
    fact: "The Mariana Trench in the Pacific Ocean is so deep that if Mount Everest was placed in it, the peak would still be over a mile underwater!",
    emoji: "🌊"
  },
  {
    id: 18,
    category: "Animals",
    fact: "Australia is home to more than 10,000 beaches - you could visit a new beach every day for 27 years!",
    emoji: "🏖️"
  },
  {
    id: 19,
    category: "Geography",
    fact: "The Earth's circumference at the equator is about 24,901 miles - that would take 4-5 months to walk!",
    emoji: "🌍"
  },
  {
    id: 20,
    category: "Mountains",
    fact: "The Himalayas are still growing! They get about 2.4 inches taller every year.",
    emoji: "⛰️"
  },
  {
    id: 21,
    category: "Rivers",
    fact: "The Nile River flows from south to north - it's one of the few rivers in the world that flows 'backwards'!",
    emoji: "🏞️"
  },
  {
    id: 22,
    category: "Countries",
    fact: "Monaco is so small that it would take you less than an hour to walk across the entire country!",
    emoji: "🚶‍♀️"
  },
  {
    id: 23,
    category: "Deserts",
    fact: "The Sahara Desert is so big that it's almost as large as the entire United States!",
    emoji: "🏜️"
  },
  {
    id: 24,
    category: "Islands",
    fact: "Madagascar split away from Africa about 160 million years ago, which is why it has such unique animals!",
    emoji: "🦎"
  },
  {
    id: 25,
    category: "Weather",
    fact: "Lightning strikes the Earth about 100 times every second - that's 8.6 million times per day!",
    emoji: "⚡"
  },
  {
    id: 26,
    category: "Forests",
    fact: "One tree can produce enough oxygen for two people for an entire year!",
    emoji: "🌲"
  },
  {
    id: 27,
    category: "Volcanoes",
    fact: "Hawaii's Kilauea volcano has been erupting continuously since 1983 - that's over 40 years!",
    emoji: "🌺"
  },
  {
    id: 28,
    category: "Cities",
    fact: "Mexico City is sinking about 10 inches every year because it was built on an ancient lake!",
    emoji: "🏙️"
  },
  {
    id: 29,
    category: "Borders",
    fact: "The shortest international border in the world is between Spain and Morocco - it's only 85 meters long!",
    emoji: "📏"
  },
  {
    id: 30,
    category: "Geography",
    fact: "If you could drive a car straight up, it would take about an hour to reach space (100 km above Earth)!",
    emoji: "🚗"
  }
];

// Function to get a random fact
export const getRandomFact = (excludeIds = []) => {
  const availableFacts = geographyFacts.filter(fact => !excludeIds.includes(fact.id));
  if (availableFacts.length === 0) return geographyFacts[0]; // Fallback
  return availableFacts[Math.floor(Math.random() * availableFacts.length)];
};

// Function to get facts by category
export const getFactsByCategory = (category) => {
  return geographyFacts.filter(fact => fact.category === category);
};

// Get all fact categories
export const getFactCategories = () => {
  const categories = [...new Set(geographyFacts.map(fact => fact.category))];
  return categories.sort();
};
