import css from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className={`${css.header} container`}>
      <NavLink to={"/"}>
        Intro
      </NavLink>
    </div>
  )
}

export default Header
