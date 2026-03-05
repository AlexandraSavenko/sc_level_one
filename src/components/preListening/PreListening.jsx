import css from './PreListening.module.css'
import { useParams } from 'react-router-dom';
import { stories } from '../../stories';
import ImageBox from '../imageBox/ImageBox';
import SpeakButton from '../speakButton/SpeakButton';

const PreListening = () => {
  const { storyId } = useParams();

  const story = stories.find(s => s.id === storyId);

  return (
    <div className={css.taskBox}>
      <div>
        <h3>Task 1</h3>
        <p>Listen and repeat.</p>
      </div>
      <div>
        <h3>Task 2</h3>
        <p>Say:</p>
        <div className={css.taskTwo}>
          <SpeakButton text={"I see ..."}/>
          <p>I see ...</p>
        </div>
      </div>
      <ImageBox images={story.preListening}/>
    </div>
  )
}

export default PreListening;
