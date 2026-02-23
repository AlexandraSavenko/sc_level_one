import React from 'react'
import { useParams } from 'react-router-dom';
import { stories } from '../../stories';

const Reading = () => {
    const { storyId } = useParams();

  const story = stories.find(s => s.id === storyId);

  if (!story) return <p>Story not found.</p>;
  return (
    <div>
      {story.pages.map(page => (
        <div key={page.id}>
          
          {/* Image */}
          {page.imageURL && (
            <img
              src={page.imageURL}
              alt={page.altText}
              style={{ maxWidth: "100%" }}
            />
          )}

          {/* Content blocks */}
          {page.text && <p>{page.block}</p> }
        </div>
      ))}
    </div>
  )
}

export default Reading
