import React from "react";
import './dashboard.css';
import Form from "../../components/form/form";
import Blog from "../../components/blog/blog";
import Box from "@mui/material/Box";
import Heading from '../../assets/heading.jpg';
import { Button, Tab, Tabs } from "@mui/material";
import AccountMenu from "../../components/menu/menu";
import Profile from "../../components/profile/profile";
import { getAllBlogs, getMyBlogs } from "../../services/blogservice";
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';

const Dashboard = () => {
    const [search, setSearch] = React.useState('')
    const [blogs, setBlogs] = React.useState([])
    const [myBlogs, setMyBlogs] = React.useState([])
    const [value, setValue] = React.useState(1);

    React.useEffect(() => {
        getBlogs()
    }, [search], [blogs])

    React.useEffect(() => {
        getOnyMyBlogs()
    }, [search], [blogs])

    const handleSearch = (event) => {
        setSearch(event.target.value)
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleMyProfile = () => {
        setValue(4)
    };
    const getBlogs = () => {
        getAllBlogs()
            .then((res) => {
                console.log(res);
                if (search) {
                    let result = res.data.data.filter(blog => blog.title.toLowerCase().includes(search.toLowerCase()));
                    setBlogs(result)
                } else {
                    setBlogs(res.data.data)
                }
            }).catch((err) => {
                console.log(err);
            })
    };
    const getOnyMyBlogs = () => {
        getMyBlogs()
            .then((res) => {
                console.log(res);
                if (search) {
                    let result = res.data.data.filter(blog => blog.title.toLowerCase().includes(search.toLowerCase()));
                    setMyBlogs(result)
                } else {
                    setMyBlogs(res.data.data)
                }
            }).catch((err) => {
                console.log(err);
            })
    };

    const handleCategory = (value) => {
        if (value != 'All'){
            const filterItem = blogs.filter((blog) => {
                return blog.category === value
            })
        setBlogs(filterItem)
        }    
    };

    return (
        <Box className="dashboardContainer">
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }} className="navBar">
                <Box className="heading">
                    <img src={Heading} alt="err" className="headingImg" />
                </Box>
                <Box className="searchBox">
                    <button type="submit" className='searchButton'>
                        <SearchIcon htmlColor="grey" />
                    </button>
                    <input type="text" class='searchField' placeholder="Search" onChange={handleSearch} />
                </Box>
                <Box className="dashboardTabsBox" >
                    <Tabs value={value} onChange={handleChange}>
                        <Tab value={1} label="Home" style={{ color: 'brown', fontSize: '20px', fontWeight: 'bold' }} />
                        <Tab value={2} label="My Blogs" style={{ color: 'brown', fontSize: '20px', fontWeight: 'bold' }} />
                        <Tab value={3} label="Add Blog" style={{ color: 'brown', fontSize: '20px', fontWeight: 'bold' }} />
                    </Tabs>
                </Box>
                <Box className="profileBox">
                    <Box className="dashAvator"><AccountMenu handleMyProfile={handleMyProfile} /></Box>
                </Box>

            </Box>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }} className="categoryBar">
                <Box className="categoryBox">CATEGORY</Box>
                <Button variant="text" size="large" sx={{ color: 'brown' }} onClick={() => handleCategory('All')}>All</Button>
                <Button variant="text" size="large" sx={{ color: 'brown' }} onClick={() => handleCategory('Food')}>Food</Button>
                <Button variant="text" size="large" sx={{ color: 'brown' }} onClick={() => handleCategory('Motivational')}>Motivational</Button>
                <Button variant="text" size="large" sx={{ color: 'brown' }} onClick={() => handleCategory('Fashion')}>Fashion</Button>
                <Button variant="text" size="large" sx={{ color: 'brown' }} onClick={() => handleCategory('Sports')}>Sports</Button>
                <Button variant="text" size="large" sx={{ color: 'brown' }} onClick={() => handleCategory('Technology')}>Technology</Button>
            </Box>
            {
                value == 1 ? <Box className="homeBox">
                    <Grid container style={{ width: '100%', marginLeft: '10px', marginTop: '10px' }}
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
                    : value == 2 ? <Box className="homeBox">
                        <Grid container style={{ width: '100%', marginLeft: '10px', marginTop: '10px' }}
                            direction="row"
                            justifyContent="flex-start"
                            spacing={2}
                        >
                            {
                                myBlogs.map((singleBog) => (
                                    <Grid item xs={4} className="blogItem">
                                        <Blog singleBlog={singleBog} />
                                    </Grid>
                                ))

                            }
                        </Grid>

                    </Box>
                        : value == 3 ? <Form />
                            : <Profile />
            }

        </Box >
    )
}
export default Dashboard