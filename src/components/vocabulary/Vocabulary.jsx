import React from "react";
import { useParams } from "react-router-dom";
import { stories } from "../../stories";

const Vocabulary = () => {
  const { storyId } = useParams();
  
  const story = stories.find(s => s.id === storyId);
  const storyVocabulary = story.vocabulary;
  const storyVocabularyList = Object.keys(storyVocabulary)
console.log(story)
  return (
    <div>
      {storyVocabularyList.map((partOfSpeach, index) => (
        <p key={index}>
          <strong>{partOfSpeach}</strong> – {storyVocabulary[partOfSpeach]}
        </p>
      ))}
    </div>
  );
};

export default Vocabulary;
