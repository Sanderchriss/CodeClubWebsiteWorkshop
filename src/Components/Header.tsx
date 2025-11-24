// src/components/Header.tsx
import {AppBar, Toolbar, Button, Typography, Container, Box} from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <AppBar position="static" color="primary">
            <Container maxWidth="lg">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <img src="/C3Logo.png" alt="CBS Logo" width={100} height={100}/>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                        CBS Code Club
                    </Typography>
                    <Box>
                        <Button color="inherit" component={Link} to="/">
                            Home
                        </Button>
                        <Button color="inherit" component={Link} to="/about">
                            About
                        </Button>
                        <Button color="inherit" component={Link} to="/projects">
                            Projects
                        </Button>
                        <Button color="inherit" component={Link} to="/join">
                            Join Us
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
