import { useParams } from "react-router-dom";
import { stories } from "../../stories";
import SpeakButton from "../speakButton/SpeakButton";
import css from "./SpeakingTask.module.css";
import ImageBox from "../imageBox/ImageBox";
import ImageTable from "../imageTable/ImageTable";

const SpeakingTask = () => {
  const { storyId, taskId } = useParams();
  const story = stories.find((s) => s.id === storyId);
  const task = story.speaking.find((t) => t.id === taskId);
  if (!task) return <p>Task not found</p>;

  return (
    <div>
      <div className={css.dialogueBox}>
        {task.dialogue.map((line, i) => (
          <div className={css.speakerLine}>
            <SpeakButton text={line.line} />
            <p key={i}>
              <strong>{line.speaker}:</strong> {line.line}
            </p>
          </div>
        ))}
      </div>

      <div className={css.table}>
        {Object.entries(task.table).map((el, index) => (
          <div key={index} className={css.column}>
            {Array.isArray(el[1]) ? (
              el[1].map((word, i) => (
                <div className={css.tableLine}>
                  {" "}
                  <SpeakButton text={word} /> <p key={i}>{word}</p>
                </div>
              ))
            ) : (
              <div className={css.tableLine}>
                <SpeakButton text={el[1]} />
                <p>{el[1]}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={css.imageBox}>
        {Array.isArray(task.images) ? (
          <ImageBox images={task.images} />
        ) : (
          <ImageTable images={task.images} />
        )}
      </div>
      {/* render table based on type here */}
    </div>
  );
};

export default SpeakingTask;
