import './Login.css';
import { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';

// alert if there is wong Details
function WongDetails(){
  return(
    <div className="alert" role="alert">Incorrect username or password.</div>
  );
}

// alert if there is empty input
function EmptyDetails(){
  return(
    <div className="alert" role="alert">You did not enter username or password.</div>
  );
}

function Login({users}) {

  // reference to input of user
  const usernameInput = useRef();
  const passwordInput = useRef();
  const navigate = useNavigate();

  // states for hendale errors
  const [error, setError] = useState("");
  const [empty, setEmpty] = useState("");

  const checkLogin = function(){
    let userName = usernameInput.current.value;
    let password = passwordInput.current.value;
  
    for (var key in users){
      // if the username and the password are correct, move to the chats page. (working!)
        if (userName === key && password === users[key].password){
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

/*
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
  }*/

    return (
    <div className = "container"> 
        <img src="logo1.png" id ="logo" width = "170" height= "170"></img>
        <form id = "login">
          {(error!="")?(<WongDetails/>):""}
          {(empty!="")?(<EmptyDetails/>):""}
          <div className="form-group row">
            <label className="col-sm-4 col-form-label"> Username </label>
            <div className="col-sm-8">
              <input type="text" placeholder="Enter Username" id="uname" name="uname" ref={usernameInput}></input>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-form-label"> Password </label> 
            <div className="col-sm-8">
              <input type="password" placeholder="Enter Password" id="password" name="password" ref={passwordInput}></input>
            </div>
          </div>
          
          <div>
            <button type="button" className="btn btn-success" onClick={checkLogin}>Login</button>
          </div>
          
          <div>
            <label> Not registred?&nbsp; </label>
            <a href="/regist">Click here</a>
            <label>&nbsp;to register </label> 
          </div>
        </form>
        <div className="form-group row" id="last div">&nbsp;</div>
     </div>
    );
  }

  export default Login;
  