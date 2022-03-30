import React from 'react';
import ReactDOM from 'react-dom';
import './Regist.css';

function Regist({users}) {
    return (
    <div> 
        <label> Username </label>
        <input type="text" id="uname" name="uname"></input>

        <label><br></br> Password </label>
        <input type="text" id="password" name="password"></input>

        <label><br></br> Display name </label>
        <input type="text" id="display name" name="password"></input>

        <label><br></br></label>
        <button>Register</button>

        <label><br></br> Already registred? </label>
        <a href="https://www.google.com">Click here</a>
        <label> to login </label>
        
     </div>
    );
  }
  
  export default Regist;
  