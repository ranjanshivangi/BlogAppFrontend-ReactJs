import React from "react";
import './login.css';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { userLogin } from "../../services/userservice";

const Login = () => {
    const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

    const [emailErr, setemailErr] = React.useState(false);
    const [emailHelper, setemailHelper] = React.useState('');

    const [passwordErr, setpasswordErr] = React.useState(false);
    const [passwordHelper, setpasswordHelper] = React.useState('');

    const [loginObj, setsignupObj] = React.useState({ email: '', password: '' });

    const takeEmail = (event) => {
        setsignupObj({ ...loginObj, email: event.target.value })
    }
    const takePassword = (event) => {
        setsignupObj({ ...loginObj, password: event.target.value })
    }

    const emailTestRegex = emailRegex.test(loginObj.email)
    const passwordTestRegex = passwordRegex.test(loginObj.password)

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

        if (emailTestRegex == true && passwordTestRegex == true) {
            userLogin(loginObj).then((res) => {
                console.log(res);
                localStorage.setItem('token', res.data.data.token);
            })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

    return (
        <Box className='loginContainer'>
            <TextField className="loginTextfield" id="outlined-basic" label="email" variant="outlined" size="medium" error={emailErr} helperText={emailHelper} onChange={takeEmail} />
            <TextField className="loginTextfield" id="outlined-password-input" label="Password" type="password" autoComplete="current-password" error={passwordErr} helperText={passwordHelper} onChange={takePassword} />
            <Button className="loginButton" variant="contained" sx={{ backgroundColor: 'gray', color: 'white' }} onClick={handleOnSubmit}>LOGIN</Button>
        </Box>

    )

}
export default Login;