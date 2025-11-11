// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import windows95Theme from './themes.ts';
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
            <ThemeProvider theme={windows95Theme}>
                    <CssBaseline />
                    <App />
            </ThemeProvider>
    </React.StrictMode>
);
