import React from 'react'
import './Rephraser.scss'
import { Outlet, Link } from "react-router-dom";


const Rephraser = () => {
  return (
    <>
      <div className="rephraser">
		      <Link to="/paraphraser" className='btn'>Paraphraser</Link> 
      </div>
      
      <Outlet/>
    </>
  )
}

export default Rephraser