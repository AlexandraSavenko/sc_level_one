import { useParams, NavLink, Outlet } from "react-router-dom";
import { stories } from "../../stories";


const SpeakingLayout = () => {
  const { storyId } = useParams();
  const story = stories.find(s => s.id === storyId);

  return (
    <div>
      <h2>Speaking</h2>

      <nav>
        {story.speaking.map(task => (
          <NavLink
            key={task.id}
            to={task.id}
            style={{ marginRight: "1rem" }}
          >
            {task.id}
          </NavLink>
        ))}
      </nav>

      <Outlet />
    </div>
  );
}

export default SpeakingLayout;
