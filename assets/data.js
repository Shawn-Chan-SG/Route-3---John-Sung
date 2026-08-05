/* ===========================================================
   Route 3: John Sung — Great Commission Quest
   Shared data: checkpoint content, team sequences, passage
   =========================================================== */

const CP_DATA = {
  1: {
    name: "E J H Corner House",
    where: "Head to the grassy area near the Visitor Centre &amp; NParks HQ building, close to Cluny Park Gate (see the red marker on the map). Look for the <strong>E J H Corner House</strong> interpretive signboard &mdash; you can't miss its distinctive leaf emblem at the top.",
    riddle: "On the board, find the newspaper clipping reproduced near the bottom, showing one of Corner's Berok monkeys. Its headline reads: <em>&ldquo;Monkey's New ___.&rdquo;</em> Read the board on site and fill in the missing last word of that headline &mdash; that word is your keyword.",
    pattern: 6,
    answer: "career",
    map: "assets/images/cp1-map.jpg",
    board: "assets/images/cp1-board.jpg",
    plusCode: "8R78+X5F"
  },
  2: {
    name: "Evolution Garden",
    where: "Head towards <strong>Evolution Garden</strong>, following the marked route. Once inside, look for &ldquo;The Flowering of the World&rdquo; stone panel, which tells the story of how flowering plants came to dominate the Earth after the age of the dinosaurs.",
    riddle: "On the board, read the final sentence of the English paragraph: <em>&ldquo;&hellip;sustained the ___ of the flowering plants.&rdquo;</em> Count backwards from the very last word (&ldquo;plants&rdquo; is the 1st word from the end). The hidden word is the <strong>5th word from the end</strong> of the sentence.",
    pattern: 7,
    answer: "success",
    map: "assets/images/cp2-map.jpg",
    board: "assets/images/cp2-board.jpg",
    plusCode: "8R88+P65"
  },
  3: {
    name: "Bamboo Collection",
    where: "Follow the marked path on the route map towards the <strong>Bamboo Collection</strong>. Along the way, look for a plaque describing the Reflexology Footpath, a joint community project between four Rotary Clubs.",
    riddle: "On the plaque, count all the way through the inscription to the <strong>20th word</strong>. Read the plaque on site, find the 20th word, and take just its first 3 letters &mdash; that is your keyword.",
    pattern: 3,
    answer: "sin",
    map: "assets/images/cp3-map.jpg",
    board: "assets/images/cp3-board.jpg",
    plusCode: "8RC7+5WX"
  },
  4: {
    name: "Ethnobotany Garden",
    where: "Head to the <strong>Ethnobotany Garden</strong> and look for the Farming signboard, which describes how fast-growing food crops such as spinach, sweet potato and tapioca were traditionally cultivated close to villages.",
    riddle: "On the board, look at the very first line of the introductory paragraph. Count to the <strong>7th word</strong> of that first line &mdash; that word is your keyword.",
    pattern: 5,
    answer: "often",
    map: "assets/images/cp4-map.jpg",
    board: "assets/images/cp4-board.jpg",
    plusCode: "8R98+W9P"
  },
  5: {
    name: "Centre of Ethnobotany",
    where: "Head towards the <strong>Centre of Ethnobotany</strong>, marked on the route map. Once inside the building, spot the woven wall display and hunt for a panel inside it for the &ldquo;Mengkuang Weaving&rdquo; signboard. Look out for a wall of woven textures &mdash; a good sign you're close.",
    riddle: "On the signboard, read the final sentence: <em>&ldquo;&hellip;typically used to make baskets, hats, and other ______ materials.&rdquo;</em> Read the board on site and find the missing word &mdash; it is the <strong>2nd last word</strong> of that sentence.",
    pattern: 8,
    answer: "everyday",
    map: "assets/images/cp5-map.jpg",
    board: "assets/images/cp5-board.jpg",
    hint: "assets/images/cp5-hint.jpg",
    plusCode: "8R98+QJ"
  },
  6: {
    name: "Seed Bank",
    where: "Head to the location marked CP6 on the route map, near Fragrant Garden and the Red Brick Path junction. Look for the Singapore Botanic Gardens <strong>Seed Bank</strong> display and find the wall quote about the relationship between plants and human life.",
    riddle: "At the Seed Bank, find the wall quote: <em>&ldquo;Plants can survive without human but _____ on earth, as we know it, is impossible without plants.&rdquo;</em> Read the panel on site and fill in the missing word &mdash; that word is your keyword.",
    pattern: 4,
    answer: "life",
    map: "assets/images/cp6-map.jpg",
    board: "assets/images/cp6-board.jpg",
    plusCode: "8R98+4FX"
  },
  7: {
    name: "Fragrant Garden",
    where: "Head to the <strong>Fragrant Garden</strong> and look for the &ldquo;Nature's Matchmakers&rdquo; board, which explains how insects, birds and even bats help pollinate the garden's fragrant blooms.",
    riddle: "The keyword is an 8-letter word built from specific words on the board (the 7th letter is fixed as &ldquo;E&rdquo;). On site, work out each letter: 1st = 1st letter of the 11th word on the 2nd line of paragraph 1 &middot; 2nd = 1st letter of the 1st word of the board text &middot; 3rd = 1st letter of the 7th word on the 1st line &middot; 4th = 1st letter of the 2nd word on the 1st line &middot; 5th = 1st letter of the 2nd word of paragraph 2 &middot; 6th = 1st letter of the 4th word on the 2nd line of paragraph 2 &middot; 7th = E &middot; 8th = last letter of the very last word of the board text.",
    pattern: 8,
    answer: "miracles",
    map: "assets/images/cp7-map.jpg",
    board: "assets/images/cp7-board.jpg",
    plusCode: "8R88+XH4"
  },
  8: {
    name: "The Former Economic Garden",
    where: "Head to the location marked CP8 on the route map, near the Visitor Centre &amp; NParks HQ building and Rain Tree Drive (close to Gambir Gate). Look for &ldquo;The Former Economic Garden&rdquo; board, which tells the story of the land before it became Evolution Garden.",
    riddle: "On the board, go to the <strong>3rd paragraph</strong> and count all the way to the <strong>35th and 36th words</strong>. Read the board on site, take those two words, remove the last letter of the second word, and join the two words together with a space &mdash; that is your keyword.",
    pattern: [9, 4],
    answer: "southeast asia",
    map: "assets/images/cp8-map.jpg",
    board: "assets/images/cp8-board.jpg",
    plusCode: "8R88+CPR"
  }
};

// Each team's checkpoint order (CP numbers, in the order they must visit them)
const TEAMS = {
  "3A": { label: "Team 3A", sequence: [1, 2, 3, 4, 5, 6, 7, 8] },
  "3B": { label: "Team 3B", sequence: [3, 4, 5, 6, 7, 8, 2, 1] },
  "3C": { label: "Team 3C", sequence: [8, 7, 6, 5, 4, 3, 2, 1] },
  "3D": { label: "Team 3D", sequence: [6, 5, 4, 3, 2, 7, 8, 1] }
};

// The Master Passage. {n} marks the blank fed by the CP whose answer maps to blank n.
const PASSAGE_TEMPLATE = "John Sung, often called the “Billy Graham of China,” possessed a brilliant mind and earned a doctorate in chemistry, promising a lucrative academic {1}. However, after a radical encounter with God, he threw his academic medals into the ocean, choosing instead the path of a humble itinerant evangelist. Sung preached with fiery passion across China and {2}, uncompromisingly calling people to repentance. His sermons were deeply emotional, {3} using {4} examples to illustrate the heavy burden of {5}. Despite physical ailments and the mocking of liberal scholars who once locked him in an asylum, Sung sparked massive spiritual revivals. His {6} reminds us that worldly {7} pales in comparison to the value of a single human soul. The mission field needs people who are fully surrendered to the Holy Spirit. Will you lay down your own ambitions and embrace the radical calling of sharing the gospel? By joining a mission trip, you step into a legacy of bold obedience. Become a vessel for God's transforming power and witness the {8} He can do through you.";

// Maps blank number -> which CP number supplies that answer
const BLANK_SOURCE_CP = { 1: 1, 2: 8, 3: 4, 4: 5, 5: 3, 6: 6, 7: 2, 8: 7 };
