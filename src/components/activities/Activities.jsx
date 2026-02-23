import React from 'react'
import { useParams } from 'react-router-dom';
import { stories } from '../../stories';
import TaskItem from '../taskItem/TaskItem';

const Activities = () => {
        const { storyId } = useParams();

  const story = stories.find(s => s.id === storyId);
  const storyTasks = story.tasks
  const activityTaskList = Object.keys(storyTasks)
  return (
    <div>
      {activityTaskList.map((el, index) => <li key={index}><TaskItem item={storyTasks[el]}/></li> )}
    </div>
  )
}

export default Activities
