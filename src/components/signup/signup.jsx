
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { userSignup } from '../../services/userservice';
import React from 'react';
import './signup.css';

const SignUp = () => {
    const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

    const [emailErr, setemailErr] = React.useState(false);
    const [emailHelper, setemailHelper] = React.useState('');

    const [passwordErr, setpasswordErr] = React.useState(false);
    const [passwordHelper, setpasswordHelper] = React.useState('');

    const [signupObj, setsignupObj] = React.useState({ userName: '', email: '', password: '' });

    const takeName = (event) => {
        setsignupObj({ ...signupObj, userName: event.target.value })
    }
    const takeEmail = (event) => {
        setsignupObj({ ...signupObj, email: event.target.value })
    }
    const takePassword = (event) => {
        setsignupObj({ ...signupObj, password: event.target.value })
    }

    const emailTestRegex = emailRegex.test(signupObj.email)
    const passwordTestRegex = passwordRegex.test(signupObj.password)

    const handleOnSubmit = () => {
        if (emailTestRegex === true) {
            setemailErr(false);
            setemailHelper('')
        }
        else {
            setemailErr(true);
            setemailHelper("Enter correct email")
        }

        if (passwordTestRegex === true) {
            setpasswordErr(false);
            setpasswordHelper('')
        }

        else {
            setpasswordErr(true);
            setpasswordHelper("Enter correct password")
        }

        if(emailTestRegex==true && passwordTestRegex==true){
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
            <TextField className="signupTextfield" id="outlined-basic" label="Username" variant="outlined" size="medium" onChange={takeName} />
            <TextField className="signupTextfield" id="outlined-basic" label="email" variant="outlined" size="medium" error={emailErr} helperText={emailHelper} onChange={takeEmail} />
            <TextField className="signupTextfield" id="outlined-password-input" label="Password" type="password" autoComplete="current-password" error={passwordErr} helperText={passwordHelper} onChange={takePassword} />
            <Button className="signupButton" variant="contained" sx={{ backgroundColor: 'gray', color: 'white' }} onClick={handleOnSubmit}>SIGNUP</Button>
        </Box>

    )

}
export default SignUp;
