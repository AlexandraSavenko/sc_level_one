import { useParams, NavLink, Outlet } from "react-router-dom";
import { stories } from "../../stories";
import css from "./StoryLayout.module.css"


function StoryLayout() {
  const { storyId } = useParams();
  const story = stories.find(s => s.id === storyId);
  return (
    <div className={css.layoutBox}>
      <h1>{story.title}</h1>
      <Outlet />
    </div>
  );
}

export default StoryLayout;