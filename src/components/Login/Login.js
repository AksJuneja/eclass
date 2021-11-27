import { Button, FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from "@material-ui/core";
import React from "react";
import logo from "../../assets/logo.jpg";
import logo2 from "../../assets/logo2.PNG";
import { useLocalContext } from "../../context/context";
import "./style.css";




const Login = () => {
  
  const { login, loggedInUser, isTeacher, setIsTeacher } = useLocalContext();

  console.log(loggedInUser);
  return (
    <div className="body">
    <div className="login">
      {/* <img className="login__logo" src={logo} alt="Classroom" /> */}
     
      <div className="login_2">
       <img className="login__logo2" src={logo2} alt="Classroom" />
       <FormControl component="fieldset" >
         <FormLabel className="loginas" color="default"><b>Login As</b> </FormLabel>
         <RadioGroup aria-label="role" name="radio-buttons-group" >
          <FormControlLabel value="Teacher" control={<Radio/>} label="Teacher" onChange={()=>{setIsTeacher(true)}}/>
          <FormControlLabel value="Student" control={<Radio/>} label="Student" onChange={()=>{setIsTeacher(false)}}/>
         </RadioGroup>
       </FormControl>
      <Button variant="contained" color="default" onClick={() => login()}>
        Login Now!
      </Button>
      </div>
    </div>
    </div>

  );
};

export default Login;