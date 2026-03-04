import css from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = ({ openSidebar }) => {
  return (
    <div className={`${css.header}`}>
      <button
        className={css.menuBtn}
        onClick={() => openSidebar((prev) => !prev)}
      >
        ☰
      </button>
      <NavLink
        className={({ isActive }) =>
          `${isActive ? css.activeLink : ""} ${css.link}`
        }
        to={"/"}
      >
        <svg className={css.icon}>
          <use href="/icons.svg#icon-home"></use>
        </svg>
      </NavLink>
    </div>
  );
};

export default Header;
