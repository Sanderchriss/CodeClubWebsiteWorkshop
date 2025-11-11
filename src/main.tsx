import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import original from 'react95/dist/themes/original';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'MS Sans Serif', Arial, sans-serif;
    background: teal;
    margin: 0;
    padding: 0;
    height: 100vh;
    overflow: hidden;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={original}>
        <GlobalStyle />
        <App />
        </ThemeProvider>
        </React.StrictMode>
);
