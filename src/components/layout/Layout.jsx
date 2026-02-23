import React from 'react'
import SideBar from '../sideBar/SideBar'
import css from './Layout.module.css'
const Layout = ({children}) => {
  return (
    <div className={`${css.layout} container`}>
      <SideBar/>
      <div>{children}</div>
    </div>
  )
}

export default Layout
