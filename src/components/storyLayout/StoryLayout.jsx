import { useParams, NavLink, Outlet } from "react-router-dom";
import { stories } from "../../stories";


function StoryLayout() {
  const { storyId } = useParams();
  const story = stories.find(s => s.id === storyId);
  return (
    <div>
      <h1>{story.title}</h1>

      {/* <nav>
        {story.menu.map(item => (
          <NavLink key={item.path} to={item.path}>
            {item.label}
          </NavLink>
        ))}
      </nav> */}

      <Outlet />
    </div>
  );
}

export default StoryLayout;