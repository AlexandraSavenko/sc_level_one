import css from './PreTask.module.css'
import ImageBox from '../imageBox/ImageBox';
import SpeakButton from '../speakButton/SpeakButton';
import { useParams } from 'react-router-dom';
import { stories } from '../../stories';

const PreTask = () => {
     const { storyId,type, taskId } = useParams();
  const story = stories.find((s) => s.id === storyId);
  const task = story[type].find((t) => t.id === taskId);
  if (!task) return <p>Task not found</p>;
  return (
    <div className={css.taskBox}>
      <div>
        <h3>{taskId}</h3>
        <p>Say:</p>
        <div className={css.taskTwo}>
          <SpeakButton text={task.dialogue}/>
          <p>{task.dialogue}</p>
        </div>
      </div>
      <ImageBox images={task.images}/>
    </div>
  )
}

export default PreTask
