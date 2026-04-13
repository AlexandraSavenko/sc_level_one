import { NavLink, Outlet, useParams } from 'react-router-dom'
import css from './TaskLayout.module.css'
import { stories } from '../../stories'

const TaskLayout = () => {

    const {storyId, type} = useParams();
    const story = stories.find(s => s.id === storyId);
    const tasks = story?.[type] || [];
    if(tasks.length === 0){
        return <p>Sorry, tasks couldn't be loaded</p>
    }

  return (
    <div className={css.speakingWrapper}>
      <h2 className={css.heading}>{type.toUpperCase()}</h2>

      <nav className={css.nav}>
        {tasks.map((task) => (
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
  )
};

export default TaskLayout
