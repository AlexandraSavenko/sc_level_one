import React from 'react'

const TaskItem = ({item}) => {
  return (
    <div>
      <h4>{item.name}</h4>
      <ul>
        {item.list.map((el, index) => <li key={index}>{el}</li> )}
      </ul>
    </div>
  )
}

export default TaskItem
