import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Box, Paper} from '@mui/material';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';


export default function App() {
    return (
        <Router>
            <Box
                sx={{
                    width: '100%',
                    minHeight: '100vh',
                    backgroundColor: 'background.default',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Header />
                <Paper
                    sx={{
                        flex: 1,
                        width: '80%',
                        margin: '20px auto',
                        padding: '20px',
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>

                </Paper>
                <Footer />
            </Box>
        </Router>
    );
}
