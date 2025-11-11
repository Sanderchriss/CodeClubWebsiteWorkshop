import { Typography, Paper, Box, List, ListItem, ListItemText } from '@mui/material';

export default function Services() {
    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                Our Services
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
                    At <strong>C1pher Inc.</strong>, we offer a variety of groundbreaking digital services:
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText primary="Web Design (Geocities Chic)" secondary="Hand-coded HTML with <blink> tags and <marquee> text.
Animated GIFs of dancing babies and 'Best Viewed in Netscape' badges.
Guestbooks" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Software Development (16-Bit Glory)" secondary="Custom MS-DOS batch scripts for all your automation needs.
Visual Basic 6.0 applications that crash gracefully.
Y2K compliance guarantees (we swear)." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Networking Solutions (Dial-Up of Your Dreams)" secondary="BBS setup and hosting (300 baud or bust).
LAN parties for DOOM and Quake (BYO-keyboard).
Modem optimization (we can get you up to 28.8K if you’re lucky)." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Y2K Consulting" secondary="Y2K readiness audits, approved by Peter de Jager himself.
AOL keyword strategy (we’ll get you top billing in the AOL directory).
ICQ and IRC setup (for all your chat room needs)." />
                    </ListItem>
                </List>
            </Paper>
        </Box>
    );
}
