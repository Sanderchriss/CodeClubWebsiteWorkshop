// src/Pages/Projects.tsx
import { Typography, Box, Card, CardContent, CardMedia, Container } from '@mui/material';

export default function Projects() {
    return (
        <Box>
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography variant="h2" gutterBottom sx={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 'bold', mb: 3, color: '#1C1C1C' }}>
                    OUR PROJECTS
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: '#1C1C1C' }}>
                    At C3, we turn ideas into reality. Here are some of the projects our members have worked on:
                </Typography>

                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 3, mt: 2 }}>
                    <Card sx={{ backgroundColor: '#EEEEEE', borderTop: '4px solid #FF0031' }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image="/WebPromo.jpeg"
                            alt="Startup Weekend"
                        />
                        <CardContent>
                            <Typography variant="h5" gutterBottom sx={{ fontFamily: '"IBM Plex Mono", monospace', color: '#1C1C1C' }}>
                                Website Workshop
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#1C1C1C' }}>
                                A 4 workshop/ hackathon where students from all disciplines collaborate to build a website from scratch.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ backgroundColor: '#EEEEEE', borderTop: '4px solid #FF0031' }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image="/GitPromo.jpeg"
                            alt="Campus App"
                        />
                        <CardContent>
                            <Typography variant="h5" gutterBottom sx={{ fontFamily: '"IBM Plex Mono", monospace', color: '#1C1C1C' }}>
                                Git Beginner's course
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#1C1C1C' }}>
                                An interactive Git and Github beginner's course, focused on setting up and using Git for version control.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </Box>
    );
}
