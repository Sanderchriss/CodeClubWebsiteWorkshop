// src/theme.ts
import {createTheme} from "@mui/material";

export const modernTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1C1C1C', // Dark gray/black for text and primary elements
        },
        secondary: {
            main: '#FF0031', // Bright red for accents
        },
        background: {
            default: '#EEEEEE', // Light gray for the page background
            paper: '#FFFFFF',   // White for cards/papers
        },
        text: {
            primary: '#1C1C1C', // Dark text
            secondary: '#666666',
        },
    },
    typography: {
        fontFamily: '"IBM Plex Sans", sans-serif',
        h1: {
            fontFamily: '"IBM Plex Mono", monospace',
            fontWeight: 700,
            fontSize: '2.5rem',
            letterSpacing: '0.1em',
        },
        h2: {
            fontFamily: '"IBM Plex Mono", monospace',
            fontWeight: 600,
            fontSize: '2rem',
            letterSpacing: '0.05em',
        },
        body1: {
            fontFamily: '"IBM Plex Sans", sans-serif',
            fontSize: '1rem',
            lineHeight: 1.6,
        },

    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '4px',
                    textTransform: 'none',
                    padding: '8px 16px',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                },
            },
        },
    },
});
export default modernTheme
