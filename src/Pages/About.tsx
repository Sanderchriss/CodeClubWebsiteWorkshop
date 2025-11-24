// src/Pages/About.tsx
import { Typography, Box, Card, CardContent, Avatar, Container } from '@mui/material';

export default function About() {
    return (
        <Box>
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography variant="h2" gutterBottom sx={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 'bold', mb: 3, color: '#1C1C1C' }}>
                    ABOUT THE CLUB
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: '#1C1C1C' }}>
                    The <b>CBS Code Club</b> was founded in 2023 with a simple goal: <b>to bridge the gap between technology and business</b>. We noticed that tech students often struggled to understand the business side of their projects, while business students felt intimidated by the technical jargon. Our club was born to change that.
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: '#1C1C1C' }}>
                    Today, we’re a thriving community of <b>developers, designers, marketers, and entrepreneurs</b> who collaborate on projects, host workshops, and learn from each other. Whether you’re building a startup, analyzing data, or designing a product, we’re here to help you succeed.
                </Typography>

                <Typography variant="h4" gutterBottom sx={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 'bold', mt: 4, mb: 2, color: '#1C1C1C' }}>
                    OUR VALUES
                </Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 3 }}>
                    <Card sx={{ backgroundColor: '#EEEEEE', borderTop: '4px solid #FF0031' }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom sx={{ fontFamily: '"IBM Plex Mono", monospace', color: '#1C1C1C' }}>
                                Collaboration
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#1C1C1C' }}>
                                We believe the best ideas come from diverse perspectives. Our club is a space where tech and business students can learn from each other and build something greater together.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ backgroundColor: '#EEEEEE', borderTop: '4px solid #FF0031' }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom sx={{ fontFamily: '"IBM Plex Mono", monospace', color: '#1C1C1C' }}>
                                Innovation
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#1C1C1C' }}>
                                From hackathons to startup pitches, we encourage our members to think outside the box and turn their ideas into reality.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ backgroundColor: '#EEEEEE', borderTop: '4px solid #FF0031' }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom sx={{ fontFamily: '"IBM Plex Mono", monospace', color: '#1C1C1C' }}>
                                Inclusivity
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#1C1C1C' }}>
                                Everyone is welcome, regardless of their background or experience level. We’re here to learn, grow, and support each other.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>

                <Typography variant="h4" gutterBottom sx={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 'bold', mt: 4, mb: 2, color: '#1C1C1C' }}>
                    MEET THE TEAM
                </Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2 }}>
                    <Card sx={{ textAlign: 'center', p: 2, backgroundColor: '#EEEEEE' }}>
                        <Avatar sx={{ width: 80, height: 80, margin: '0 auto', backgroundColor: '#FF0031' }}>JD</Avatar>
                        <Typography variant="h6" gutterBottom sx={{ color: '#1C1C1C' }}>
                            John Doe
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            President | Computer Science
                        </Typography>
                    </Card>
                    <Card sx={{ textAlign: 'center', p: 2, backgroundColor: '#EEEEEE' }}>
                        <Avatar sx={{ width: 80, height: 80, margin: '0 auto', backgroundColor: '#FF0031' }}>JS</Avatar>
                        <Typography variant="h6" gutterBottom sx={{ color: '#1C1C1C' }}>
                            Jane Smith
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            VP of Business | Marketing Major
                        </Typography>
                    </Card>
                </Box>
            </Container>
        </Box>
    );
}
