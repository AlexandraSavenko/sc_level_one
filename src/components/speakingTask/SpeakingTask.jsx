import { useParams } from "react-router-dom";
import { stories } from "../../stories";
import SpeakButton from "../speakButton/SpeakButton";
import css from "./SpeakingTask.module.css"


const SpeakingTask = () => {
  const { storyId, taskId } = useParams();
  const story = stories.find(s => s.id === storyId);
  const task = story.speaking.find(t => t.id === taskId); 
  if (!task) return <p>Task not found</p>;

  return (
    <div>
      {task.dialogue.map((line, i) => (
        <div>
          <SpeakButton text={line.line}/>
          <p key={i}>
          <strong>{line.speaker}:</strong> {line.line}
        </p>
        </div>
        
      ))}
<div className={css.table}>
  {Object.entries(task.table).map((el, index) => (
    <div key={index} className={css.column}>
      {Array.isArray(el[1])
        ? el[1].map((word, i) => <p key={i}>{word}</p>)
        : <p>{el[1]}</p>
      }
    </div>
  ))}
</div>
<div>
    {task.images.map(el => ( <div key={el}>
        <img src={`/story_images/${story.id}/${task.id}_${el}.png`} alt={el} />
        <div>
          <SpeakButton text={el}/>
          <p>{el}</p>
        </div>
        
    </div> ))}
</div>
      {/* render table based on type here */}
    </div>
  );
}

export default SpeakingTask;
