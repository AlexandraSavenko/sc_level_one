import { useParams, NavLink, Outlet } from "react-router-dom";
import { stories } from "../../stories";
import css from "./StoryLayout.module.css";

function StoryLayout() {
  const { storyId } = useParams();
  const story = stories.find((s) => s.id === storyId);
  return (
    <div className={css.layoutBox}>
      <div className={css.titleBox}>
        <h1>{story.title}</h1>
      <a className={css.downloadLink} href={story.file} target="_blanc">
        <svg className={css.icon}>
          <use href="/icons.svg#icon-download"></use>
        </svg>
        <span>download the story</span>
      </a>
      </div>
      
      <Outlet />
    </div>
  );
}

export default StoryLayout;
