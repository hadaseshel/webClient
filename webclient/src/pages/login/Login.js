import './Login.css';
import { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Users from '../../Users.js';


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

  // debug
  console.log(Users);

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
  
    for (var key in Users){
      // if the username and the password are correct, move to the chats page. (working!)
        if (userName === key && password === Users[key].password){
          navigate("/chats",{state: {password: Users[key].password, nickname: Users[key].nickname, image: Users[key].image, friends: Users[key].friends}});
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
        <img src="logoHioosh.png" id ="logo" width = "170" height= "170"></img>
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
            <button type="submit" className="btn btn-success" onClick={checkLogin}>Login</button>
          </div>
          
          <div>
            <label> Not registred?&nbsp; </label>
            <button className="button_of_link" onClick={()=>{navigate("/regist")}}>Click here</button>
            <label>&nbsp;to register </label> 
          </div>
        </form>
        <div className="form-group row" id="last div">&nbsp;</div>
     </div>
    );
  }

  export default Login;
  