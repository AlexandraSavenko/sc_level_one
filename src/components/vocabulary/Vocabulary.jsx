import React from "react";
import { useParams } from "react-router-dom";
import { stories } from "../../stories";
import SpeakButton from "../speakButton/SpeakButton";

const Vocabulary = () => {
  const { storyId } = useParams();

  const story = stories.find((s) => s.id === storyId);
  console.log(story);
  return (
    <div>
      {Object.entries(story.vocabulary).map(([category, words]) => (
        <div key={category}>
          <h2>{category}</h2>
          {words.map((item, i) => (
            <div>
              <SpeakButton text={item.word} />
              <p key={i}>
              {item.word} — {item.meaning}
            </p>
            </div>
            
          ))}
        </div>
      ))}
    </div>
  );
};

export default Vocabulary;
