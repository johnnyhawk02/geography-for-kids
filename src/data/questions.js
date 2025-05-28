// Geography quiz questions for kids aged 7-12
export const quizQuestions = [
  // Countries & Capitals
  {
    id: 1,
    category: "Countries & Capitals",
    question: "What is the capital of France?",
    type: "multiple",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correct: 2,
    explanation: "Paris is the capital and largest city of France, famous for the Eiffel Tower!"
  },
  {
    id: 2,
    category: "Countries & Capitals",
    question: "What is the capital of Japan?",
    type: "multiple",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    correct: 2,
    explanation: "Tokyo is the capital of Japan and one of the world's largest cities!"
  },
  {
    id: 3,
    category: "Countries & Capitals",
    question: "Which country has the most people in the world?",
    type: "multiple",
    options: ["India", "China", "United States", "Russia"],
    correct: 0,
    explanation: "India has the most people in the world with over 1.4 billion people!"
  },
  {
    id: 4,
    category: "Countries & Capitals",
    question: "What is the capital of Australia?",
    type: "multiple",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correct: 2,
    explanation: "Canberra is the capital of Australia, even though Sydney is bigger!"
  },
  {
    id: 5,
    category: "Countries & Capitals",
    question: "Canada is the second largest country in the world.",
    type: "truefalse",
    correct: true,
    explanation: "Yes! Canada is the second largest country by land area, after Russia."
  },

  // Oceans & Seas
  {
    id: 6,
    category: "Oceans & Seas",
    question: "The Pacific Ocean is the largest ocean in the world.",
    type: "truefalse",
    correct: true,
    explanation: "Yes! The Pacific Ocean covers about one-third of Earth's surface."
  },
  {
    id: 7,
    category: "Oceans & Seas",
    question: "How many oceans are there on Earth?",
    type: "multiple",
    options: ["3", "4", "5", "6"],
    correct: 2,
    explanation: "There are 5 oceans: Pacific, Atlantic, Indian, Arctic, and Southern!"
  },
  {
    id: 8,
    category: "Oceans & Seas",
    question: "Which ocean is the smallest?",
    type: "multiple",
    options: ["Arctic Ocean", "Indian Ocean", "Atlantic Ocean", "Southern Ocean"],
    correct: 0,
    explanation: "The Arctic Ocean is the smallest ocean, located at the North Pole!"
  },
  {
    id: 9,
    category: "Oceans & Seas",
    question: "The Atlantic Ocean separates Europe from America.",
    type: "truefalse",
    correct: true,
    explanation: "Correct! The Atlantic Ocean sits between Europe/Africa and the Americas."
  },

  // Continents & Geography
  {
    id: 10,
    category: "Continents",
    question: "Which continent is the Sahara Desert located in?",
    type: "multiple",
    options: ["Asia", "Australia", "Africa", "South America"],
    correct: 2,
    explanation: "The Sahara Desert is in Africa and is the world's largest hot desert!"
  },
  {
    id: 11,
    category: "Continents",
    question: "How many continents are there?",
    type: "multiple",
    options: ["5", "6", "7", "8"],
    correct: 2,
    explanation: "There are 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia!"
  },
  {
    id: 12,
    category: "Continents",
    question: "Antarctica is the coldest continent on Earth.",
    type: "truefalse",
    correct: true,
    explanation: "Absolutely! Antarctica can get as cold as -89°C (-128°F)!"
  },
  {
    id: 13,
    category: "Continents",
    question: "Which continent has the most countries?",
    type: "multiple",
    options: ["Asia", "Africa", "Europe", "South America"],
    correct: 1,
    explanation: "Africa has 54 countries, more than any other continent!"
  },

  // Mountains & Landmarks
  {
    id: 14,
    category: "Mountains & Landmarks",
    question: "Mount Everest is the tallest mountain in the world.",
    type: "truefalse",
    correct: true,
    explanation: "Correct! Mount Everest is 8,848 meters (29,029 feet) tall."
  },
  {
    id: 15,
    category: "Mountains & Landmarks",
    question: "In which mountain range is Mount Everest located?",
    type: "multiple",
    options: ["Andes", "Rocky Mountains", "Himalayas", "Alps"],
    correct: 2,
    explanation: "Mount Everest is in the Himalayas, between Nepal and Tibet!"
  },
  {
    id: 16,
    category: "Mountains & Landmarks",
    question: "The Great Wall of China can be seen from space.",
    type: "truefalse",
    correct: false,
    explanation: "This is actually a myth! The Great Wall cannot be seen from space with the naked eye."
  },
  {
    id: 17,
    category: "Mountains & Landmarks",
    question: "Which landmark is in Egypt?",
    type: "multiple",
    options: ["Statue of Liberty", "Eiffel Tower", "Big Ben", "Great Sphinx"],
    correct: 3,
    explanation: "The Great Sphinx is in Egypt, near the famous pyramids of Giza!"
  },

  // Rivers & Lakes
  {
    id: 18,
    category: "Rivers & Lakes",
    question: "Which river is the longest in the world?",
    type: "multiple",
    options: ["Amazon River", "Nile River", "Mississippi River", "Yangtze River"],
    correct: 1,
    explanation: "The Nile River in Africa is about 6,650 kilometers (4,130 miles) long!"
  },
  {
    id: 19,
    category: "Rivers & Lakes",
    question: "The Amazon River flows through which continent?",
    type: "multiple",
    options: ["Africa", "Asia", "South America", "North America"],
    correct: 2,
    explanation: "The Amazon River flows through South America, mainly through Brazil!"
  },
  {
    id: 20,
    category: "Rivers & Lakes",
    question: "Which is the largest lake in the world?",
    type: "multiple",
    options: ["Lake Superior", "Caspian Sea", "Lake Victoria", "Lake Baikal"],
    correct: 1,
    explanation: "The Caspian Sea is actually the world's largest lake by area!"
  },

  // Animals & Nature
  {
    id: 21,
    category: "Animals & Nature",
    question: "Penguins live in the Arctic (North Pole).",
    type: "truefalse",
    correct: false,
    explanation: "No! Penguins live in Antarctica (South Pole) and the Southern Hemisphere only!"
  },
  {
    id: 22,
    category: "Animals & Nature",
    question: "Which animal is native to Australia?",
    type: "multiple",
    options: ["Panda", "Kangaroo", "Polar Bear", "Lion"],
    correct: 1,
    explanation: "Kangaroos are native to Australia and can't be found wild anywhere else!"
  },
  {
    id: 23,
    category: "Animals & Nature",
    question: "Where do pandas naturally live?",
    type: "multiple",
    options: ["Japan", "China", "India", "Thailand"],
    correct: 1,
    explanation: "Giant pandas naturally live in the mountains of central China!"
  },

  // Weather & Climate
  {
    id: 24,
    category: "Weather & Climate",
    question: "Which place gets the most rain in the world?",
    type: "multiple",
    options: ["Amazon Rainforest", "Hawaii", "India", "Ireland"],
    correct: 1,
    explanation: "Mount Waialeale in Hawaii gets about 400 inches of rain per year!"
  },
  {
    id: 25,
    category: "Weather & Climate",
    question: "The hottest place on Earth is in Death Valley, USA.",
    type: "truefalse",
    correct: true,
    explanation: "Yes! Death Valley recorded 134°F (56.7°C), the hottest air temperature ever!"
  },

  // Fun Geography Facts
  {
    id: 26,
    category: "Fun Facts",
    question: "Which country has the most time zones?",
    type: "multiple",
    options: ["USA", "Russia", "China", "Canada"],
    correct: 1,
    explanation: "Russia spans 11 time zones - when it's morning in one part, it's evening in another!"
  },
  {
    id: 27,
    category: "Fun Facts",
    question: "What is the smallest country in the world?",
    type: "multiple",
    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    correct: 1,
    explanation: "Vatican City is only 0.17 square miles (0.44 square kilometers)!"
  },
  {
    id: 28,
    category: "Fun Facts",
    question: "Brazil is the largest country in South America.",
    type: "truefalse",
    correct: true,
    explanation: "Yes! Brazil covers about half of South America's land area."
  },
  {
    id: 29,
    category: "Fun Facts",
    question: "Which country is shaped like a boot?",
    type: "multiple",
    options: ["Spain", "Italy", "Greece", "Portugal"],
    correct: 1,
    explanation: "Italy is famously shaped like a boot, with Sicily as the 'football'!"
  },
  {
    id: 30,
    category: "Fun Facts",
    question: "The equator passes through how many continents?",
    type: "multiple",
    options: ["2", "3", "4", "5"],
    correct: 1,
    explanation: "The equator passes through 3 continents: Africa, Asia, and South America!"
  },

  // More Challenging Questions
  {
    id: 31,
    category: "Countries & Capitals",
    question: "What is the capital of Canada?",
    type: "multiple",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    correct: 2,
    explanation: "Ottawa is the capital of Canada, though Toronto is the largest city!"
  },
  {
    id: 32,
    category: "Geography",
    question: "Which desert is the largest in the world?",
    type: "multiple",
    options: ["Sahara", "Gobi", "Antarctica", "Arabian"],
    correct: 2,
    explanation: "Antarctica is actually the world's largest desert because it's so dry!"
  },
  {
    id: 33,
    category: "Islands",
    question: "Which is the largest island in the world?",
    type: "multiple",
    options: ["Madagascar", "Greenland", "Great Britain", "Iceland"],
    correct: 1,
    explanation: "Greenland is the world's largest island, located between the Arctic and Atlantic oceans!"
  },
  {
    id: 34,
    category: "Volcanoes",
    question: "Which country has the most volcanoes?",
    type: "multiple",
    options: ["Japan", "Indonesia", "Philippines", "Italy"],
    correct: 1,
    explanation: "Indonesia has over 130 active volcanoes, more than any other country!"
  },
  {
    id: 35,
    category: "Languages",
    question: "Which country has the most official languages?",
    type: "multiple",
    options: ["India", "South Africa", "Switzerland", "Canada"],
    correct: 1,
    explanation: "South Africa has 11 official languages, the most of any country!"
  },

  // Additional Countries & Capitals
  {
    id: 36,
    category: "Countries & Capitals",
    question: "What is the capital of Brazil?",
    type: "multiple",
    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    correct: 2,
    explanation: "Brasília is the capital of Brazil, built specifically to be the capital city!"
  },
  {
    id: 37,
    category: "Countries & Capitals",
    question: "Which country is shaped like a boot?",
    type: "multiple",
    options: ["Spain", "Italy", "Greece", "Portugal"],
    correct: 1,
    explanation: "Italy is famously shaped like a boot kicking a soccer ball (Sicily)!"
  },
  {
    id: 38,
    category: "Countries & Capitals",
    question: "What is the capital of Egypt?",
    type: "multiple",
    options: ["Alexandria", "Cairo", "Luxor", "Aswan"],
    correct: 1,
    explanation: "Cairo is the capital of Egypt and home to the famous pyramids nearby!"
  },
  {
    id: 39,
    category: "Countries & Capitals",
    question: "Russia is the largest country in the world.",
    type: "truefalse",
    correct: true,
    explanation: "Yes! Russia is the largest country by land area, covering 11 time zones!"
  },
  {
    id: 40,
    category: "Countries & Capitals",
    question: "What is the capital of Mexico?",
    type: "multiple",
    options: ["Cancun", "Guadalajara", "Mexico City", "Tijuana"],
    correct: 2,
    explanation: "Mexico City is the capital and largest city of Mexico!"
  },

  // Additional Oceans & Seas
  {
    id: 41,
    category: "Oceans & Seas",
    question: "Which ocean is the coldest?",
    type: "multiple",
    options: ["Atlantic", "Pacific", "Arctic", "Indian"],
    correct: 2,
    explanation: "The Arctic Ocean is the coldest ocean, covered with ice most of the year!"
  },
  {
    id: 42,
    category: "Oceans & Seas",
    question: "The Dead Sea is actually a lake.",
    type: "truefalse",
    correct: true,
    explanation: "Yes! Despite its name, the Dead Sea is actually a salt lake!"
  },
  {
    id: 43,
    category: "Oceans & Seas",
    question: "Which sea is the saltiest in the world?",
    type: "multiple",
    options: ["Mediterranean Sea", "Red Sea", "Dead Sea", "Black Sea"],
    correct: 2,
    explanation: "The Dead Sea is so salty that you can float on it easily!"
  },

  // Additional Continents
  {
    id: 44,
    category: "Continents",
    question: "Which continent has no countries?",
    type: "multiple",
    options: ["Australia", "Antarctica", "Asia", "Europe"],
    correct: 1,
    explanation: "Antarctica has no countries - it's governed by international treaties!"
  },
  {
    id: 45,
    category: "Continents",
    question: "Europe and Asia are actually one large landmass.",
    type: "truefalse",
    correct: true,
    explanation: "Yes! Europe and Asia together form Eurasia, the largest landmass on Earth!"
  },
  {
    id: 46,
    category: "Continents",
    question: "Which continent is home to the most countries?",
    type: "multiple",
    options: ["Asia", "Africa", "Europe", "South America"],
    correct: 1,
    explanation: "Africa has 54 countries, more than any other continent!"
  },

  // Additional Mountains & Landmarks
  {
    id: 47,
    category: "Mountains & Landmarks",
    question: "In which country would you find Machu Picchu?",
    type: "multiple",
    options: ["Chile", "Peru", "Bolivia", "Ecuador"],
    correct: 1,
    explanation: "Machu Picchu is an ancient Inca city high in the mountains of Peru!"
  },
  {
    id: 48,
    category: "Mountains & Landmarks",
    question: "The Great Wall of China can be seen from space.",
    type: "truefalse",
    correct: false,
    explanation: "This is a myth! The Great Wall cannot be seen from space with the naked eye."
  },
  {
    id: 49,
    category: "Mountains & Landmarks",
    question: "Which mountain range contains Mount Everest?",
    type: "multiple",
    options: ["Andes", "Himalayas", "Rocky Mountains", "Alps"],
    correct: 1,
    explanation: "Mount Everest is in the Himalayas, between Nepal and Tibet!"
  },
  {
    id: 50,
    category: "Mountains & Landmarks",
    question: "What is the longest mountain range in the world?",
    type: "multiple",
    options: ["Himalayas", "Rocky Mountains", "Andes", "Alps"],
    correct: 2,
    explanation: "The Andes Mountains run along the entire western coast of South America!"
  },

  // Additional Rivers & Lakes
  {
    id: 51,
    category: "Rivers & Lakes",
    question: "Which river flows through London?",
    type: "multiple",
    options: ["Seine", "Thames", "Danube", "Rhine"],
    correct: 1,
    explanation: "The River Thames flows through London and is famous for Big Ben and Tower Bridge!"
  },
  {
    id: 52,
    category: "Rivers & Lakes",
    question: "Lake Superior is the largest of the Great Lakes.",
    type: "truefalse",
    correct: true,
    explanation: "Yes! Lake Superior is the largest Great Lake by surface area!"
  },
  {
    id: 53,
    category: "Rivers & Lakes",
    question: "Which river is longest in the world?",
    type: "multiple",
    options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
    correct: 1,
    explanation: "The Nile River in Africa is the longest river in the world!"
  },

  // Additional Animals & Nature
  {
    id: 54,
    category: "Animals & Nature",
    question: "Which animal is found only in China?",
    type: "multiple",
    options: ["Tiger", "Elephant", "Giant Panda", "Kangaroo"],
    correct: 2,
    explanation: "Giant pandas are native to China and are the country's national treasure!"
  },
  {
    id: 55,
    category: "Animals & Nature",
    question: "Penguins live in both the Arctic and Antarctic.",
    type: "truefalse",
    correct: false,
    explanation: "No! Penguins only live in the Southern Hemisphere, mainly Antarctica!"
  },
  {
    id: 56,
    category: "Animals & Nature",
    question: "Which continent has no native bears?",
    type: "multiple",
    options: ["Africa", "Australia", "South America", "Asia"],
    correct: 1,
    explanation: "Australia has no native bears - their largest predator is the dingo!"
  },

  // Additional Weather & Climate
  {
    id: 57,
    category: "Weather & Climate",
    question: "Which place gets the most rain in the world?",
    type: "multiple",
    options: ["Amazon Rainforest", "Hawaii", "Ireland", "India"],
    correct: 1,
    explanation: "Mount Waialeale in Hawaii gets over 400 inches of rain per year!"
  },
  {
    id: 58,
    category: "Weather & Climate",
    question: "The Sahara Desert sometimes gets snow.",
    type: "truefalse",
    correct: true,
    explanation: "Yes! It's rare, but snow has fallen in the Sahara Desert several times!"
  },
  {
    id: 59,
    category: "Weather & Climate",
    question: "What causes the Northern Lights?",
    type: "multiple",
    options: ["Solar particles", "Moon reflection", "Ice crystals", "Lightning"],
    correct: 0,
    explanation: "Solar particles from the sun create beautiful Northern Lights in polar regions!"
  },

  // Cities & Urban Areas
  {
    id: 60,
    category: "Cities & Urban Areas",
    question: "Which city is known as the Big Apple?",
    type: "multiple",
    options: ["Los Angeles", "Chicago", "New York City", "Boston"],
    correct: 2,
    explanation: "New York City is nicknamed the Big Apple and is famous for the Statue of Liberty!"
  },
  {
    id: 61,
    category: "Cities & Urban Areas",
    question: "Venice, Italy has canals instead of roads.",
    type: "truefalse",
    correct: true,
    explanation: "Yes! Venice is built on water and people travel by boat through canals!"
  },
  {
    id: 62,
    category: "Cities & Urban Areas",
    question: "Which city is home to the Eiffel Tower?",
    type: "multiple",
    options: ["London", "Rome", "Paris", "Berlin"],
    correct: 2,
    explanation: "The Eiffel Tower is in Paris, France and was built for the 1889 World's Fair!"
  },
  {
    id: 63,
    category: "Cities & Urban Areas",
    question: "What is the most populated city in the world?",
    type: "multiple",
    options: ["New York", "Tokyo", "London", "Mumbai"],
    correct: 1,
    explanation: "Tokyo, Japan has the most people of any city in the world!"
  },

  // Deserts & Dry Places
  {
    id: 64,
    category: "Deserts & Dry Places",
    question: "Which is the largest hot desert in the world?",
    type: "multiple",
    options: ["Gobi", "Sahara", "Kalahari", "Sonoran"],
    correct: 1,
    explanation: "The Sahara Desert in Africa is the largest hot desert in the world!"
  },
  {
    id: 65,
    category: "Deserts & Dry Places",
    question: "Antarctica is considered a desert.",
    type: "truefalse",
    correct: true,
    explanation: "Yes! Antarctica is a cold desert because it gets very little precipitation!"
  },
  {
    id: 66,
    category: "Deserts & Dry Places",
    question: "Which desert is in the southwestern United States?",
    type: "multiple",
    options: ["Sahara", "Gobi", "Mojave", "Atacama"],
    correct: 2,
    explanation: "The Mojave Desert is in California, Nevada, Utah, and Arizona!"
  },

  // Forests & Jungles
  {
    id: 67,
    category: "Forests & Jungles",
    question: "Which rainforest is called the 'lungs of the Earth'?",
    type: "multiple",
    options: ["Congo", "Amazon", "Borneo", "Madagascar"],
    correct: 1,
    explanation: "The Amazon rainforest produces lots of oxygen and is called Earth's lungs!"
  },
  {
    id: 68,
    category: "Forests & Jungles",
    question: "Rainforests only exist near the equator.",
    type: "truefalse",
    correct: false,
    explanation: "No! There are temperate rainforests in places like the Pacific Northwest!"
  },
  {
    id: 69,
    category: "Forests & Jungles",
    question: "Which continent has the largest rainforest?",
    type: "multiple",
    options: ["Africa", "Asia", "South America", "Australia"],
    correct: 2,
    explanation: "South America has the Amazon, the world's largest rainforest!"
  },

  // Polar Regions
  {
    id: 70,
    category: "Polar Regions",
    question: "Which pole is colder?",
    type: "multiple",
    options: ["North Pole", "South Pole", "They're the same", "It changes"],
    correct: 1,
    explanation: "The South Pole (Antarctica) is much colder than the North Pole!"
  },
  {
    id: 71,
    category: "Polar Regions",
    question: "Polar bears live at both the North and South Poles.",
    type: "truefalse",
    correct: false,
    explanation: "No! Polar bears only live in the Arctic (North Pole area)."
  },
  {
    id: 72,
    category: "Polar Regions",
    question: "What covers most of Antarctica?",
    type: "multiple",
    options: ["Rock", "Ice", "Snow", "Water"],
    correct: 1,
    explanation: "Antarctica is covered by thick ice sheets that never melt completely!"
  },

  // Additional Fun Facts
  {
    id: 73,
    category: "Fun Facts",
    question: "Which country invented pizza?",
    type: "multiple",
    options: ["Greece", "Italy", "Spain", "France"],
    correct: 1,
    explanation: "Pizza was invented in Italy, specifically in the city of Naples!"
  },
  {
    id: 74,
    category: "Fun Facts",
    question: "The equator passes through more water than land.",
    type: "truefalse",
    correct: true,
    explanation: "Yes! The equator passes mostly through oceans and very little land!"
  },
  {
    id: 75,
    category: "Fun Facts",
    question: "Which country has a flag that is not rectangular?",
    type: "multiple",
    options: ["Japan", "Nepal", "Brazil", "Canada"],
    correct: 1,
    explanation: "Nepal's flag has two triangular shapes, making it the only non-rectangular flag!"
  },
  {
    id: 76,
    category: "Fun Facts",
    question: "How many time zones does the world have?",
    type: "multiple",
    options: ["12", "24", "36", "48"],
    correct: 1,
    explanation: "The world has 24 time zones, one for each hour of the day!"
  },

  // Transportation & Travel
  {
    id: 77,
    category: "Transportation & Travel",
    question: "Which country has the fastest trains?",
    type: "multiple",
    options: ["Germany", "Japan", "France", "China"],
    correct: 1,
    explanation: "Japan's bullet trains (Shinkansen) are among the fastest in the world!"
  },
  {
    id: 78,
    category: "Transportation & Travel",
    question: "The Panama Canal connects two oceans.",
    type: "truefalse",
    correct: true,
    explanation: "Yes! The Panama Canal connects the Atlantic and Pacific Oceans!"
  },
  {
    id: 79,
    category: "Transportation & Travel",
    question: "Which is the longest river that ships can travel on?",
    type: "multiple",
    options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
    correct: 0,
    explanation: "The Amazon River is navigable by large ships for thousands of miles!"
  },

  // Food & Culture
  {
    id: 80,
    category: "Food & Culture",
    question: "Which country is famous for sushi?",
    type: "multiple",
    options: ["China", "Korea", "Japan", "Thailand"],
    correct: 2,
    explanation: "Sushi comes from Japan and is made with rice, fish, and vegetables!"
  },
  {
    id: 81,
    category: "Food & Culture",
    question: "Tacos come from Mexico.",
    type: "truefalse",
    correct: true,
    explanation: "Yes! Tacos are a traditional Mexican food made with tortillas and fillings!"
  },
  {
    id: 82,
    category: "Food & Culture",
    question: "Which country gave us french fries?",
    type: "multiple",
    options: ["France", "Belgium", "Germany", "Netherlands"],
    correct: 1,
    explanation: "Despite the name, french fries were actually invented in Belgium!"
  },

  // Space & Earth
  {
    id: 83,
    category: "Space & Earth",
    question: "How much of Earth's surface is covered by water?",
    type: "multiple",
    options: ["50%", "60%", "70%", "80%"],
    correct: 2,
    explanation: "About 70% of Earth's surface is covered by water, mostly oceans!"
  },
  {
    id: 84,
    category: "Space & Earth",
    question: "Earth has only one moon.",
    type: "truefalse",
    correct: true,
    explanation: "Yes! Earth has only one natural satellite, which we call the Moon!"
  },
  {
    id: 85,
    category: "Space & Earth",
    question: "Which direction does the sun rise?",
    type: "multiple",
    options: ["North", "South", "East", "West"],
    correct: 2,
    explanation: "The sun always rises in the east and sets in the west!"
  },

  // Amazing Places
  {
    id: 86,
    category: "Amazing Places",
    question: "Where would you find the Northern Lights?",
    type: "multiple",
    options: ["Near the equator", "In hot deserts", "Near the poles", "On mountains"],
    correct: 2,
    explanation: "The Northern Lights appear near the North Pole in countries like Norway and Canada!"
  },
  {
    id: 87,
    category: "Amazing Places",
    question: "The Grand Canyon is in the United States.",
    type: "truefalse",
    correct: true,
    explanation: "Yes! The Grand Canyon is in Arizona, USA and was carved by the Colorado River!"
  },
  {
    id: 88,
    category: "Amazing Places",
    question: "Which natural wonder can be found in Australia?",
    type: "multiple",
    options: ["Niagara Falls", "Great Barrier Reef", "Grand Canyon", "Mount Everest"],
    correct: 1,
    explanation: "The Great Barrier Reef is a huge coral reef system off the coast of Australia!"
  },

  // Additional Islands
  {
    id: 89,
    category: "Islands",
    question: "Which island country is also a continent?",
    type: "multiple",
    options: ["Madagascar", "Greenland", "Australia", "New Zealand"],
    correct: 2,
    explanation: "Australia is both an island and a continent at the same time!"
  },
  {
    id: 90,
    category: "Islands",
    question: "Hawaii is made up of many islands.",
    type: "truefalse",
    correct: true,
    explanation: "Yes! Hawaii is a chain of volcanic islands in the Pacific Ocean!"
  },
  {
    id: 91,
    category: "Islands",
    question: "Which island is famous for its giant stone statues?",
    type: "multiple",
    options: ["Easter Island", "Madagascar", "Iceland", "Cyprus"],
    correct: 0,
    explanation: "Easter Island has mysterious giant stone statues called Moai!"
  },

  // Additional Volcanoes
  {
    id: 92,
    category: "Volcanoes",
    question: "What is the Ring of Fire?",
    type: "multiple",
    options: ["A desert", "A volcano area", "A river", "A mountain"],
    correct: 1,
    explanation: "The Ring of Fire is an area around the Pacific Ocean with many volcanoes!"
  },
  {
    id: 93,
    category: "Volcanoes",
    question: "All volcanoes are dangerous and always erupting.",
    type: "truefalse",
    correct: false,
    explanation: "No! Many volcanoes are dormant (sleeping) or extinct and not dangerous!"
  },
  {
    id: 94,
    category: "Volcanoes",
    question: "Which type of rock comes from volcanoes?",
    type: "multiple",
    options: ["Marble", "Granite", "Lava rock", "Limestone"],
    correct: 2,
    explanation: "Lava rock (igneous rock) is formed when volcanic lava cools and hardens!"
  },

  // Additional Languages
  {
    id: 95,
    category: "Languages",
    question: "What is the most spoken language in the world?",
    type: "multiple",
    options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
    correct: 2,
    explanation: "Mandarin Chinese is spoken by over 1 billion people!"
  },
  {
    id: 96,
    category: "Languages",
    question: "Sign language is the same in every country.",
    type: "truefalse",
    correct: false,
    explanation: "No! Different countries have different sign languages, just like spoken languages!"
  },
  {
    id: 97,
    category: "Languages",
    question: "Which language has the most letters in its alphabet?",
    type: "multiple",
    options: ["English", "Russian", "Khmer", "Arabic"],
    correct: 2,
    explanation: "Khmer (Cambodian) has 74 letters, the most of any alphabet!"
  },

  // Bonus Questions
  {
    id: 98,
    category: "Fun Facts",
    question: "Which country is completely surrounded by South Africa?",
    type: "multiple",
    options: ["Botswana", "Lesotho", "Swaziland", "Zimbabwe"],
    correct: 1,
    explanation: "Lesotho is completely surrounded by South Africa - it's like a country inside another country!"
  },
  {
    id: 99,
    category: "Amazing Places",
    question: "The lowest point on Earth is below sea level.",
    type: "truefalse",
    correct: true,
    explanation: "Yes! The Dead Sea is 1,412 feet below sea level!"
  },
  {
    id: 100,
    category: "Space & Earth",
    question: "What causes day and night on Earth?",
    type: "multiple",
    options: ["Earth spinning", "Moon moving", "Sun moving", "Clouds blocking sun"],
    correct: 0,
    explanation: "Day and night happen because Earth spins on its axis once every 24 hours!"
  }
];

// Function to get random questions for a quiz
export const getRandomQuestions = (count = 5) => {
  const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// Function to get questions by category
export const getQuestionsByCategory = (category, count = 5) => {
  const categoryQuestions = quizQuestions.filter(q => q.category === category);
  const shuffled = [...categoryQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, categoryQuestions.length));
};

// Get all available categories
export const getCategories = () => {
  const categories = [...new Set(quizQuestions.map(q => q.category))];
  return categories.sort();
};
