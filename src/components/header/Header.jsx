import React from "react"
import './Header.scss'
import { GrHomeRounded } from 'react-icons/gr';
import { FaRegUser } from 'react-icons/fa';
import { GrNotification } from 'react-icons/gr';
import { BsJournalBookmarkFill } from 'react-icons/bs';
import { GrAppsRounded } from 'react-icons/gr';

import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className='Header container header_fixed'>
          <div className='header_items'>
              <h2> 
                <Link to="/home">
                  <button className="glow-on-hover raise"> <GrHomeRounded className="js_icons invert" /> </button>
                </Link>
              </h2>  
              
              <h2> 
                <Link to='/applications'>
                  <button className="glow-on-hover raise"> <GrAppsRounded className="js_icons invert" /> </button>
                </Link>
              </h2>

              <h2> 
                <Link to="/user">
                  <button className="glow-on-hover raise"> <FaRegUser className="js_icons" /> </button>
                </Link>
              </h2>  
              
              <h2> 
                <Link to='/blogs'>
                  <button className="glow-on-hover raise"> <BsJournalBookmarkFill className="js_icons" /> </button>
                </Link>
              </h2>  
              
          
              </div>
      </header>

      <Outlet />
    </>
  )
}

export default Header