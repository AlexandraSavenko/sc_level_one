import css from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className={`${css.header} container`}>
      <NavLink  className={({ isActive }) =>
          `${isActive ? css.activeLink : ""} ${css.link}`
        } to={"/"}>
        <svg className={css.icon}>
                    <use href="/icons.svg#icon-home"></use>
                  </svg> 
      </NavLink>
    </div>
  )
}

export default Header
