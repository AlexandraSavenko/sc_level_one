import { useParams } from "react-router-dom";
import { stories } from "../../stories";


const SpeakingTask = () => {
  const { storyId, taskId } = useParams();
  const story = stories.find(s => s.id === storyId);
  const task = story.speaking.find(t => t.id === taskId); 
  if (!task) return <p>Task not found</p>;

  return (
    <div>
      {task.dialogue.map((line, i) => (
        <p key={i}>
          <strong>{line.speaker}:</strong> {line.line}
        </p>
      ))}
<div className="table">
  {Object.entries(task.table).map((el, index) => (
    <div key={index}>
      {Array.isArray(el[1])
        ? el[1].map((word, i) => <p key={i}>{word}</p>)
        : <p>{el[1]}</p>
      }
    </div>
  ))}
</div>
      {/* render table based on type here */}
    </div>
  );
}

export default SpeakingTask;
