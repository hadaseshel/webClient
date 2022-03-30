//import logo from './logo.svg';
import './Login.css';


function Login() {
    return (
    <div> 
        <label> Username </label>
        <input type="text" id="uname" name="uname"></input>

        <label><br></br> Password </label>
        <input type="text" id="password" name="password"></input>
        
        <label><br></br></label>
        <button>Register</button>

        <label><br></br> Not registred? </label>
        <a href="./registration/Regist.js">Click here</a>
        <label> to registr </label>
        
     </div>
    );
  }
  
  export default Login;
  