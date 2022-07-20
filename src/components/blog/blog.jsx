import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import './blog.css';

const Blog = () => {
    return (
        <Box className='cardContainer' >
            <Card sx={{ width: '100%', height: '100%' }}>
                <Box className='imgContainer'>
                    <img src="" alt="err" style={{ width: '100%', height: '100%' }} />
                </Box>
                <CardContent >
                    <Typography gutterBottom component="div" style={{ font: 'normal normal bold 18px Roboto' }}>
                        The Best Pizza
                    </Typography>
                    <Typography color="text.secondary" style={{ font: 'normal normal 14px Roboto' }}>
                        by shiviRanjan
                    </Typography>
                    <Typography color="text.secondary" style={{ font: 'normal normal 14px Roboto' }}>
                        Food
                    </Typography>
                    <Typography gutterBottom component="div" style={{ font: 'normal normal bold 16px Roboto' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sapiente adipisci debitis cupiditate ab accusantium maiores nemo nam ducimus repudiandae, vitae necessitatibus temporibus sequi doloremque eius. Beatae qui culpa consequuntur.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>

            </Card>
        </Box>

    );
}
export default Blog
