import React from "react";
import './form.css';
import { Box, Paper } from "@mui/material";
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";

const Form = () => {
    return (
        <Paper elevation={10} className="formContainer">
            <TextField id="standard-basic" label="Title" variant="standard" size="large" className="formInputs" />
            <TextField id="standard-basic" label="Category" variant="standard" className="formInputs" />
            <TextField id="standard-basic" label="ImageUrl" variant="standard" className="formInputs" />
            <TextField
                id="standard-textarea"
                label="Description"
                placeholder="Description"
                multiline
                variant="standard"
                className="formDesInputs" />            
            <Button className="submitButton" variant="contained" size="large" sx={{ backgroundColor: 'brown', color: 'white' }}>SUBMIT</Button>

        </Paper>
    )
}

export default Form