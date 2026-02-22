import React from 'react'
import { story1 } from './data'
import StoryPage from '../../components/storyPage/StoryPage'

const Story1 = () => {
  return (
    <div>
        <h2>{story1.title}</h2>
    <ul>
      {
        story1.pages.map(el => <li key={el.id}><StoryPage storyPage={el}/></li> )
      }
    </ul>
    </div>
  )
}

export default Story1