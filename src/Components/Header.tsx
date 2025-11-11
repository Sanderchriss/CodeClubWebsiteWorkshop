// src/components/Header.tsx
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import {ClippyProvider, useClippy} from "@react95/clippy";

const MyComponent = () => {
    const { clippy } = useClippy();
    const handleClick = () => {
        if (clippy) {
            clippy.play('Wave');
        }
    };
    return <Button onClick={handleClick}>Hello Clippy!</Button>;
};
export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar sx={{ justifyContent: 'space-between' }}>

                    <img src = "oldComp.png"/>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        C1pher Incorporated
                    </Typography>

                <Box>
                    <ClippyProvider>
                        <MyComponent />
                    </ClippyProvider>
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/about">
                        About
                    </Button>
                    <Button color="inherit" component={Link} to="/services">
                        Services
                    </Button>
                    <Button color="inherit" component={Link} to="/contact">
                        Contact
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
