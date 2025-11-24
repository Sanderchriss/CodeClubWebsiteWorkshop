// src/Pages/Home.tsx
import { Typography, Button, Box, Card, CardContent, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <Box>
            <Box sx={{ backgroundColor: '#1C1C1C', color: '#EEEEEE', py: 8, textAlign: 'center' }}>
                <Container maxWidth="lg">
                    <Typography variant="h2" gutterBottom sx={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 'bold' }}>
                        BRIDGING CODING & BUSINESS
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ maxWidth: 600, mx: 'auto' }}>
                        Welcome to CBS Code Club, where technology meets business. Join us to collaborate, innovate, and build the future.
                    </Typography>
                    <Button
                        variant="contained"
                        component={Link}
                        to="/join"
                        sx={{
                            backgroundColor: '#FF0031',
                            color: '#FFFFFF',
                            mt: 2,
                            '&:hover': {
                                backgroundColor: '#FF4C4C',
                            },
                        }}
                    >
                        Join the Club
                    </Button>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 'bold', mb: 4, color: '#1C1C1C' }}>
                    WHAT WE OFFER
                </Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 3 }}>
                    <Card sx={{ backgroundColor: '#EEEEEE', borderTop: '4px solid #FF0031' }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom sx={{ fontFamily: '"IBM Plex Mono", monospace', color: '#1C1C1C' }}>
                                Hands-On Projects
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#1C1C1C' }}>
                                Work on real-world projects with cross-functional teams.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ backgroundColor: '#EEEEEE', borderTop: '4px solid #FF0031' }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom sx={{ fontFamily: '"IBM Plex Mono", monospace', color: '#1C1C1C' }}>
                                Workshops & Events
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#1C1C1C' }}>
                                Learn from industry experts and participate in networking events.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ backgroundColor: '#EEEEEE', borderTop: '4px solid #FF0031' }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom sx={{ fontFamily: '"IBM Plex Mono", monospace', color: '#1C1C1C' }}>
                                Mentorship & Networking
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#1C1C1C' }}>
                                Connect with alumni, professionals, and peers.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </Box>
    );
}
