import React from "react";
import './profilepage.css';
import Box from "@mui/material/Box";
import Header from "../../components/header/header";
import Profile from "../../components/profile/profile";

const ProfilePage = () => {
    return (
        <Box className="profilePageContainer">
            <Header />
            <Box className="profilePageBox">
                <Profile />
            </Box>
        </Box>
    )
}
export default ProfilePage