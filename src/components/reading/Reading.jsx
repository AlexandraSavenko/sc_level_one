import css from './Reading.module.css'
import { useParams } from 'react-router-dom';
import { stories } from '../../stories';
import SpeakButton from '../speakButton/SpeakButton';

const Reading = () => {
    const { storyId } = useParams();

  const story = stories.find(s => s.id === storyId);

  if (!story) return <p>Story not found.</p>;
  return (
    <div className={css.readingBox}>
      {story.pages.map(page => (
        <div className={css.readingContent} key={page.id}>
          {page.altText && (
            <img
              src={`/story_images/${story.id}/text_${page.id}.png`}
              alt={page.altText}
              style={{ maxWidth: "100%" }}
            />
          )}
          {page.text && <div className={css.textBlock}>
            <SpeakButton text={page.text}/>
            <p>{page.text}</p></div>  }
        </div>
      ))}
    </div>
  )
}

export default Reading
