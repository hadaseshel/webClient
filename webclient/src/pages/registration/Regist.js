import React from 'react';
import ReactDOM from 'react-dom';
import './Regist.css';
import { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';

// alert if Password is not contain number, appercase and lowercase
function ErrorPassrowd(){
  return(
    <div class="alert" role="alert">Passwords has at least 8 characters that include at least 1 lowercase character, 1 uppercase character and 1 number. All the other characters are not allowed to use in the passraword.</div>
  );
}

// alert if Password and confirm password does not match
function ErrorPassrowdCoinfirm(){
  return(
    <div class="alert" role="alert">Password and confirm password does not match.</div>
  );
}

// alert if there is empty input
function EmptyDetails(){
  return(
    <div class="alert" role="alert">There is an empty field. Please enter your details for all fields</div>
  );
}

// alert if the username is in used in the app
function UserNameInUsed(){
  return(
    <div class="alert" role="alert">That username is taken. Please select another username</div>
  );
}

// alert if the username or password or nickname doesnot fit the regex
function WrongPattern(){
  return(
    <div class="alert" role="alert">
      The username or nick name does not fit the pattern. make sure you use only character types of letters or numbers. 
      </div>
  );
}

function Regist({users}) {
  // referrence to input os user
  const usernameInput = useRef();
  const passwordInput = useRef();
  const nickNameInput = useRef();
  const coinfirmPasswordInput = useRef();
  const navigate = useNavigate();

  // state to get an image
  const [selectedFile, setSelectedFile] = useState(null);

  // state to hendle error
  const [errorPassrowdCoinfirm, setErrorPassrowdCoinfirm] = useState("");
  const [errorPassrowd, setErrorPassrowd] = useState("");
  const [nameInUse, setNameInUse] = useState("");
  const [empty, setEmpty] = useState("");
  const [wrongRegex, setWrongRegex] = useState("");

  // that function chak the valid of register
  const checkRegister = function(){
  // inputs into varbiale of 
  let userName = usernameInput.current.value;
  let password = passwordInput.current.value;
  let nickName = nickNameInput.current.value;
  let coinfirmPassword= coinfirmPasswordInput.current.value;

  // alert if there is empty input
  if(userName==="" || password ==="" || nickName === "" || coinfirmPassword === ""){
    setErrorPassrowd("");
    setErrorPassrowdCoinfirm("");
    setWrongRegex("")
    setNameInUse("");
    setEmpty("empty");
    return;
  }

  // alert if the username is in used in the app
  for (let i = 0; i < users.length; i++){
      if (userName === users[i].username){
        setErrorPassrowd("");
        setErrorPassrowdCoinfirm("");
        setWrongRegex("")
        setEmpty("");
        setNameInUse("used");
        return;
      }
  }

  // alert if the username or password or nickname doesnot fit the regex
  var validRegex = /^[a-zA-Z0-9]+$/;
  if(!validRegex.test(userName)||!validRegex.test(nickName)){
    setErrorPassrowd("");
    setEmpty("");
    setErrorPassrowdCoinfirm("");
    setNameInUse("");
    setWrongRegex("wrong pattern");
    return;
  }

  // alert if Password is not contain number, appercase and lowercase
  if(!/\d/g.test(password)||!/[a-z]/g.test(password)||!/[A-Z]/g.test(password)||!validRegex.test(password)||password.length<8){
    setEmpty("");
    setNameInUse("");
    setWrongRegex("");
    setErrorPassrowdCoinfirm("");
    console.log(password)
    return;
  }

  // alert if Password and confirm password does not match
  if(password!==coinfirmPassword){
    setErrorPassrowd("");
    setEmpty("");
    setNameInUse("");
    setWrongRegex("");
    setErrorPassrowdCoinfirm("the password is not eqal to the confirm passraword");
    return;
  }
  var element= {username: userName, password: password, nickname: nickName}
  users.push(element);
  navigate("/chats");
 
}
    return (
    <div className = "container"> 
      <img src="logo1.png" id ="logo" width = "170" height= "170"></img>
      <form id = "register">
        {(errorPassrowdCoinfirm!="")?(<ErrorPassrowdCoinfirm/>):""}
        {(empty!="")?(<EmptyDetails/>):""}
        {(nameInUse!="")?(<UserNameInUsed/>):""}
        {(wrongRegex!="")?(<WrongPattern/>):""}
        {(errorPassrowd!="")?(<ErrorPassrowd/>):""}
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

        <div class="form-group row">
          <label class="col-sm-4 col-form-label"> Upload image </label> 
          <div class="col-sm-8">
          <input type="file" value={selectedFile} onChange={(e) => setSelectedFile(e.target.files[0])}/>
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
      <div class="form-group row">&nbsp;</div>
   </div>);
  }
  
  export default Regist;
  