import './Login.css';
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
    <div class="alert" role="alert">You did not enter username or password.</div>
  );
}

function Login({users}) {
  const usernameInput = useRef();
  const NickNameInput = useRef();
  const passwordInput = useRef();
  const coinfirmPasswordInput = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [empty, setEmpty] = useState("");

  const checkLogin = function(){
  let userName = usernameInput.current.value;
  let password = passwordInput.current.value;

  for (let i = 0; i < users.length; i++){
    // if the username and the password are correct, move to the chats page. (working!)
      if (userName === users[i].username && password === users[i].password){
        navigate("/chats");
      }
    }
    if(userName==="" || password ===""){
      setError("");
      setEmpty("empty");
    } else{
      setEmpty("");
      setError("error");
    }
  }

    return (
    <div className = "container"> 
        <img src="logo1.png" id ="logo" width = "170" height= "170"></img>
        <form id = "login">
          {(error!="")?(<WongDetails/>):""}
          {(empty!="")?(<EmptyDetails/>):""}
          <div class="form-group row">
            <label class="col-sm-4 col-form-label"> Username </label>
            <div class="col-sm-8">
              <input type="text" placeholder="Enter Username" id="uname" name="uname" ref={usernameInput}></input>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-4 col-form-label"> Password </label> 
            <div class="col-sm-8">
              <input type="password" placeholder="Enter Password" id="password" name="password" ref={passwordInput}></input>
            </div>
          </div>
          
          <div>
            <button type="button" class="btn btn-success" onClick={checkLogin}>Login</button>
          </div>
          
          <div>
            <label> Not registred?&nbsp; </label>
            <a href="/regist">Click here</a>
            <label>&nbsp;to register </label> 
          </div>
        </form>
     </div>
    );
  }

  export default Login;
  