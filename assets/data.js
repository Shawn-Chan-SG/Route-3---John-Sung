/* ===========================================================
   Route 3: John Sung — Great Commission Quest
   Shared data: checkpoint content, team sequences, passage

   TRANSLATION NOTE:
   Every checkpoint has an English field (e.g. "where", "riddle", "name")
   and a matching Chinese field suffixed "_zh". Any text that is a direct
   quote from a physical signboard in the gardens (wrapped in curly quotes
   or <em> in the English version) is intentionally left in English inside
   the Chinese text too, since the on-site boards themselves are in English
   and participants must match against them. The "answer" keyword and the
   PASSAGE_TEMPLATE are also intentionally left English-only — the game
   checks answers against these exact strings.
   =========================================================== */

const CP_DATA = {
  1: {
    name: "E J H Corner House",
    name_zh: "E J H Corner House(柯纳故居)",
    where: "Head to the grassy area near the Visitor Centre &amp; NParks HQ building, close to Cluny Park Gate (see the red marker on the map). Look for the <strong>E J H Corner House</strong> interpretive signboard &mdash; you can't miss its distinctive leaf emblem at the top.",
    where_zh: "前往靠近游客中心与国家公园局总部大楼的草坪区域,邻近克鲁尼公园门(Cluny Park Gate)(见地图上的红色标记)。寻找 <strong>E J H Corner House</strong> 解说牌 &mdash; 牌子顶部醒目的树叶标志一眼就能认出。",
    riddle: "On the board, find the newspaper clipping reproduced near the bottom, showing one of Corner's Berok monkeys. Its headline reads: <em>&ldquo;Monkey's New ___.&rdquo;</em> Read the board on site and fill in the missing last word of that headline &mdash; that word is your keyword.",
    riddle_zh: "在解说牌上,找到底部附近复制的一则剪报,内容是 Corner 饲养的其中一只 Berok 猴子。剪报标题写着:<em>&ldquo;Monkey's New ___.&rdquo;</em> 请在现场阅读解说牌,填上标题缺失的最后一个词 &mdash; 这个词就是你的关键词。",
    pattern: 6,
    answer: "career",
    map: "assets/images/cp1-map.jpg",
    board: "assets/images/cp1-board.jpg",
    plusCode: "8R78+X5F"
  },
  2: {
    name: "Evolution Garden",
    name_zh: "演化园(Evolution Garden)",
    where: "Head towards <strong>Evolution Garden</strong>, following the marked route. Once inside, look for &ldquo;The Flowering of the World&rdquo; stone panel, which tells the story of how flowering plants came to dominate the Earth after the age of the dinosaurs.",
    where_zh: "沿着标示路线前往<strong>演化园(Evolution Garden)</strong>。进入园区后,寻找石刻牌匾 &ldquo;The Flowering of the World&rdquo;,它讲述了开花植物如何在恐龙时代之后主宰地球的故事。",
    riddle: "On the board, read the final sentence of the English paragraph: <em>&ldquo;&hellip;sustained the ___ of the flowering plants.&rdquo;</em> Count backwards from the very last word (&ldquo;plants&rdquo; is the 1st word from the end). The hidden word is the <strong>5th word from the end</strong> of the sentence.",
    riddle_zh: "在解说牌上,阅读英文段落的最后一句:<em>&ldquo;&hellip;sustained the ___ of the flowering plants.&rdquo;</em> 从最后一个词开始倒数(&ldquo;plants&rdquo; 是倒数第 1 个词)。缺失的词是这句话<strong>倒数第 5 个词</strong>。",
    pattern: 7,
    answer: "success",
    map: "assets/images/cp2-map.jpg",
    board: "assets/images/cp2-board.jpg",
    plusCode: "8R88+P65"
  },
  3: {
    name: "Bamboo Collection",
    name_zh: "竹类专类园(Bamboo Collection)",
    where: "Follow the marked path on the route map towards the <strong>Bamboo Collection</strong>. Along the way, look for a plaque describing the Reflexology Footpath, a joint community project between four Rotary Clubs.",
    where_zh: "沿着路线图上标示的小径前往<strong>竹类专类园(Bamboo Collection)</strong>。途中留意一块介绍反射区健康步道(Reflexology Footpath)的铭牌,这是四个扶轮社联合推动的社区项目。",
    riddle: "On the plaque, count all the way through the inscription to the <strong>20th word</strong>. Read the plaque on site, find the 20th word, and take just its first 3 letters &mdash; that is your keyword.",
    riddle_zh: "在铭牌上,从头数到第 <strong>20 个词</strong>。请在现场阅读铭牌,找到第 20 个词,只取该词的前 3 个字母 &mdash; 那就是你的关键词。",
    pattern: 3,
    answer: "sin",
    map: "assets/images/cp3-map.jpg",
    board: "assets/images/cp3-board.jpg",
    plusCode: "8RC7+5WX"
  },
  4: {
    name: "Ethnobotany Garden",
    name_zh: "民族植物园(Ethnobotany Garden)",
    where: "Head to the <strong>Ethnobotany Garden</strong> and look for the Farming signboard, which describes how fast-growing food crops such as spinach, sweet potato and tapioca were traditionally cultivated close to villages.",
    where_zh: "前往<strong>民族植物园(Ethnobotany Garden)</strong>,寻找题为 Farming 的解说牌,内容描述菠菜、番薯、木薯等速生粮食作物过去是如何在靠近村落的地方种植的。",
    riddle: "On the board, look at the very first line of the introductory paragraph. Count to the <strong>7th word</strong> of that first line &mdash; that word is your keyword.",
    riddle_zh: "在解说牌上,看引言段落的第一行。数到该行的<strong>第 7 个词</strong> &mdash; 这个词就是你的关键词。",
    pattern: 5,
    answer: "often",
    map: "assets/images/cp4-map.jpg",
    board: "assets/images/cp4-board.jpg",
    plusCode: "8R98+W9P"
  },
  5: {
    name: "Centre of Ethnobotany",
    name_zh: "民族植物中心(Centre of Ethnobotany)",
    where: "Head towards the <strong>Centre of Ethnobotany</strong>, marked on the route map. Once inside the building, spot the woven wall display and hunt for a panel inside it for the &ldquo;Mengkuang Weaving&rdquo; signboard. Look out for a wall of woven textures &mdash; a good sign you're close.",
    where_zh: "前往路线图上标示的<strong>民族植物中心(Centre of Ethnobotany)</strong>。进入建筑后,留意编织墙面展示,并在其中找到题为 &ldquo;Mengkuang Weaving&rdquo; 的解说牌。看到一整面编织纹理的墙,就代表你快到了。",
    riddle: "On the signboard, read the final sentence: <em>&ldquo;&hellip;typically used to make baskets, hats, and other ______ materials.&rdquo;</em> Read the board on site and find the missing word &mdash; it is the <strong>2nd last word</strong> of that sentence.",
    riddle_zh: "在解说牌上,阅读最后一句:<em>&ldquo;&hellip;typically used to make baskets, hats, and other ______ materials.&rdquo;</em> 请在现场阅读解说牌,找出缺失的词 &mdash; 它是这句话的<strong>倒数第 2 个词</strong>。",
    pattern: 8,
    answer: "everyday",
    map: "assets/images/cp5-map.jpg",
    board: "assets/images/cp5-board.jpg",
    hint: "assets/images/cp5-hint.jpg",
    plusCode: "8R98+QJ"
  },
  6: {
    name: "Seed Bank",
    name_zh: "种子库(Seed Bank)",
    where: "Head to the location marked CP6 on the route map, near Fragrant Garden and the Red Brick Path junction. Look for the Singapore Botanic Gardens <strong>Seed Bank</strong> display and find the wall quote about the relationship between plants and human life.",
    where_zh: "前往路线图上标示 CP6 的地点,靠近香花园(Fragrant Garden)与红砖步道交界处。寻找新加坡植物园<strong>种子库(Seed Bank)</strong>展示区,并找到墙上一段关于植物与人类彼此关系的引言。",
    riddle: "At the Seed Bank, find the wall quote: <em>&ldquo;Plants can survive without human but _____ on earth, as we know it, is impossible without plants.&rdquo;</em> Read the panel on site and fill in the missing word &mdash; that word is your keyword.",
    riddle_zh: "在种子库,找到墙上的引言:<em>&ldquo;Plants can survive without human but _____ on earth, as we know it, is impossible without plants.&rdquo;</em> 请在现场阅读展板,填上缺失的词 &mdash; 这个词就是你的关键词。",
    pattern: 4,
    answer: "life",
    map: "assets/images/cp6-map.jpg",
    board: "assets/images/cp6-board.jpg",
    plusCode: "8R98+4FX"
  },
  7: {
    name: "Fragrant Garden",
    name_zh: "香花园(Fragrant Garden)",
    where: "Head to the <strong>Fragrant Garden</strong> and look for the &ldquo;Nature's Matchmakers&rdquo; board, which explains how insects, birds and even bats help pollinate the garden's fragrant blooms.",
    where_zh: "前往<strong>香花园(Fragrant Garden)</strong>,寻找题为 &ldquo;Nature's Matchmakers&rdquo; 的解说牌,内容说明昆虫、鸟类甚至蝙蝠如何帮助为园中的香花授粉。",
    riddle: "The keyword is an 8-letter word built from specific words on the board (the 7th letter is fixed as &ldquo;E&rdquo;). On site, work out each letter: 1st = 1st letter of the 11th word on the 2nd line of paragraph 1 &middot; 2nd = 1st letter of the 1st word of the board text &middot; 3rd = 1st letter of the 7th word on the 1st line &middot; 4th = 1st letter of the 2nd word on the 1st line &middot; 5th = 1st letter of the 2nd word of paragraph 2 &middot; 6th = 1st letter of the 4th word on the 2nd line of paragraph 2 &middot; 7th = E &middot; 8th = last letter of the very last word of the board text.",
    riddle_zh: "关键词是一个由解说牌上特定词语组成的 <strong>8 个字母</strong>的单词(第 7 个字母固定为 &ldquo;E&rdquo;)。请在现场推算出每个字母:第 1 个字母 = 第 1 段第 2 行第 11 个词的首字母 &middot; 第 2 个字母 = 解说牌正文第 1 个词的首字母 &middot; 第 3 个字母 = 第 1 行第 7 个词的首字母 &middot; 第 4 个字母 = 第 1 行第 2 个词的首字母 &middot; 第 5 个字母 = 第 2 段第 2 个词的首字母 &middot; 第 6 个字母 = 第 2 段第 2 行第 4 个词的首字母 &middot; 第 7 个字母 = E &middot; 第 8 个字母 = 解说牌正文最后一个词的最后一个字母。",
    pattern: 8,
    answer: "miracles",
    map: "assets/images/cp7-map.jpg",
    board: "assets/images/cp7-board.jpg",
    plusCode: "8R88+XH4"
  },
  8: {
    name: "The Former Economic Garden",
    name_zh: "旧经济作物园(The Former Economic Garden)",
    where: "Head to the location marked CP8 on the route map, near the Visitor Centre &amp; NParks HQ building and Rain Tree Drive (close to Gambir Gate). Look for &ldquo;The Former Economic Garden&rdquo; board, which tells the story of the land before it became Evolution Garden.",
    where_zh: "前往路线图上标示 CP8 的地点,靠近游客中心与国家公园局总部大楼及雨树径(Rain Tree Drive),邻近甘密门(Gambir Gate)。寻找题为 &ldquo;The Former Economic Garden&rdquo; 的解说牌,内容讲述这片土地在成为演化园之前的历史。",
    riddle: "On the board, go to the <strong>3rd paragraph</strong> and count all the way to the <strong>35th and 36th words</strong>. Read the board on site, take those two words, remove the last letter of the second word, and join the two words together with a space &mdash; that is your keyword.",
    riddle_zh: "在解说牌上,找到<strong>第 3 段</strong>,数到<strong>第 35 和第 36 个词</strong>。请在现场阅读解说牌,取这两个词,去掉第二个词的最后一个字母,再把两个词用空格连接起来 &mdash; 那就是你的关键词。",
    pattern: [9, 4],
    answer: "southeast asia",
    map: "assets/images/cp8-map.jpg",
    board: "assets/images/cp8-board.jpg",
    plusCode: "8R88+CPR"
  }
};

// Each team's checkpoint order (CP numbers, in the order they must visit them)
const TEAMS = {
  "3A": { label: "Team 3A", label_zh: "3A 队", sequence: [1, 2, 3, 4, 5, 6, 7, 8] },
  "3B": { label: "Team 3B", label_zh: "3B 队", sequence: [3, 4, 5, 6, 7, 8, 2, 1] },
  "3C": { label: "Team 3C", label_zh: "3C 队", sequence: [8, 7, 6, 5, 4, 3, 2, 1] },
  "3D": { label: "Team 3D", label_zh: "3D 队", sequence: [6, 5, 4, 3, 2, 7, 8, 1] }
};

// The Master Passage. {n} marks the blank fed by the CP whose answer maps to blank n.
// Left English-only by design: answers are validated against this exact text.
const PASSAGE_TEMPLATE = "John Sung, often called the “Billy Graham of China,” possessed a brilliant mind and earned a doctorate in chemistry, promising a lucrative academic {1}. However, after a radical encounter with God, he threw his academic medals into the ocean, choosing instead the path of a humble itinerant evangelist. Sung preached with fiery passion across China and {2}, uncompromisingly calling people to repentance. His sermons were deeply emotional, {3} using {4} examples to illustrate the heavy burden of {5}. Despite physical ailments and the mocking of liberal scholars who once locked him in an asylum, Sung sparked massive spiritual revivals. His {6} reminds us that worldly {7} pales in comparison to the value of a single human soul. The mission field needs people who are fully surrendered to the Holy Spirit. Will you lay down your own ambitions and embrace the radical calling of sharing the gospel? By joining a mission trip, you step into a legacy of bold obedience. Become a vessel for God's transforming power and witness the {8} He can do through you.";

// Maps blank number -> which CP number supplies that answer
const BLANK_SOURCE_CP = { 1: 1, 2: 8, 3: 4, 4: 5, 5: 3, 6: 6, 7: 2, 8: 7 };

/* ===========================================================
   I18N — UI string translations (English / Chinese)
   Used by game.js and index.html. Keywords (cp.answer) and
   PASSAGE_TEMPLATE are NOT part of this dictionary — they stay
   English-only everywhere.
   =========================================================== */
const I18N = {
  en: {
    siteTitle: "Great Commission Quest",
    routeLine: "Route 3: John Sung &middot; The China Challenge",
    eventLine: "Singapore Botanic Gardens &middot; Mission Trip Fundraiser 2026",
    footerIndex: "Route 3 &middot; John Sung &middot; Singapore Botanic Gardens Mission Trip Fundraiser 2026",
    footerTeam: "Route 3 &middot; John Sung &middot; {team}",
    indexNote: "Tap your team's link to start the race",
    pageTitleIndex: "SBG Mission Event 2026 — Route 3: John Sung Trail",
    pageTitleTeam: "Amazing Race — Team {teamId} — John Sung Trail",
    langToggle: "中文",
    raceHome: "&larr; Race Home",
    resetGame: "Reset game",
    welcome: "Welcome, {team}!",
    introP1: "You are about to race through the Singapore Botanic Gardens, following clues left by missionary <strong>John Sung</strong>.",
    introP2: "At each checkpoint, find the interpretive board, solve the clue, and key in the keyword. Can't find it? You may skip ahead &mdash; but you'll need to come back and finish every checkpoint before the final challenge unlocks.",
    introP3: "Collect all 8 keywords to unlock the final passage challenge and complete the Quest.",
    beginRace: "Begin the Race &rarr;",
    allCompleteTitle: "🎉 All 8 checkpoints complete!",
    allCompleteBody: "You've gathered every keyword. Tap below to unlock the Final Challenge.",
    proceedFinal: "Proceed to Final Challenge &rarr;",
    solvedKeyword: "&#10003; Solved &mdash; keyword: <strong>{answer}</strong>",
    back: "&larr; Back",
    next: "Next &rarr;",
    skippedNote: "&#9203; You skipped this earlier. You can still solve it now:",
    enterKeyword: "Enter the keyword",
    keywordPlaceholder: "Type keyword here",
    submit: "Submit",
    skip: "Skip &raquo;",
    checkpointTitle: "Checkpoint {i} of {n}: {name}",
    mapCaption: "Route map &mdash; your checkpoint is marked in red.",
    whereToFind: "Where to find it",
    hintCaption: "Look for this &mdash; a good sign you're close.",
    confirmBoard: "Confirm the board",
    clue: "Clue",
    lastStationNote: "This is the last stop on your route, but {n} checkpoint(s) still need answers. Use the dots above or the Back button to go complete them.",
    pleaseTypeAnswer: "Please type an answer, or tap Skip.",
    correct: "Correct!",
    correctAllDone: "Correct! All 8 checkpoints complete — loading the Final Challenge…",
    notQuite: "Not quite &mdash; check the board again, or tap Skip to come back later.",
    checkpointDotTitle: "Checkpoint {n}",
    progressCaption: "{solved} of {total} checkpoints solved",
    finalTitle: "🏁 Final Challenge: The Master Passage",
    finalIntro: "Fill in every blank using the keywords you collected. Use the word bank below if you need help.",
    wordBank: "Word bank",
    backToCheckpoints: "&larr; Back to checkpoints",
    submitPassage: "Submit Passage",
    allCorrectDone: "All correct! Completing the Quest...",
    someWrong: "Some answers aren't quite right yet &mdash; check the highlighted blanks and try again.",
    congratsTitle: "Congratulations, {team}!",
    congratsBody: "You've completed the Route 3: John Sung trail and solved the Master Passage. Well done, Quest team!",
    congratsInstruction: "Please make your way back to the gathering point now.",
    resetFacilitatorOnly: "Reset game (facilitator only)",
    resetConfirmTitle: "Reset the game?",
    resetConfirmBody: "This will erase all progress for {team} &mdash; every checkpoint answer and the final passage &mdash; and restart the race from the beginning. This cannot be undone.",
    cancel: "Cancel",
    yesReset: "Yes, reset",
    unknownTeam: "Unknown team."
  },
  zh: {
    siteTitle: "大使命探索之旅",
    routeLine: "第三路线:宋尚节 &middot; 中国挑战",
    eventLine: "新加坡植物园 &middot; 2026 宣教之旅筹款",
    footerIndex: "第三路线 &middot; 宋尚节 &middot; 新加坡植物园 2026 宣教之旅筹款",
    footerTeam: "第三路线 &middot; 宋尚节 &middot; {team}",
    indexNote: "点击你的队伍链接,开始比赛",
    pageTitleIndex: "SBG 宣教活动 2026 — 第三路线:宋尚节径",
    pageTitleTeam: "极速前进 — {teamId} 队 — 宋尚节径",
    langToggle: "EN",
    raceHome: "&larr; 返回首页",
    resetGame: "重置游戏",
    welcome: "欢迎,{team}!",
    introP1: "你即将穿越新加坡植物园,跟随宣教士<strong>宋尚节</strong>留下的线索展开比赛。",
    introP2: "在每个检查点,找到解说牌,解开线索,输入关键词。找不到吗?你可以先跳过 &mdash; 但必须回来完成每一个检查点,才能解锁最终挑战。",
    introP3: "收集齐全部 8 个关键词,即可解锁最终经文挑战,完成这趟探索之旅。",
    beginRace: "开始比赛 &rarr;",
    allCompleteTitle: "🎉 全部 8 个检查点已完成!",
    allCompleteBody: "你已收集齐所有关键词。点击下方按钮解锁最终挑战。",
    proceedFinal: "前往最终挑战 &rarr;",
    solvedKeyword: "&#10003; 已解开 &mdash; 关键词:<strong>{answer}</strong>",
    back: "&larr; 返回",
    next: "下一步 &rarr;",
    skippedNote: "&#9203; 你之前跳过了这一题,现在仍可以作答:",
    enterKeyword: "输入关键词",
    keywordPlaceholder: "在此输入关键词",
    submit: "提交",
    skip: "跳过 &raquo;",
    checkpointTitle: "检查点 {i} / {n}:{name}",
    mapCaption: "路线图 &mdash; 你的检查点以红色标示。",
    whereToFind: "如何找到这里",
    hintCaption: "留意这个标记 &mdash; 代表你快到了。",
    confirmBoard: "确认解说牌",
    clue: "线索",
    lastStationNote: "这是你路线上的最后一站,但还有 {n} 个检查点尚未完成。请使用上方的圆点或&ldquo;返回&rdquo;按钮回去完成它们。",
    pleaseTypeAnswer: "请输入答案,或点击“跳过”。",
    correct: "答对了!",
    correctAllDone: "答对了!全部 8 个检查点已完成 — 正在加载最终挑战…",
    notQuite: "还不太对 — 请再看看解说牌,或点击“跳过”稍后再来。",
    checkpointDotTitle: "检查点 {n}",
    progressCaption: "已解开 {solved} / {total} 个检查点",
    finalTitle: "🏁 最终挑战:核心经文",
    finalIntro: "使用你收集到的关键词填满每一个空格。如果需要帮助,可参考下方的词库。",
    wordBank: "词库",
    backToCheckpoints: "&larr; 返回检查点",
    submitPassage: "提交经文",
    allCorrectDone: "全部正确!正在完成探索之旅...",
    someWrong: "有些答案还不太对 — 请检查标示出来的空格,再试一次。",
    congratsTitle: "恭喜你,{team}!",
    congratsBody: "你已完成第三路线:宋尚节径,并解开了核心经文。恭喜探索小队!",
    congratsInstruction: "请现在前往集合地点。",
    resetFacilitatorOnly: "重置游戏(仅限带队者)",
    resetConfirmTitle: "要重置游戏吗?",
    resetConfirmBody: "这将清除 {team} 的所有进度 &mdash; 包括每个检查点的答案和最终经文 &mdash; 并从头重新开始比赛。此操作无法撤销。",
    cancel: "取消",
    yesReset: "是的,重置",
    unknownTeam: "未知队伍。"
  }
};

const LANG_KEY = "route3_lang";

function getLang() {
  try {
    const v = localStorage.getItem(LANG_KEY);
    return v === "zh" ? "zh" : "en";
  } catch (e) {
    return "en";
  }
}

function setLang(lang) {
  try {
    localStorage.setItem(LANG_KEY, lang === "zh" ? "zh" : "en");
  } catch (e) {
    /* ignore */
  }
}

// t(key, vars) — look up a UI string in the current language and
// substitute {placeholders} with the given vars.
function t(key, vars) {
  const lang = getLang();
  let str = (I18N[lang] && I18N[lang][key] !== undefined) ? I18N[lang][key] : I18N.en[key];
  if (str === undefined) return "";
  if (vars) {
    Object.keys(vars).forEach((k) => {
      str = str.replace(new RegExp("\\{" + k + "\\}", "g"), vars[k]);
    });
  }
  return str;
}

// cpText(cp, field) — returns the localized text field for a checkpoint
// (falls back to English if no _zh variant exists, e.g. cp.name always has one).
function cpText(cp, field) {
  const lang = getLang();
  if (lang === "zh" && cp[field + "_zh"] !== undefined) return cp[field + "_zh"];
  return cp[field];
}

// teamLabel(team) — returns the localized label for a team.
function teamLabel(team) {
  const lang = getLang();
  if (lang === "zh" && team.label_zh) return team.label_zh;
  return team.label;
}
