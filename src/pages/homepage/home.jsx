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
import Heading from '../../assets/heading.jpg';
import { Tab, Tabs } from "@mui/material";
import { Paper } from "@mui/material";
import myImg from '../../assets/my-img.png';
import Blog from "../../components/blog/blog";
import { getAllBlogs } from "../../services/blogservice";
import Grid from '@mui/material/Grid';

const Home = () => {
    const [view, setView] = React.useState(true);
    const [value, setValue] = React.useState(1);
    const [blogs, setBlogs] = React.useState([])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    React.useEffect(() => {
        getBlogs();
    }, [])

    const getBlogs = () => {
        getAllBlogs()
            .then((res) => {
                console.log(res);
                setBlogs(res.data.data)
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <Box className="homeContainer">
            <Header />
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }} className="navBox">
                <Box className="heading">
                    <img src={Heading} alt="err" className="headingImg" />
                </Box>
                <Box className="tabsBox">
                    <Tabs value={value} onChange={handleChange}
                        style={{ 'width': '100%', 'height': '100%'}}>
                        <Tab value={1} label="Home" style={{ color: 'brown', fontSize: '22px', fontWeight: 'bold'}}/>
                        <Tab value={2} label="About" style={{ color: 'brown', fontSize: '22px', fontWeight: 'bold'}}/>
                        <Tab value={3} label="Explore/Create" style={{ color: 'brown', fontSize: '22px', fontWeight: 'bold'}}/>
                    </Tabs>
                </Box>
            </Box>
            {value == 1 ? <Box className="homeBox">
                <Grid container style={{ width: '100%', marginLeft: '10px', marginTop: '10px'}}
                    direction="row"
                    justifyContent="flex-start"
                    spacing={2}
                >
                    {
                        blogs.map((singleBog) => (
                            <Grid item xs={4} className="blogItem">
                                <Blog singleBlog={singleBog} />
                            </Grid>
                        ))

                    }
                </Grid>
            </Box>
                : value == 2 ? <Paper elevation={10} className="aboutBox">
                    <Box className="aboutImg">
                        <img src={myImg} alt="err" style={{ 'width': '100%', 'height': '100%' }} />
                    </Box>
                    <Box className="aboutDetails">
                        <h1 style={{ 'fontSize': '50px', 'color': 'brown' }}>About Me</h1>
                        <h3 style={{ 'fontSize': '30px' }}>Hi my name is Shivangi! </h3>
                        <body>
                            And BlogS is my little corner of the internet!
                            I'm the voice, author, and creator behind BlogS. What started as a casual hobby for nights and weekends while I was working as a developer has now grown into a full-blown business (!!) that reaches millions of people with fun blogs each month.
                            I live in Saint Paul, MN with my husband Bjork and our dog Sage. My favorite things in life are a big plate of pad Thai, sunny days, and going to the dog park.
                        </body>
                    </Box>
                </Paper>
                    : <Box className="loginSignBox">
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
                    </Box>}
        </Box>
    )

}
export default Home