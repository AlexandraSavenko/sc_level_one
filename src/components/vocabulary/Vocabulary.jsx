import React from "react";
import { useParams } from "react-router-dom";
import { stories } from "../../stories";

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
            <p key={i}>
              {item.word} — {item.meaning}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Vocabulary;
