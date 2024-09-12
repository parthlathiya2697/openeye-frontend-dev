import React, { useState } from "react";
import loginImg from "../login/Login_Gif.gif";
import './Style.scss'
import { ApiPostNoAuth } from "../../services/helpers/API/ApiData"

let LoginURL = 'v1/user/login'

const Login = () => {

  const [loginData, setLoginData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const loginButtonClick = async (e) => {
    e.preventDefault();
    
    await ApiPostNoAuth(LoginURL, loginData).then((res) => {
      localStorage.setItem("token", JSON.stringify(res?.data?.access_token));
      window.location.reload();

    }).catch((err) => {
      console.log("Error in response: ", err)
    })
  };
  
  return (
    <div className="Login">
      <div className="login_base_container">
        <div className="login_header">Login</div>
        <div className="login_content">
          
        <div className="login_image">
            <img src={loginImg}  alt="Login"/>
          </div>

          <div className="login_form">
              <div className="login_form-group">
                <input type="text" name="username" placeholder="username" value={loginData.username}
                  onChange={(e) => handleChange(e)} />
              </div>
              <div className="login_form-group">
                <input type="password" name="password" placeholder="password" value={loginData.password}
                  onChange={(e) => handleChange(e)} />
              </div>
          </div>
        </div>
        
        <div className="login_footer">
          <button type="button" className="login_btn" onClick={(e) => loginButtonClick(e)}>
            Login
          </button>
        </div>
      </div>
      </div>
  );
}

export default Login;