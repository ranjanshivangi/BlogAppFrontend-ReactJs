import React from "react";
import './login.css';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { userLogin } from "../../services/userservice";
import { EMAIL_REGEX, PASSWORD_REGEX } from '../../constants/regex';
import { useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();

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

    const emailTestRegex = EMAIL_REGEX.test(loginObj.email)
    const passwordTestRegex = PASSWORD_REGEX.test(loginObj.password)

    const handleOnSubmit = () => {
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

        if (emailTestRegex && passwordTestRegex) {
            userLogin(loginObj).then((res) => { 
                console.log(res) 
                const auth = res.headers.authorization
                const token = auth.split(' ')[1]   
                console.log(token);          
                localStorage.setItem('token', token);
                navigate("/dashboard")
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
            <Button className="loginButton" variant="contained" size="large" sx={{ backgroundColor: 'brown', color: 'white' }} onClick={handleOnSubmit}>LOGIN</Button>
        </Box>

    )

}
export default Login;