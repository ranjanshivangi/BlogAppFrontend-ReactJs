import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import './blog.css';

const Blog = (props) => {
    return (
        <Box className='blogCardContainer' >
            <Card sx={{ width: '100%', height: '100%' }}>
                <Box className='imgContainer'>
                    <img src={props.singleBlog.image} alt="err" style={{ width: '90%', height: '90%', boxShadow: '5px 5px 5px grey'}} />
                </Box>
                <CardContent >
                    <Typography gutterBottom component="div" style={{ font: 'normal normal bold 20px Roboto' }}>
                        {props.singleBlog.title}
                    </Typography>
                    <Typography color="text.secondary" style={{ font: 'normal normal 18px Roboto' }}>
                    <span className="categoryTag">{props.singleBlog.category}</span>
                    </Typography>
                    <Typography color="text.secondary" style={{ font: 'normal normal 18px Roboto' }}>
                    @{props.singleBlog.userName}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Know More</Button>
                </CardActions>

            </Card>
        </Box>

    );
}
export default Blog
