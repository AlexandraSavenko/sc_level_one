import css from './SideBar.module.css'
import ContentItem from '../contentItem/ContentItem'

const SideBar = ({isOpen, setIsOpen}) => {
    const numbers = [1, 2, 3, 4, 5, 6, 7]
  return (
    <div>
      {isOpen && <div className={css.overlay} onClick={() => setIsOpen(false)} />}
    
    <div className={`${css.sideBar} ${isOpen ? css.open : ""}`}>{
        numbers.map(el => <ContentItem key={el} storyNumber={el}/>)}
    </div>
    </div>
  )
}

export default SideBar
