import React from "react";
import './home.css';
import SignUp from "../../components/signup/signup";
import Login from "../../components/login/login";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Header from "../../components/header/header";

const Home = () => {
    const [view, setView] = React.useState(true);
   
    return (
        <Box className="homeContainer">
            <Header/>
            <Card className="cardContainer">
                <CardActions className="cardHeader">
                    <Button onClick={() => setView(false)} style={{ color: 'brown', fontWeight: 'bold', fontSize: '23px' }}>LOGIN</Button>
                    <Button onClick={() => setView(true)} style={{ color: 'brown', fontWeight: 'bold', fontSize: '23px' }}>SIGNUP</Button>
                </CardActions>
                <CardContent className="cardContent">
                    {
                        view ? <SignUp /> : <Login />
                    }
                </CardContent>
            </Card>
        </Box>
    )

}
export default Home