import React from 'react'
import './Article.scss'
import { Outlet, Link } from "react-router-dom";

const Article = () => {
  return (
    <>
      <div className= "article_automation">
        <Link to="/article_intro" className='btn'>Generate Introduction from Topic</Link>
        <Link to="/article_outline" className='btn'>Generate Outlines from Introduction and Topic</Link>
        <Link to='/article_outline_content' className='btn'>Generate Content of Outlines from Topic, Introductino, Outlines</Link>
      </div>

      <Outlet/>

    </>
  )
}

export default Article