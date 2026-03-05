import { useParams } from "react-router-dom";
import css from "./Games.module.css";
import { stories } from "../../stories";

const Games = () => {
  const { storyId } = useParams();

  const story = stories.find((s) => s.id === storyId);
  const games = story.games;
  return (
    <div>
      
      <ul className={css.gameBox}>
        {games.map((game, index) => (
          <li key={index}>
            <iframe
        src={game.url}
        style={{ border: "0px", width: "100%", height: "500px" }}
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      ></iframe>
            <a href={game.url} target="_blanc">{`game ${index + 1}`}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Games;
