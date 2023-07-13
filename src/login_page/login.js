import React, { useState } from 'react'
import "./style.css"
import image from "./image.jpg"
import arrow from "./arrow-left.png"
import google from "./google1.png"
import linkedin from "./linkedin.png"
import mailLogo from "./mail-logo.png"
import myLogo from "./my-logo.png"
import passLogo from "./pass-logo.png"

const Login = () => {
 
const[formValue,setFormValue]=useState({email:"", password:""})
const handleInput=(e)=>{
  const{name,value}=e.target;
  setFormValue({...formValue,[name]:value});
  // console.log(formValue);
}
const handleFormSubmit=(e)=>{
  e.preventDefault();
  // console.log(formValue)
  fetch("https://be-infollion.vercel.app/api/v1/users/login",{
    method: "POST",
   headers: {},
    body:'{"username":"roope.sh@simplifii.com","password":"12341a7899A@"}'
  }).then(res=>res.json()).then(res=>{
    console.log(res)
  })


}
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [allEntries, setAllEntries] = useState([]);
  // const submitForm = (e) => {
  //   e.preventDefault(); //to prevent page refreshing
  //   const newEntry = {
  //     email: email,
  //     password: password
  //   };
  //   setAllEntries([...allEntries, newEntry]);
  //   console.log(allEntries);
  // }



  return (
    <>

      <div className="main">
        <div className="left">
          <a className="link" href="#">Back to website</a>
          <a href="#"><img className="img2" src={arrow} alt="arrow" /></a>
          <img className="img1" src={image} alt="image" />

        </div>
        <div className="right">

          <img className="img3" src={myLogo} alt="logo" />
          <div className="myDiv">
            <p className="para">Login to Dashboard</p>
            <div className="inputdiv"><img className="inputLogo1" src={passLogo} alt="logo" /><img className="inputLogo2" src={mailLogo} alt="logo" />
              <form onSubmit={handleFormSubmit} method="post" >
                <input className="input" type="text" placeholder="Email/Username" name="email" autoComplete='off' value={formValue.email} onChange={handleInput} required/>
                <input className="input" type="password" placeholder="Password" name="password" autoComplete='off' value={formValue.password} onChange={handleInput} required /><p className="forgot">Forgot?</p><button  className="buttons1" type="submit">Log in</button></form></div>
            <div className="login"><p className="para2">OR</p><button className="buttons2" >Log in with OTP</button><p className="para3">Or Log in with</p></div>
            <div className="signin"><a href="#"><img className="signimg1" src={google} alt="google sign in" /></a><a href="#"><img className="signimg2" src={linkedin} alt="linkedin login" /></a></div>
          </div></div></div>
    </>
  )
}

export default Login;