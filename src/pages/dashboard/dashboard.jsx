import React from "react";
import './dashboard.css';
import Form from "../../components/form/form";
import Blog from "../../components/blog/blog";
import Box from "@mui/material/Box";
import Header from "../../components/header/header";
import { Button } from "@mui/material";
import { Tab, Tabs } from "@mui/material";
import { TabPanel } from "@material-ui/lab";

const Dashboard = () => {
    const [value, setValue] = React.useState('2');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    

    

    return (
        <Box className="dashboardContainer">
            <Header className="header" />
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }} className="navBar">
                <Tabs value={value} onChange={handleChange}>
                    <Tab value={1} label="My Profile" />
                    <Tab value={2} label="All Blogs" />
                    <Tab value={3} label="My Blogs" />
                    <Tab value={4} label="Add Blog" />
                </Tabs>
                <Button className="catButton" variant="contained" size="small" sx={{ backgroundColor: 'brown', color: 'white' }}>Categories</Button>
            </Box>

            <Box className="contentBox">
                <Box className="boxOne">
                    {
                        value == '4' ? <Form /> : value == '3' ? <Box>my</Box> : value == '2' ? <Blog /> : <Box>prof</Box>

                    }</Box>
                <Box className="boxtwo">

                </Box>
            </Box>

        </Box >
    )

}
export default Dashboard