import React from 'react';
import ReactDOM from 'react-dom';
import './Regist.css';
import { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';

// alert if there is wong Details
function WongDetails(){
  return(
    <div class="alert" role="alert">Incorrect username or password.</div>
  );
}

// alert if there is empty input
function EmptyDetails(){
  return(
    <div class="alert" role="alert">There is an empty field. Please enter your details for all fields</div>
  );
}

// alert if the name is in used in the app
function UserNameInUsed(){
  return(
    <div class="alert" role="alert">The username is in used. Please select another username</div>
  );
}
function Regist({users}) {
  const usernameInput = useRef();
  const passwordInput = useRef();
  const nickNameInput = useRef();
  const coinfirmPasswordInput = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [nameInUse, setNameInUse] = useState("");
  const [empty, setEmpty] = useState("");

  const checkRegister = function(){
  let userName = usernameInput.current.value;
  let password = passwordInput.current.value;
  let nickName = nickNameInput.current.value;
  let coinfirmPassword= coinfirmPasswordInput.current.value;

  if(userName==="" || password ==="" || nickName === "" || coinfirmPassword === ""){
    setEmpty("empty");
  }
  for (let i = 0; i < users.length; i++){
    // if the username and the password are correct, move to the chats page. (working!)
      if (userName === users[i].username){
        setNameInUse("used");
      }
  }
 
}

    return (
    <div className = "container"> 
      <img src="logo1.png" id ="logo" width = "170" height= "170"></img>
      <form id = "register">
        {(error!="")?(<WongDetails/>):""}
        {(empty!="")?(<EmptyDetails/>):""}
        {(nameInUse!="")?(<UserNameInUsed/>):""}
        <div class="form-group row">
          <label class="col-sm-4 col-form-label"> Username </label>
          <div class="col-sm-8">
            <input type="text" placeholder="Enter Username" id="uname" name="uname" ref={usernameInput}></input>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-4 col-form-label"> Nick name </label>
          <div class="col-sm-8">
            <input type="text" placeholder="Enter Nick name" id="uname" name="uname" ref={nickNameInput}></input>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-4 col-form-label"> Password </label> 
          <div class="col-sm-8">
            <input type="password" placeholder="Enter Password" id="password" name="password" ref={passwordInput}></input>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-4 col-form-label"> Confirm password </label> 
          <div class="col-sm-8">
            <input type="password" placeholder="Confirm password" id="password" name="password" ref={coinfirmPasswordInput} ></input>
          </div>
        </div>
        
        <div>
          <button type="button" class="btn btn-success" onClick={checkRegister}>Register</button>
        </div>
        
        <div>
          <label> Already registred?&nbsp; </label>
          <a href="/">Click here</a>
          <label>&nbsp;to login </label> 
        </div>
      </form>
   </div>);
  }
  
  export default Regist;
  