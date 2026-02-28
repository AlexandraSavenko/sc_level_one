import SpeakButton from '../speakButton/SpeakButton'
import css from './TaskItem.module.css'

const TaskItem = ({item}) => {
  return (
    <div className={css.taskCard}>
      <h4>{item.name}</h4>
      <ul className={css.taskList}>
        {item.list.map((el, index) => <li key={index}>
          <SpeakButton text={el}/>
          <p>{el}</p></li> )}
      </ul>
    </div>
  )
}

export default TaskItem
