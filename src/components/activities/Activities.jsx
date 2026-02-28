import css from './Activities.module.css'
import { useParams } from 'react-router-dom';
import { stories } from '../../stories';
import TaskItem from '../taskItem/TaskItem';

const Activities = () => {
        const { storyId } = useParams();

  const story = stories.find(s => s.id === storyId);
  const storyTasks = story.tasks
  const activityTaskList = Object.keys(storyTasks)
  return (
    <ul className={css.activityBox}>
      {activityTaskList.map((el, index) => <li key={index}><TaskItem item={storyTasks[el]}/></li> )}
    </ul>
  )
}

export default Activities
