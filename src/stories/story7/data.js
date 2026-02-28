export const story7 = {
  id: "story7",
  title: "The Little Kistka draws pysanka.",
  file: "https://drive.google.com/file/d/1iTUZKbrucFznu0kYkiwwpkq-uBfxIeQS/view?usp=sharing",
  pages: [
    {
      id: 1,
      altText: "Ben the beaver",
      text: "Hello, I am Kistka. You can call me Pysachok, too. I sleep in my wooden box. I sleep in summer and in autumn. I sleep in winter, too. But in spring I wake up. Outside, the apricot trees are blooming, but the morning is cold.",
    },
    {
      id: 2,
      altText: "pysachok, candle and paints",
      text: "On a desk I can see a candle. It is long and white. There is a small yellow flame on it. I can see square piece of yellow beeswax. The candle and the beeswax are waiting for me. There are jars with paint, too. There is red paint, blue paint and yellow paint.",
    },
    {
      id: 3,
      altText: "pysachok in flame",
      text: "“Hello, Kistka!” says the candle. “Are you ready to wake up?”“Yes”, I say. I jump into the flame. It is hot, but I like it. When I am hot, I collect some beeswax. It melts because I am hot. I see an egg in a wooden bowl. It is plain and white.",
    },
    {
      id: 4,
      altText: "pysachok and an egg",
      text: "My long nose has a small hole. Beeswax comes out of my nose and lies on the egg. I draw lines. ",
    },
    {
      id: 5,
      altText: "egg in yellow paint",
      text: "Then the egg goes into the yellow paint jar. We wait. When the egg in yellow, it comes out."
    },
    {
      id: 6,
      altText: "triangles and squares",
      text: "I draw more lines on the egg. Can you see triangles, stars, and squares? Then the egg goes into the red paint jar. I draw triangles and squares again. Then the egg goes into blue pain jar.",
    },
    {
      id: 7,
      altText: "egg and candle",
      text: "The candle is waiting for the egg. The egg jumps into the flame and the beeswax on the egg melts. Now you can see yellow lines under the wax. When the egg is beautiful, it is ready. The egg is a pysanka now.",
    },
  ],
  vocabulary: {
  nouns: [
  { word: "kistka", meaning: "писачок" },
  { word: "pysachok", meaning: "писачок (зменшувальна форма)" },
  { word: "pysanka", meaning: "писанка" },
  { word: "box", meaning: "коробка" },
  { word: "spring", meaning: "весна" },
  { word: "morning", meaning: "ранок" },
  { word: "snow", meaning: "сніг" },
  { word: "desk", meaning: "стіл / парта" },
  { word: "candle", meaning: "свічка" },
  { word: "flame", meaning: "полум’я" },
  { word: "beeswax", meaning: "бджолиний віск" },
  { word: "jar", meaning: "банка" },
  { word: "paint", meaning: "фарба" },
  { word: "egg", meaning: "яйце" },
  { word: "bowl", meaning: "миска" },
  { word: "nose", meaning: "ніс" },
  { word: "hole", meaning: "дірочка" },
  { word: "line", meaning: "лінія" },
  { word: "triangle", meaning: "трикутник" },
  { word: "star", meaning: "зірка" },
  { word: "square", meaning: "квадрат" }
],
verbs: [
  { word: "sleep", meaning: "спати" },
  { word: "wake up", meaning: "прокидатися" },
  { word: "bloom", meaning: "цвісти" },
  { word: "melt", meaning: "танути / розтоплюватися" },
  { word: "see", meaning: "бачити" },
  { word: "wait", meaning: "чекати" },
  { word: "jump", meaning: "стрибати" },
  { word: "collect", meaning: "збирати" },
  { word: "draw", meaning: "малювати" },
  { word: "go", meaning: "йти / переходити" },
  { word: "come out", meaning: "виходити" }
],
adjectives: [
  { word: "wooden", meaning: "дерев’яний" },
  { word: "cold", meaning: "холодний" },
  { word: "long", meaning: "довгий" },
  { word: "white", meaning: "білий" },
  { word: "yellow", meaning: "жовтий" },
  { word: "red", meaning: "червоний" },
  { word: "blue", meaning: "синій" },
  { word: "plain", meaning: "простий / без узору" },
  { word: "beautiful", meaning: "гарний" },
  { word: "ready", meaning: "готовий" },
  { word: "small", meaning: "маленький" }
]
},
  tasks: {
    task1: {
      name: "Who can say this",
      list: [
        "“I like the dam.” ",
        "“The dam keeps the river deep, thank you.”",
        "“I can’t cross the river here.”",
        "“This is our home. It keeps us safe.”",
      ],
    },
    task2: {
      name: "Say who can:",
      list: [
        "Who can catch small fish?",
        "Who can swim fast?",
        "Who cannot swim?",
        "Who builds the dam?",
        "Who checks the dam every morning?",
      ],
    },
    task3: {
      name: "Repeat if true (clap if true)",
      list: [
        "Ben has thin grey fur.",
        "Ben lives near a river.",
        "Ben’s father is building a dam.",
        "Molly has brown feathers.",
        "Oliver can swim.",
        "The fox is happy about the dam.",
        "The dam keeps the water deep.",
        "All animals are Ben’s friends.",
      ],
    },
    task4: {
      name: "Say who has:",
      list: [
        "white feathers and yellow beak",
        "long red tail and green eyes",
        "thick brown fur and flat tail",
        "long thick tail",
      ],
    },
  },
  speaking: [
    {
      id: "who-has-red-tail",
      type: "dialogue",
      dialogue: [
        {speaker: "A", line: "Who has red tail?"},
        {speaker: "B", line: "Fox has red tail"}
      ],
      table: {
        column1: ["beaver", "fox", "otter", "duck"],
        column2: "has",
        column3: ["red", "brown", "white", "yellow", "green", "long", "grey"],
        column4: ["teeth", "eyes", "nose", "ears", "tail", "head", "beak"]
      },
      images: ["beaver-head", "fox-head", "otter-head", "duck-head", "beaver-tail", "fox-tail", "otter-tail", "duck-tail"]

    },
    {
      id: "fox-has-long-tail",
      type: "sentence",
      dialogue: [
        {speaker: "A", line: "Beaver has big"},
        {speaker: "B", line: "teeth"}

      ],
      table: {
        column1: ["beaver", "fox", "otter"],
        column2: "has",
        column3: ["big", "small", "sharp", "wide", "flat", "long"],
        column4: ["teeth", "eyes", "nose", "ears", "tail"]
      },
      images: ["beaver", "fox", "otter"]
    }
  ],
  game: {nouns: "https://learningapps.org/watch?v=pm3a8b5h226", shapes: "https://learningapps.org/display?v=poeefhv5326", sentences: "https://learningapps.org/watch?v=p3r2esg8t26"}
};