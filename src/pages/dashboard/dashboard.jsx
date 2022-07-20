import React from "react";
import './dashboard.css';
import Form from "../../components/form/form";
import Blog from "../../components/blog/blog";
import Box from "@mui/material/Box";
import Header from "../../components/header/header";
import { Button } from "@mui/material";
import { Tab, Tabs } from "@mui/material";
import AccountMenu from "../../components/menu/menu";

const Dashboard = () => {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className="dashboardContainer">
            <Header />
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }} className="navBar">
                <Box className="dashAvator"><AccountMenu /></Box>
                <Tabs value={value} onChange={handleChange}>
                    <Tab value={1} label="All Blogs" />
                    <Tab value={2} label="My Blogs" />
                    <Tab value={3} label="Add Blog" />
                </Tabs>
                <Button className="catButton" variant="contained" size="small" sx={{ backgroundColor: 'brown', color: 'white' }}>Categories</Button>
            </Box>

            <Box className="contentBox">
                <Box className="boxOne">
                    {
                        value == '3' ? <Form /> : value == '2' ? <Box>my</Box> : <Blog />

                    }</Box>
                <Box className="boxtwo">
                </Box>
            </Box>
        </Box >
    )}
export default Dashboard