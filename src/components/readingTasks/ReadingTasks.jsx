import React from 'react'
import TaskItem from '../../components/taskItem/TaskItem'

const ReadingTasks = ({items}) => {
    const readingTaskList = Object.keys(items)
  return (
    <ul>
      {readingTaskList.map((el, index) => <li key={index}><TaskItem item={items[el]}/></li> )}
    </ul>
  )
}

export default ReadingTasks
