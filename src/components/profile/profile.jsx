import * as React from 'react';
import './profile.css'
import ProfileAvator from '../avatar/profileavator';
import { Box, Paper } from '@mui/material';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Profile = () => {
    return (
        <Paper elevation={10} className='profileContainer'>
            <Box>
                <Box className='avatorBox'>
                    <ProfileAvator />
                </Box>
                <h1>Shivangi Ranjan</h1>
                <Link
                    component="button"
                    variant="body2"
                >Edit Profile
                </Link>
            </Box>
            <Box>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="body2">
                            Tell the world about yourself
                            Here’s where you can share more about yourself: your history, work experience, accomplishments, interests, dreams, and more. You can even add images and use rich text to personalize your bio.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Get Started</Button>
                    </CardActions>
                </Card>
            </Box>
            <Button className="logoutButton" variant="contained" size="small" sx={{ backgroundColor: 'brown', color: 'white' }}>Logout</Button>
        </Paper>
    )
}
export default Profile