import './Login.css';
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';


function Login({users}) {

  const usernameInput = useRef();
  const passwordInput = useRef();
  const navigate = useNavigate();

  const checkLogin = function(){
    let userName = usernameInput.current.value;
    let password = passwordInput.current.value;

    for (let i = 0; i < users.length; i++){

      // if the username and the password are correct, move to the chats page. (working!)
      if (userName === users[i].username && password === users[i].password){
            navigate("/chats");
      }
    }

    // doesnt working
    return (
      <div class="alert alert-warning" role="alert">
        A simple warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
      </div>
    );
  }


    return (
    <div id = "login"> 
        <form>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label"> Username </label>
            <div class="col-sm-10">
              <input type="text" placeholder="Enter Username" id="uname" name="uname" ref={usernameInput}></input>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label"> Password </label> 
            <div class="col-sm-10">
              <input type="text" placeholder="Enter Password" id="password" name="password" ref={passwordInput}></input>
            </div>
          </div>
          
          <div>
            <button type="button" class="btn btn-success" onClick={checkLogin}>Login</button>
          </div>
          
          <div>
            <label> Not registred? </label>
            <a href="/regist"> Click here </a>
            <label> to register </label> 
          </div>
        </form>
     </div>
    );
  }
  
  export default Login;
  