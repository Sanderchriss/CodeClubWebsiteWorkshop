// src/App.tsx
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Join from "./Pages/Contact";
import Projects from "./Pages/Services";

export default function App() {
    return (
        <Router>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Header />
                <Container maxWidth="lg" sx={{ flex: 1, py: 4 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/join" element={<Join />} />
                    </Routes>
                </Container>
                <Footer />
            </Box>
        </Router>
    );
}
