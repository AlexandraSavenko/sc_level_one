import React from 'react'
import { pages } from '../../data/first'
import StoryPage from '../storyPage/StoryPage'
// import {pages} from "../../data/first"

const Story = () => {
  return (
    <ul>
      {
        pages.map(el => <li key={el.id}><StoryPage storyPage={el}/></li> )
      }
    </ul>
  )
}

export default Story
