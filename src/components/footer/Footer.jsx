import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='Footer'>
        <ul className='footer_permalinks'>
            <li> <a href='#'>Home</a> </li>
            <li> <a href='#about'>About</a> </li>
            <li> <a href='#applications'>Applications</a> </li>
        </ul>
    </footer>
  )
}

export default Footer