import React from 'react'

const StoryPage = ({storyPage: {imageURL, altText, text}}) => {
  return (
    <div>
      <img src={imageURL} alt={altText} />
      <p>{text}</p>
    </div>
  )
}

export default StoryPage
