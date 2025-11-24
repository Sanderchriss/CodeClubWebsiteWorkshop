// src/components/Footer.tsx
import { Box, Typography, Container, Link, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <Box sx={{ backgroundColor: '#1C1C1C', color: '#EEEEEE', py: 4 }}>
            <Container maxWidth="lg">
                {/* Club Name and Tagline */}
                <Typography variant="h6" gutterBottom sx={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 'bold' }}>
                    CBS CODE CLUB
                </Typography>
                <Typography variant="body2" paragraph>
                    Bridging technology and business, one project at a time.
                </Typography>

                {/* Social Media Buttons */}
                <Box sx={{ display: 'flex', gap: 1, my: 2 }}>
                    <IconButton
                        aria-label="Instagram"
                        component={Link}
                        href="https://www.instagram.com/cbscodeclub/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: '#EEEEEE', '&:hover': { color: '#FF0031' } }}
                    >
                        <InstagramIcon fontSize="large" />
                    </IconButton>
                    <IconButton
                        aria-label="LinkedIn"
                        component={Link}
                        href="https://www.linkedin.com/company/cbs-code-club/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: '#EEEEEE', '&:hover': { color: '#FF0031' } }}
                    >
                        <LinkedInIcon fontSize="large" />
                    </IconButton>
                </Box>

                {/* Quick Links */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, my: 2 }}>
                    <Link href="/" color="inherit" underline="hover" sx={{ fontFamily: '"IBM Plex Mono", monospace' }}>
                        Home
                    </Link>
                    <Link href="/about" color="inherit" underline="hover" sx={{ fontFamily: '"IBM Plex Mono", monospace' }}>
                        About
                    </Link>
                    <Link href="/projects" color="inherit" underline="hover" sx={{ fontFamily: '"IBM Plex Mono", monospace' }}>
                        Projects
                    </Link>
                    <Link href="/join" color="inherit" underline="hover" sx={{ fontFamily: '"IBM Plex Mono", monospace' }}>
                        Join Us
                    </Link>
                    <Link href="/contact" color="inherit" underline="hover" sx={{ fontFamily: '"IBM Plex Mono", monospace' }}>
                        Contact
                    </Link>
                </Box>

                {/* Contact Information */}
                <Typography variant="body2" paragraph>
                    Email: <Link href="mailto:cbscodeclub@cbsstudents.dk" color="inherit">cbscodeclub@cbsstudents.dk</Link>
                </Typography>

                {/* Copyright */}
                <Box sx={{ borderTop: '1px solid #FF0031', pt: 2, mt: 2 }}>
                    <Typography variant="body2">
                        © 2025 CBS Code Club. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
