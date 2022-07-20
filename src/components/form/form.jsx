import React from "react";
import './form.css';
import { Box, Paper } from "@mui/material";
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import RichTextEditor from "../richtexteditor/richtexteditor";

const Form = () => {
    const [file, setFile] = React.useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    const config = {
        buttons: ["bold", "italic", "link", "unlink", "underline", "source"],
      };

    return (
        <Paper elevation={10} className="formContainer">
            <TextField id="standard-basic" label="Title" variant="standard" size="large" className="formInputs" />
            <TextField id="standard-basic" label="Category" variant="standard" className="formInputs" />
            {/* <TextField id="standard-basic" label="ImageUrl" variant="standard" className="formInputs" /> */}
            <Box className="formInputs">Image Upload
            <input type="file"value={file} onChange={handleChange} />
            <img src={file}/></Box>
            <Button>UPLOAD</Button>
            <Box  className="formInputs"><RichTextEditor config={config}/></Box>            
            <Button className="submitButton" variant="contained" size="large" sx={{ backgroundColor: 'brown', color: 'white' }}>SUBMIT</Button>

        </Paper>
    )
}

export default Form