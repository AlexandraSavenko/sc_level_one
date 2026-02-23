import React from 'react'
import { NavLink } from 'react-router-dom'

const ContentItem = ({storyNumber}) => {
  return (
    <ul>
        <li>
      <NavLink to={`story${storyNumber}/story`}>{`Story ${storyNumber}`}</NavLink>
      </li>
      <li>
      <NavLink to={`story${storyNumber}/vocabulary`}>Vocabulary</NavLink>
      </li>
      <li>
      <NavLink to={`story${storyNumber}/activities`}>Activities</NavLink>
      </li>
      <li>
      <NavLink to={`story${storyNumber}/speaking`}>Speaking activities</NavLink>
      </li>
      <li>
      <NavLink to={`story${storyNumber}/games`}>Games</NavLink>
      </li>
      <li>
      <NavLink to={`story${storyNumber}/tests`}>Tests</NavLink>
      </li>
    </ul>
  )
}

export default ContentItem
