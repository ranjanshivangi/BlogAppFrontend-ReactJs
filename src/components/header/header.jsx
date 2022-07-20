import React from "react";
import './header.css';
import { Box } from "@mui/material";
import BlogImg from '../../assets/blog.png'

const Header = () => {
    return (
        <Box className="headerBox">
            <img src={BlogImg} alt="err" className="headerImg" />
        </Box>
    )
}
export default Header