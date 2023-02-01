import React, { useState } from "react";
import { Link, Route, Routes } from 'react-router-dom'
import Body from "../components/Body";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import menu from "../assets/menu.png";
import close from "../assets/close.png";

function Header() {
  const [toggle, setToggle] = useState(false)
  const [toggleMenu, setToggleMenu] = useState(false)
  const handleMenu = () => {
    setToggle(!toggle)
    console.log(toggle)
  }
  const menuChild = () => {
    toggleMenu(!toggleMenu)
    console.log(toggleMenu)
  }
  return (
    <div>
      <div className="header">
        <div className="header-row container-xl">
          <div className="header-column">
            <a href=""><img className="header-img" src={logo} alt="" /></a>
            <div className={`header-col-8 ${toggle ? 'active' : null}`}>
              <ul className='header-list'>
                <li className="close"><img onClick={handleMenu} className='header-close' src={close} alt="" /></li>
                <li className="header-items header-items__parent"><Link onClick={menuChild} className="header-link" to="/">Blogs</Link>
                  <ul className={`header-items__child ${toggleMenu ? 'active-child' : null}`}>
                    <li className="items__child"><Link className="child-link">Link 1</Link></li>
                    <li className="items__child"><Link className="child-link">Link 2</Link></li>
                    <li className="items__child"><Link className="child-link">Link 3</Link></li>
                    <li className="items__child"><Link className="child-link">Link 4</Link></li>
                  </ul>
                </li>
                <li className="header-items"><Link className="header-link" to="#">Skills</Link></li>
                <li className="header-items"><Link className="header-link" to="#">Career Goals</Link></li>
                <li className="header-items"><Link className="header-link" to="#">Education</Link></li>
                <li className="header-items"><Link className="header-link" to="#">Hobby</Link></li>
              </ul>
            </div>
          </div>
          <div className="header-col-4">
            <div className="header-navbar">
                <input placeholder="Search" type="text" />
                <button>Search</button>
            </div>
            <div className="header-menu">
                <img onClick={handleMenu} className="header-menu__img" src={menu} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <Routes>
        <Route path='/link1' element={} />
        <Route path='/link2' element={} />
        <Route path='/link3' element={} />
        <Route path='/link4' element={} />
      </Routes> */}
    </div>
  )
}

export default Header;