import React from 'react'
import { useParams } from 'react-router-dom';
import { stories } from '../../stories';
import SpeakButton from '../speakButton/SpeakButton';

const Reading = () => {
    const { storyId } = useParams();

  const story = stories.find(s => s.id === storyId);

  if (!story) return <p>Story not found.</p>;
  return (
    <div>
      {story.pages.map(page => (
        <div key={page.id}>
          
          {/* Image */}
          {page.altText && (
            <img
              src={`/story_images/${story.id}/first_story_${page.id}.png`}
              alt={page.altText}
              style={{ maxWidth: "100%" }}
            />
          )}

          {/* Content blocks */}
          {page.text && <div>
            <SpeakButton text={page.text}/>
            <p>{page.text}</p></div>  }
        </div>
      ))}
    </div>
  )
}

export default Reading
