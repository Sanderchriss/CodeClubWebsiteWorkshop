import { Typography, Paper, Box, Button } from '@mui/material';

export default function Home() {
    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                Welcome to C1pher Incorporated
            </Typography>
            <Paper
                sx={{
                    padding: '20px',
                    backgroundColor: 'background.paper',
                    border: '1px solid #808080',
                    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
                }}
            >
                <Typography variant="body1" paragraph>
                    At C1pher Inc., we don’t just ride the Information Superhighway - we paved it. Since 1991, we’ve been pushing the boundaries of technology with our cutting-edge 14.4K modems, revolutionary 16-bit software, and groundbreaking 256-color graphics.
                </Typography>
                <img src="ofiice.jpeg"/>
                <br/>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        border: '1px solid #808080',
                        '&:hover': {
                            backgroundColor: '#000080',
                        },
                    }}
                    href="/about"
                >
                    Learn More
                </Button>
            </Paper>
        </Box>
    );
}
