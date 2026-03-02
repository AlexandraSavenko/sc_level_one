import { useParams, NavLink, Outlet } from "react-router-dom";
import { stories } from "../../stories";
import css from "./SpeakingLayout.module.css";

const SpeakingLayout = () => {
  const { storyId } = useParams();
  const story = stories.find((s) => s.id === storyId);

  return (
    <div className={css.speakingWrapper}>
      <h2 className={css.heading}>Speaking</h2>

      <nav className={css.nav}>
        {story.speaking.map((task) => (
          <NavLink
            key={task.id}
            to={task.id}
            className={({ isActive }) =>
              `${isActive ? css.active : ""} ${css.link}`
            }
          >
            {task.title}
          </NavLink>
        ))}
      </nav>

      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default SpeakingLayout;
