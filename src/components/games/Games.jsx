import { useParams } from 'react-router-dom';
import css from './Games.module.css'
import { stories } from '../../stories';

const Games = () => {
    const { storyId } = useParams();

  const story = stories.find(s => s.id === storyId);
  const games = story.games
  return (
    <ul className={css.gameBox}>
      {games.map((game, index) => <li key={index}>
        <a href={game.url} target='_blanc'>{`game ${index +1}`}</a>
      </li> )}
    </ul>
  )
}

export default Games
