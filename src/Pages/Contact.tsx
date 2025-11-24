// src/Pages/Join.tsx
import { Typography, Button, Box, TextField, Card, CardContent, Container } from '@mui/material';

export default function Join() {
    return (
        <Box>
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography variant="h2" gutterBottom sx={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 'bold', mb: 3, color: '#1C1C1C' }}>
                    JOIN THE CLUB
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: '#1C1C1C' }}>
                    Whether you’re a coder, a business student, or just curious about tech, we’d love to have you at the Code Club. Fill out the form below to join our community!
                </Typography>

                <Card sx={{ mt: 3, maxWidth: 600, mx: 'auto', backgroundColor: '#EEEEEE' }}>
                    <CardContent>
                        <form>
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                required
                                sx={{ backgroundColor: '#FFFFFF' }}
                            />
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                required
                                type="email"
                                sx={{ backgroundColor: '#FFFFFF' }}
                            />
                            <TextField
                                label="Major"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                sx={{ backgroundColor: '#FFFFFF' }}
                            />
                            <TextField
                                label="Why do you want to join?"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                multiline
                                rows={4}
                                sx={{ backgroundColor: '#FFFFFF' }}
                            />
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    mt: 2,
                                    backgroundColor: '#FF0031',
                                    color: '#FFFFFF',
                                    '&:hover': {
                                        backgroundColor: '#FF4C4C',
                                    },
                                }}
                                type="submit"
                            >
                                Submit
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                <Typography variant="h4" gutterBottom sx={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 'bold', mt: 4, mb: 2, color: '#1C1C1C' }}>
                    WHY JOIN?
                </Typography>
                <Box component="ul" sx={{ pl: 2, mb: 2, color: '#1C1C1C' }}>
                    <Typography variant="body1" component="li">
                        Work on real-world projects with a diverse team.
                    </Typography>
                    <Typography variant="body1" component="li">
                        Learn from industry experts and alumni.
                    </Typography>
                    <Typography variant="body1" component="li">
                        Attend exclusive workshops and networking events.
                    </Typography>
                    <Typography variant="body1" component="li">
                        Build your resume and portfolio.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
