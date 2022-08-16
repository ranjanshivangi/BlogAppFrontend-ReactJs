import React from "react";
import './form.css';
import { Box, Paper } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { postBlog } from "../../services/blogservice";

const Form = () => {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [file, setFile] = React.useState();

    const formData = new FormData();

    function handleTitle(event) {
        setTitle(event.target.value)

    }
    function handleDescription(event) {
        setDescription(event.target.value)

    }
    function handleCategory(event) {
        setCategory(event.target.value)

    }
    function handleChange(e) {
        console.log(URL.createObjectURL(e.target.files[0]));
        console.log((e.target.files[0]));
        setFile(e.target.files[0]);
    }
    function handleSubmit(event) {
        const data = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('image', file);
        console.log(formData)
        postBlog(formData).then((res) => {
            console.log(res);
        })
            .catch((error) => {
                console.log(error);
            })

    }
   
    return (
        <Paper elevation={10} className="formContainer">
            <TextField id="standard-basic" label="Title" variant="standard" size="large" className="formInputs" onChange={handleTitle} />
            <TextField id="standard-basic" label="Category" variant="standard" className="formInputs" onChange={handleCategory} />
            <Box className="formInputs">Image Upload

                <button onClick={() => setFile(null)}>Remove</button>
                <input type="file" name="image" onChange={handleChange} />
                <img src={file} alt="" width={"250px"} />

            </Box>
            <Button>UPLOAD</Button>          
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={20}
                    placeholder="Description"
                    onChange={handleDescription}
                    className = "formInputs"/>           
            <Button className="submitButton" variant="contained" size="large" sx={{ backgroundColor: 'brown', color: 'white' }} onClick={handleSubmit}>SUBMIT</Button>
        </Paper>
    )
}
export default Form;