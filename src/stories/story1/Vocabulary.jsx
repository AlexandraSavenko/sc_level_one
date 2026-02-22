import React from "react";

const Vocabulary = ({voc}) => {
  const vocabularyList = Object.keys(voc);
  return (
    <ul>
      {vocabularyList.map((el, index) => (
        <li key={index}>
          <h4>{el}</h4>
          <p>{voc[el]}</p>{" "}
        </li>
      ))}
    </ul>
  );
};

export default Vocabulary;
