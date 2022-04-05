import './Login.css';

function Login({users}) {
    return (
    <div id = "login">
        <img src="logo.png" className='logo' width="20%" height="20%"></img>
        <form>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label"> Username </label>
            <div class="col-sm-10">
              <input type="text" placeholder="Enter Username" id="uname" name="uname"></input>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label"> Password </label> 
            <div class="col-sm-10">
              <input type="text" placeholder="Enter Password" id="password" name="password"></input>
            </div>
          </div>
          
          <div>
            <button type="button" class="btn btn-success">Login</button>
          </div>
          
          <div>
            <label> Not registred? &nbsp; </label>
            <a href="./registration/Regist.js">Click here</a>
            <label>&nbsp; to register </label> 
          </div>
        </form>
     </div>
    );
  }
  
  export default Login;
  