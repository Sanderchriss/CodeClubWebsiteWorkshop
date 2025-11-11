import { Typography, Paper, Box, TextField, Button } from '@mui/material';

export default function Contact() {
    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                Contact Us
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
                    Have a question or want to work with us? Fill out the form below, and we'll get back to you as soon as possible. You can also contact us on AOL at: 'C1pherInc95'
                </Typography>
                <form>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: '2px',
                            border: '1px solid #808080',
                        }}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: '2px',
                            border: '1px solid #808080',
                        }}
                    />
                    <TextField
                        label="Message"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        margin="normal"
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: '2px',
                            border: '1px solid #808080',
                        }}
                    />
                    <Button
                        variant="contained"
                        sx={{
                            marginTop: '10px',
                            backgroundColor: 'primary.main',
                            color: 'white',
                            border: '1px solid #808080',
                            '&:hover': {
                                backgroundColor: '#000080',
                            },
                        }}
                    >
                        Send
                    </Button>
                </form>
            </Paper>
        </Box>
    );
}
