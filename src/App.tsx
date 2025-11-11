import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button, AppBar, Toolbar, Window, WindowHeader, WindowContent } from 'react95';
import { ClippyProvider, useClippy } from "@react95/clippy";
import { useState } from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';

const MyComponent = () => {
    const { clippy } = useClippy();
    const handleClick = () => {
        if (clippy) {
            clippy.play('Wave');
        }
    };
    return <Button onClick={handleClick}>Hello Clippy!</Button>;
};

export default function App() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setDragStart({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        setPosition({
            x: e.clientX - dragStart.x,
            y: e.clientY - dragStart.y
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <Router>
            <ClippyProvider>
                <div
                    style={{
                        width: '100%',
                        height: '100vh',
                        backgroundColor: '#008080',
                        overflow: 'hidden',
                        padding: '20px',
                        boxSizing: 'border-box',
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    <Window
                        style={{
                            width: '80%',
                            height: '80%',
                            position: 'absolute',
                            left: `${position.x}px`,
                            top: `${position.y}px`,
                            cursor: isDragging ? 'grabbing' : 'default',
                        }}
                    >
                        <WindowHeader
                            style={{
                                cursor: 'move',
                                display: 'flex',
                                justifyContent: 'space-between',
                                background: '#008080'
                            }}
                            onMouseDown={handleMouseDown}
                        >
                            <span>My Windows 95 App</span>
                            <div>
                                <Button square size={'sm'}>
                                    <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
                                </Button>
                            </div>
                        </WindowHeader>
                        <WindowContent>
                            <AppBar>
                                <Toolbar style={{ justifyContent: 'space-between', background:'#060084'}}>
                                    <div>
                                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <Button>Home</Button>
                                        </Link>
                                        <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <Button>About</Button>
                                        </Link>
                                        <Link to="/services" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <Button>Services</Button>
                                        </Link>
                                        <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <Button>Contact</Button>
                                        </Link>
                                    </div>
                                </Toolbar>
                            </AppBar>
                            <div style={{ marginTop: '40px', padding: '20px', background: 'transparent'}}>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/services" element={<Services />} />
                                    <Route path="/contact" element={<Contact />} />
                                </Routes>
                            </div>

                            <MyComponent />
                        </WindowContent>
                    </Window>

                </div>
            </ClippyProvider>
        </Router>
    );
}
