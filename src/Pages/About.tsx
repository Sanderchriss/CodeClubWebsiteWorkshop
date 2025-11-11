import { Typography, Paper, Box } from '@mui/material';
import {Shell32135} from "@react95/icons";

export default function About() {
    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold'}}>
                About Us
            </Typography>
            <Shell32135/>
            <Paper
                sx={{
                    padding: '20px',
                    backgroundColor: 'background.paper',
                    border: '1px solid #808080',
                    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
                }}
            >
                <Typography variant="body1" paragraph>
                    C1pher Inc. was founded in 1991 by a group of visionaries who believed that 640KB of RAM ought to be
                    enough for anybody. Our first office was a garage (because that’s where all tech startups begin,
                    right?), and our first server was a Commodore 64 running on pure ambition and Mountain Dew.
                </Typography>
                <Typography variant="body1" paragraph>
                    Founded in 1991, we specialise in creating a personalised website for your business. Our team is
                    passionate about blending high quality user experience with cutting-edge technology.
                </Typography>
                <Typography variant="body1" paragraph>
                    Whether you're looking for a nostalgic website, a retro-themed app, or just want to relive the glory
                    days of dial-up internet, we've got you covered.
                </Typography>
            </Paper>

        </Box>

    );
}
