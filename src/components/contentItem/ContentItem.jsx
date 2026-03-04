import css from './ContentItem.module.css'
import { NavLink } from 'react-router-dom'

const ContentItem = ({storyNumber}) => {
  return (
    <ul className={css.itemBox}>
        <li>
      <NavLink className={({isActive}) => `${css.link} ${isActive && css.active}`} to={`story${storyNumber}/story`}>{`Story ${storyNumber}`}</NavLink>
      </li>
      <li>
      <NavLink className={({isActive}) => `${css.link} ${isActive && css.active}`} to={`story${storyNumber}/video`}>Video</NavLink>
      </li>
      <li>
      <NavLink className={({isActive}) => `${css.link} ${isActive && css.active}`} to={`story${storyNumber}/vocabulary`}>Vocabulary</NavLink>
      </li>
      <li>
      <NavLink className={({isActive}) => `${css.link} ${isActive && css.active}`} to={`story${storyNumber}/activities`}>Activities</NavLink>
      </li>
      <li>
      <NavLink className={({isActive}) => `${css.link} ${isActive && css.active}`} to={`story${storyNumber}/speaking`}>Speaking</NavLink>
      </li>
      <li>
      <NavLink className={({isActive}) => `${css.link} ${isActive && css.active}`} to={`story${storyNumber}/games`}>Games</NavLink>
      </li>
    </ul>
  )
}

export default ContentItem
