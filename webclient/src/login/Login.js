import './Login.css';


function Login({users}) {
    return (
    <div id = "login"> 
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
            <label> Not registred? </label>
            <a href="./registration/Regist.js">Click here</a>
            <label> to register </label> 
          </div>
        </form>
     </div>
    );
  }
  
  export default Login;
  