export const story1 = {
  id: "story1",
  title: "The Little Beaver and his Family",
  video: "_fg31nQi3wk",
  file: "https://drive.google.com/file/d/1CxLEtcGe_MSkLxRsEwnKfICqi-EYPPpd/view?usp=sharing",
  preListening: [
    { url: "beaver", label: "a beaver" },
    { url: "river", label: "a river" },
    { url: "house", label: "a house" },
    { url: "family", label: "a family" },
    { url: "lodge", label: "a lodge" },
    { url: "branch", label: "a branch" },
    { url: "mud", label: "mud" },
  ],
  pages: [
    {
      id: 1,
      altText: "Ben the beaver",
      text: "Hello, I am Ben. I am a beaver. Look at me. I have small nose, just like you. I have black eyes, and you? What color are your eyes? I have brown fur, and you? What color is your fur. Ha-ha, you have hair, not fur. What color is it? I have big, orange teeth, and you? What color are your teeth?  I have small ears, and you? Are your ears big or small? I have big flat tail. Do you have a tail?",
    },
    {
      id: 2,
      altText: "beaver lodge",
      text: "I have a big family. We live by a quiet river, and you? Where do you live with your family? My home is a lodge. Do you live in a lodge or in a house?",
    },
    {
      id: 3,
      altText: "beaver carries mud",
      text: "I have mother, and you? Do you have a mother? My mother is careful. She can repair our home. She can put mud between the sticks and make the walls strong.",
    },
    {
      id: 4,
      altText: "beaver carries branches",
      text: "I have father, and you? Do you have a father? My father is strong. He can build a dam in the river. He can carry heavy branches.",
    },
    {
      id: 5,
      altText: "baby beaver swimming",
      text: "I have a sister, and you? do you have a sister? My sister is fast. She can swim in the river and bring thin sticks for the dam.",
    },
    {
      id: 6,
      altText: "beaver swimming",
      text: "This is my granny. She is old. She can help my brother, my sister and me. She can teach my sister to find good sticks. She can teach my brother to swim.",
    },
    {
      id: 7,
      altText: "baby beaver on the shore",
      text: "I am small but fast. I can’t carry heavy branches. But I can collect small sticks for the lodge. Our home is strong because we work together.",
    },
    {
      id: 8,
      altText: "beaver abd baby beaver",
      text: "I have a brother, and you? Do you have a brother? My brother is small. He can swim near the shore.",
    },
  ],
  vocabulary: {
    nouns: [
      { word: "nose", meaning: "ніс" },
      { word: "eyes", meaning: "очі" },
      { word: "fur", meaning: "хутро" },
      { word: "hair", meaning: "волосся" },
      { word: "teeth", meaning: "зуби" },
      { word: "ears", meaning: "вуха" },
      { word: "tail", meaning: "хвіст" },

      { word: "river", meaning: "річка" },
      { word: "lodge", meaning: "хатинка (боброва)" },
      { word: "house", meaning: "будинок" },
      { word: "dam", meaning: "гребля" },
      { word: "branch", meaning: "гілка" },
      { word: "mud", meaning: "багно" },
      { word: "stick", meaning: "палиця" },
      { word: "wall", meaning: "стіна" },
      { word: "shore", meaning: "берег" },
    ],

    verbs: [
      { word: "build", meaning: "будувати" },
      { word: "carry", meaning: "нести" },
      { word: "repair", meaning: "ремонтувати" },
      { word: "swim", meaning: "плавати" },
      { word: "help", meaning: "допомагати" },
      { word: "teach", meaning: "вчити / навчати" },
      { word: "collect", meaning: "збирати" },
      { word: "work", meaning: "працювати" },
    ],

    adjectives: [
      { word: "heavy", meaning: "важкий" },
      { word: "careful", meaning: "обережний" },
      { word: "strong", meaning: "сильний" },
      { word: "fast", meaning: "швидкий" },
      { word: "thin", meaning: "тонкий" },
      { word: "small", meaning: "малий" },
      { word: "old", meaning: "старий" },
    ],

    other: [
      { word: "near", meaning: "біля / поруч" },
      { word: "because", meaning: "тому що" },
      { word: "together", meaning: "разом" },
    ],
  },
  tasks: {
    task1: {
      name: "Say who:",
      list: [
        "Who is strong?",
        "Who is fast?",
        "Who is old?",
        "Who is careful?",
      ],
    },
    task2: {
      name: "Repeat if true (clap if true)",
      list: [
        "Ben can teach.",
        "Granny can carry big branches.",
        "Mother can repair the lodge.",
        "Father can build a dam.",
        "Ben can carry big branches.",
        "Sister can swim.",
        "Brother can help father.",
      ],
    },
    task3: {
      name: "Who says that?",
      list: ["I am fast.", "I am strong.", "I am careful.", "I am small."],
    },
  },
  speaking: [
    {
      id: "task2",
      title: "It is heavy.",
      type: "Look and say",
      dialogue: [
        { speaker: "A", line: "Is he strong?" },
        { speaker: "B", line: "Yes. Is it heavy?" },
      ],
      table: [
        {
          column1: "Is",
          column2: ["he", "she", "it"],
          column3: ["old", "big", "small", "strong", "careful", "fast"],
        },
      ],
      images: [
        { url: "old", label: "old" },
        { url: "big", label: "big" },
        { url: "small", label: "small" },
        { url: "strong", label: "strong" },
        { url: "careful", label: "careful" },
        { url: "fast", label: "fast" },
      ],
    },
    {
      id: "task4",
      title: "A beaver can swim.",
      type: "Look and say",
      dialogue: [
        { speaker: "A", line: "Can a beaver swim?" },
        { speaker: "B", line: "Yes. Can a beaver carry?" },
      ],
      table: [
        {
          column1: "can",
          column2: "a beaver",
          column3: ["repair", "swim", "collect", "carry", "build"],
        },
      ],
      images: [
        { url: "repair", label: "repair" },
        { url: "swim", label: "swim" },
        { url: "collect", label: "collect" },
        { url: "carry", label: "carry" },
        { url: "build", label: "build" },
      ],
    },
    {
      id: "task6",
      title: "Who is she?",
      type: "Look and say",
      dialogue: [
        { speaker: "A", line: "Who is she?" },
        { speaker: "B", line: "A mother. She is a mother" },
      ],
      table: [
        {
          column1: ["He", "she"],
          column2: "is",
          verbs: [
            "a mother",
            "a father",
            "a sister",
            "a brother",
            "a granny",
            "a grandpa",
          ],
        },
      ],
      images: [
        { url: "mother", label: "mother" },
        { url: "father", label: "father" },
        { url: "sister", label: "sister" },
        { url: "brother", label: "brother" },
        { url: "granny", label: "granny" },
        { url: "grandpa", label: "grandpa" },
      ],
    },
    {
      id: "task9",
      title: "Is he small?",
      type: "Look and say",
      dialogue: [
        { speaker: "A", line: "Is he small?" },
        { speaker: "B", line: "Yes. Is he old?" },
      ],
      table: [
        {
          column1: "Is",
          column2: ["he", "she"],
          column3: ["old", "big", "small", "strong", "careful", "fast"],
        },
      ],
      images: [
        { url: "old", label: "old" },
        { url: "big", label: "big" },
        { url: "small", label: "small" },
        { url: "strong", label: "strong" },
        { url: "careful", label: "careful" },
        { url: "fast", label: "fast" },
      ],
    },
  ],
  games: [
    {
      url: "https://learningapps.org/watch?v=p88pryvs226",
    },
    { url: "https://learningapps.org/watch?v=pugqzuvjc26" },
    { url: "https://learningapps.org/watch?v=pzpe6s4wk26" },
    { url: "https://learningapps.org/watch?v=pyh438eva26" },
  ],
};
