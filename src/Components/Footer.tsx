// src/components/Footer.tsx
import { Box, Typography, Button } from '@mui/material';

export default function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                padding: '10px',
                textAlign: 'center',
                borderTop: '2px solid #FFFFFF',
            }}
        >
            <Typography variant="body2">
                © 1991-2025 C1pher Incorporated. All rights reserved.
            </Typography>
            <Typography variant="body2">
                Designed for Windows 95 | Made with nostalgia
            </Typography>
            <Box mt={1}>
                <Button
                    variant="outlined"
                    sx={{
                        color: 'white',
                        borderColor: 'white',
                        margin: '0 5px',
                        fontSize: '12px',
                    }}
                    href="https://www.instagram.com/cbscodeclub/"
                >
                    Instagram
                </Button>
                <Button
                    variant="outlined"
                    sx={{
                        color: 'white',
                        borderColor: 'white',
                        margin: '0 5px',
                        fontSize: '12px',
                    }}
                    href="https://www.linkedin.com/company/cbs-code-club/"
                >
                    Linkedin
                </Button>
            </Box>
            <img src="bebe.gif"/>
        </Box>

    );
}
