import React, { useState } from "react";
import loginImg from "../login/Login_Gif.gif";
import { ApiPostNoAuth } from "../../services/helpers/API/ApiData"
import './Style.scss'

import {useNavigate} from 'react-router-dom';

let HomeURL = '/'
let RegisterURL = 'v1/user/user'

const Register = () => {

  const navigate = useNavigate();
  
  const [registerData, setRegisterData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const signupButtonClick = async (e) => {
    e.preventDefault();
    
    await ApiPostNoAuth(RegisterURL, registerData).then((res) => {
      localStorage.setItem("token", JSON.stringify(res?.data?.access_token));
      navigate(HomeURL);
      console.log(res)
    }).catch((err) => {
      console.log("Error in response: ", err)
    })
  };

    return (
      <div className="Register">
        <div className="login_base_container-container">
          <div className="login_header">Register</div>
          <div className="login_content">
            
            <div className="login_image">
              <img src={loginImg} alt="Register"/>
            </div>
            
            <div className="login_form">
              <div className="login_form_group">
                <input type="text" name="username" placeholder="username" value={registerData.username}
                onChange={(e) => handleChange(e)} />
              </div>
              
              <div className="login_form_group">
                <input type="text" name="email" placeholder="email"  value={registerData.email}
                onChange={(e) => handleChange(e)} />
              </div>
              
              <div className="login_form_group">
                <input type="text" name="password" placeholder="password"  value={registerData.password}
                onChange={(e) => handleChange(e)} />
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="button" className="btn" onClick={(e) => signupButtonClick(e)}>
              Register
            </button>
          </div>
        </div>
      </div>  
  );
}

export default Register