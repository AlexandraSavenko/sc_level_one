import React from 'react'
import ContentItem from '../contentItem/ContentItem'

const SideBar = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div>{
        numbers.map(el => <ContentItem key={el} storyNumber={el}/>)}
    </div>
  )
}

export default SideBar
