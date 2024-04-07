import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Control from '../assests/control.png'
import Logo from '../assests/logo.png'
import Home from '../assests/home.png'
import Activities from '../assests/activity.png'
import Analytics from '../assests/analytic.png'
import Library from '../assests/library.png'
import Tranformation from '../assests/transformation.png';
import Setting from '../assests/setting.png'
import Logout from '../assests/logout.png'


const Header = () => {
  const [open, setOpen] = useState(true)
  const Menus = [
    { title: "Home", src: Home, alt: "Home", path: "/" },
    { title: "Activities", src: Activities, alt: "Activities", path: "/activitie" },
    { title: "Analytics", src: Analytics, alt: "Analytics", path: "/create-report" },
    { title: "Transformation ", src: Tranformation, alt: "Transformation", path: "/transformation" },
    { title: "Library", src: Library, alt: "Library", path: "/library" },
    { title: "Settings", src: Setting, alt: "Setting", gap: true, path: "/settings" },
    { title: "Logout", src: Logout, alt: "Logout" },

  ]
  return (
    <div className="flex fixed">
      <div className={`${open ? "w-72" : "w-20"} m-4 p-6 pt-10 h-[830px] duration-300 bg-dark-green  rounded-2xl relative`} >
        <img src={Control}
          alt='collapse'
          className={`${open ? "rotate-0" : "rotate-180"} absolute cursor-pointer rounded-full -right-3 top-5 w-10 border-2 border-dark-green`}
          onClick={() =>
            setOpen(!open)
          }
        />
        <div className="flex gap-x-6 items-center ">
          <img src={Logo} alt="Logo"
            className={`cursor-pointer duration-500 ${open && 'rotate-360'}`}
          />
          <h1 className={`text-white origin-left font-medium text-4xl duration-300 ${!open && 'scale-0'}`}>CATALIX</h1>
        </div>
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <li key={index}
              className={`text-white text-lg flex items-center cursor-pointer
            gap-x-6 p-2 hover:bg-light-white rounded-xl ${menu.gap ? "mt-9" : "mt-2"}`}
            >

              <Link to={menu.path}  className={`text-white text-lg flex items-center cursor-pointer
            gap-x-6 p-2${menu.gap ? "mt-9" : "mt-2"}`}>
                <img src={menu.src} alt={menu.alt} />
                <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header
