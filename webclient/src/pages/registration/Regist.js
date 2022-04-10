import React from 'react';
import ReactDOM from 'react-dom';
import './Regist.css';
import { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';

// alert if Password is not contain number, appercase and lowercase
function ErrorPassrowd(){
  return(
    <div className="alert" role="alert">Passwords has at least 8 characters that include at least 1 lowercase character, 1 uppercase character and 1 number. &nbsp;All the other characters are not allowed to use in the password.</div>
  );
}

// alert if Password and confirm password does not match
function ErrorPassrowdCoinfirm(){
  return(
    <div className="alert" role="alert">The confirm password does not match the password.</div>
  );
}

// alert if there is empty input
function EmptyDetails(){
  return(
    <div className="alert " role="alert">There is an empty field. Please enter your details into all the fields.</div>
  );
}

// alert if the username is in used in the app
function UserNameInUsed(){
  return(
    <div className="alert" role="alert">That username is taken. Please select another username</div>
  );
}

// alert if the username or password or nickname doesnot fit the regex
function WrongPattern(){
  return(
    <div className="alert" role="alert">
      The username or nick name does not fit the pattern. Make sure you use only the character types of letters or numbers. 
      </div>
  );
}

function Regist({users}) {
  // referrence to input os user
  const usernameInput = useRef();
  const passwordInput = useRef();
  const nickNameInput = useRef();
  const coinfirmPasswordInput = useRef();
  const imgOfUser = useRef();
  const navigate = useNavigate();

  // state to get an image
  const [selectedFile, setSelectedFile] = useState("");

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
    setErrorPassrowd("error in password")
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
  const element= {username: userName, password: password, nickname: nickName, image: imgOfUser.current.value, friends: null}
  users.push(element);
  navigate("/chats",{ state: { element } });
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
        <div className="form-group row">
          <label className="col-sm-4 col-form-label"> Username </label>
          <div className="col-sm-8">
            <input type="text" placeholder="Enter Username" id="uname" name="uname" ref={usernameInput}></input>
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-4 col-form-label"> Nick name </label>
          <div className="col-sm-8">
            <input type="text" placeholder="Enter Nick name" id="nickname" name="uname" ref={nickNameInput}></input>
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-4 col-form-label"> Password </label> 
          <div className="col-sm-8">
            <input type="password" placeholder="Enter Password" id="password" name="password" ref={passwordInput}></input>
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-4 col-form-label"> Confirm password </label> 
          <div className="col-sm-8">
            <input type="password" placeholder="Confirm password" id="confirmpassword" name="password" ref={coinfirmPasswordInput} ></input>
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-4 col-form-label"> Upload image </label> 
          <div className="col-sm-8">
            <label for="img" id="btnimag">Select image</label>
            <input type="file" id="img" accept="image/png, image/jpeg" ref={imgOfUser}/>
          </div>
        </div>
        
        <div>
          <button type="button" className="btn btn-success" onClick={checkRegister}>Register</button>
        </div>
        
        <div>
          <label> Already registred?&nbsp; </label>
          <a href="/">Click here</a>
          <label>&nbsp;to login </label> 
        </div>
      </form>
      <div className="form-group row" id="last div">&nbsp;</div>
   </div>);
  }
  
  export default Regist;
  