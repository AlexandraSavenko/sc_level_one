import React from 'react'
import { story1 } from './data'
import StoryPage from '../../components/storyPage/StoryPage'
import Vocabulary from '../../components/vocabulary/Vocabulary'
import ReadingTasks from './ReadingTasks'

const Story1 = () => {
  return (
    <div>
        <h2>{story1.title}</h2>
    <ul>
      {
        story1.pages.map(el => <li key={el.id}><StoryPage storyPage={el}/></li> )
      }
    </ul>
    {<Vocabulary voc={story1.vocabulary} />}
    {<ReadingTasks items={story1.tasks} />}
    </div>
  )
}

export default Story1