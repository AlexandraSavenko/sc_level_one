import React from 'react'
import { story2 } from './data'
import StoryPage from '../../components/storyPage/StoryPage'

const Story2 = () => {
  return (
    <div>
        <h2>{story2.title}</h2>
    <ul>
      {
        story2.pages.map(el => <li key={el.id}><StoryPage storyPage={el}/></li> )
      }
    </ul>
    </div>
  )
}

export default Story2