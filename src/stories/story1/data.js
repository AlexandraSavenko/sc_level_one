export const story1 = {
  id: "story1",
  title: "The Little Beaver’s Family",
  pages: [
    {
      id: 1,
      imageURL: "/story_images/first_story/first_story_1.png",
      altText: "Ben the beaver",
      text: "Hello, I am Ben. I am a beaver. Look at me. I have small nose, just like you. I have black eyes, and you? What color are your eyes? I have brown fur, and you? What color is your fur. Ha-ha, you have hair, not fur. What color is it? I have big, orange teeth, and you? What color are your teeth?  I have small ears, and you? Are your ears big or small? I have big flat tail. Do you have a tail?",
    },
    {
      id: 2,
      imageURL: "/story_images/first_story/first_story_2.png",
      altText: "beaver lodge",
      text: "I have a big family. We live by a quiet river, and you? Where do you live with your family? My home is a lodge. Do you live in a lodge or in a house?",
    },
    {
      id: 3,
      imageURL: "/story_images/first_story/first_story_3.png",
      altText: "beaver carries mud",
      text: "I have mother, and you? Do you have a mother? My mother is careful. She can repair our home. She can put mud between the sticks and make the walls strong.",
    },
    {
      id: 4,
      imageURL: "/story_images/first_story/first_story_4.png",
      altText: "beaver carries branches",
      text: "I have father, and you? Do you have a father? My father is strong. He can build a dam in the river. He can carry heavy branches.",
    },
    {
      id: 5,
      imageURL: "/story_images/first_story/first_story_5.png",
      altText: "baby beaver swimming",
      text: "I have a sister, and you? do you have a sister? My sister is fast. She can swim in the river and bring thin sticks for the dam.",
    },
    {
      id: 6,
      imageURL: "/story_images/first_story/first_story_6.png",
      altText: "beaver swimming",
      text: "This is my granny. She is old. She can help my brother, my sister and me. She can teach my sister to find good sticks. She can teach my brother to swim.",
    },
    {
      id: 7,
      imageURL: "/story_images/first_story/first_story_7.png",
      altText: "baby beaver on the shore",
      text: "I am small but fast. I can’t carry heavy branches. But I can collect small sticks for the lodge. Our home is strong because we work together.",
    },
    {
      id: 8,
      imageURL: "/story_images/first_story/first_story_8.png",
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
    id: "who-is-this",
    type: "this-is",
    dialogue: [
      { speaker: "A", line: "Who is this?" },
      { speaker: "B", line: "This is a mother." },
    ],
    table: {
      prefix: "This is",
      options: ["mother", "father", "sister", "brother", "granny"],
    }
  },
  {
    id: "can-beaver",
    type: "can-verb",
    dialogue: [
      { speaker: "A", line: "Can a beaver swim?" },
      { speaker: "B", line: "Yes, a beaver can swim." },
    ],
    table: {
      modal: "Can",
      subject: "beaver",
      verbs: ["swim", "collect", "repair", "build", "carry"],
    }
  }
]
};
