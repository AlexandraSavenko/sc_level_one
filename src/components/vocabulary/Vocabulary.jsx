import css from "./Vocabulary.module.css";
import { useParams } from "react-router-dom";
import { stories } from "../../stories";
import SpeakButton from "../speakButton/SpeakButton";

const Vocabulary = () => {
  const { storyId } = useParams();

  const story = stories.find((s) => s.id === storyId);
  console.log(story);
  return (
    <div className={css.vocabularyBox}>
      {Object.entries(story.vocabulary).map(([category, words]) => (
        <div key={category}>
          <h2>{category}</h2>
          <ul className={css.wordList}>
            {words.map((item, i) => (
              <li key={i} className={css.wordLine}>
                <SpeakButton text={item.word} />
                <p className={css.wordBox}>
                  <span className={css.word}>{item.word}</span>
                   <span className={css.meaning}>{item.meaning}</span> 
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Vocabulary;
