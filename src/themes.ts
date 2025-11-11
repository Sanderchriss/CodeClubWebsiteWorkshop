
import { createTheme } from '@mui/material/styles';

const windows95Theme = createTheme({
    palette: {
        primary: {
            main: '#000080', // Windows 95 blue
        },
        secondary: {
            main: '#C0C0C0', // Light grey
        },
        background: {
            default: '#008080', // Teal desktop background
            paper: '#C0C0C0',    // Light grey for windows
        },
        text: {
            primary: '#000000',
            secondary: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: '"MS Sans Serif", "Arial", sans-serif',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    border: '2px solid',
                    borderColor: '#FFFFFF #808080 #808080 #FFFFFF',
                    backgroundColor: '#C0C0C0',
                    color: '#000000',
                    boxShadow: 'none',
                    '&:hover': {
                        backgroundColor: '#000080',
                        color: '#FFFFFF',
                        borderColor: '#FFFFFF',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    border: '2px solid',
                    borderColor: '#FFFFFF #808080 #808080 #FFFFFF',
                    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                    backgroundColor: '#C0C0C0',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(to right, #000080, #1084d0)',
                    color: '#FFFFFF',
                    borderBottom: '2px solid #FFFFFF',
                },
            },
        },
    },
});

export default windows95Theme;
