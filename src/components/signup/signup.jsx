import {EMAIL_REGEX, PASSWORD_REGEX, USERNAME_REGEX, FULLNAME_REGEX} from '../../constants/regex'
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { userSignup } from '../../services/userservice';
import React from 'react';
import './signup.css';

const SignUp = () => {
    const [fullNameErr, setFullNameErr] = React.useState(false);
    const [fullNameHelper, setFullNameHelper] = React.useState('');

    const [nameErr, setnameErr] = React.useState(false);
    const [nameHelper, setnameHelper] = React.useState('');

    const [emailErr, setemailErr] = React.useState(false);
    const [emailHelper, setemailHelper] = React.useState('');

    const [passwordErr, setpasswordErr] = React.useState(false);
    const [passwordHelper, setpasswordHelper] = React.useState('');

    const [signupObj, setsignupObj] = React.useState({fullName: '', userName: '', email: '', password: '' });

    const takeFullName = (event) => {
        setsignupObj({ ...signupObj, fullName: event.target.value })
    }

    const takeName = (event) => {
        setsignupObj({ ...signupObj, userName: event.target.value })
    }
    const takeEmail = (event) => {
        setsignupObj({ ...signupObj, email: event.target.value })
    }
    const takePassword = (event) => {
        setsignupObj({ ...signupObj, password: event.target.value })
    }

    const fullNameTestRegex = FULLNAME_REGEX.test(signupObj.fullName)
    const nameTestRegex = USERNAME_REGEX.test(signupObj.userName)
    const emailTestRegex = EMAIL_REGEX.test(signupObj.email)
    const passwordTestRegex = PASSWORD_REGEX.test(signupObj.password)

    const handleOnSubmit = () => {
        if (fullNameTestRegex) {
            setFullNameErr(false);
            setFullNameHelper('')
        }
        else {
            setFullNameErr(true);
            setFullNameHelper("Enter correct email")
        }
        if (nameTestRegex) {
            setnameErr(false);
            setnameHelper('')
        }
        else {
            setnameErr(true);
            setnameHelper("Enter correct email")
        }
        if (emailTestRegex) {
            setemailErr(false);
            setemailHelper('')
        }
        else {
            setemailErr(true);
            setemailHelper("Enter correct email")
        }

        if (passwordTestRegex) {
            setpasswordErr(false);
            setpasswordHelper('')
        }

        else {
            setpasswordErr(true);
            setpasswordHelper("Enter correct password")
        }

        if(fullNameTestRegex && nameTestRegex && emailTestRegex && passwordTestRegex){
            userSignup(signupObj).then((res)=>{
                console.log(res);
            })
            .catch((error)=>{
                console.log(error);
            })
        }
    }

    return (
        <Box className='signupContainer'> 
        <TextField className="signupTextfield" id="outlined-basic" label="Full Name" variant="outlined" size="medium" error={fullNameErr} helperText={fullNameHelper} onChange={takeFullName} />           
            <TextField className="signupTextfield" id="outlined-basic" label="Username" variant="outlined" size="medium" error={nameErr} helperText={nameHelper} onChange={takeName} />
            <TextField className="signupTextfield" id="outlined-basic" label="email" variant="outlined" size="medium" error={emailErr} helperText={emailHelper} onChange={takeEmail} />
            <TextField className="signupTextfield" id="outlined-password-input" label="Password" type="password" autoComplete="current-password" error={passwordErr} helperText={passwordHelper} onChange={takePassword} />
            <Button className="signupButton" variant="contained" size="large" sx={{ backgroundColor: 'brown', color: 'white' }} onClick={handleOnSubmit}>SIGNUP</Button>
        </Box>

    )

}
export default SignUp;
