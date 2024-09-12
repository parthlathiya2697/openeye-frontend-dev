import React from 'react';

import './Home.scss'

import ParticleUp from '../../components/particle_up/ParticleUp'
import Login from '../../components/login/Login';
import { Logout } from '../../services/helpers/API/ApiData';

const Home = () => {
  const token = localStorage.getItem("token");

  const handleOnclick = async () => {
    console.log("Logged out");

    await Logout().then((res) => {
      window.location.reload();
  
    }).catch((err) => {
      console.log("Error in response: ", err)
    })
  }

  if(!token) {
    return (
      <Login/>
    )
  }

  return (
      <>
        <button className='btn' onClick={handleOnclick}>Logout</button>
        <ParticleUp/>
      </>
    )
}

export default Home