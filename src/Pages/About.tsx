import { Window, WindowHeader, WindowContent } from 'react95';
import {useRef} from "react";
import Draggable from "react-draggable";

export default function About() {
    const nodeRef = useRef(null);
    return (
        <Draggable nodeRef = {nodeRef}>
        <Window style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }} ref={nodeRef}>
            <WindowHeader>About Us</WindowHeader>
            <WindowContent>
                <h2>About Us</h2>
                <img src="ofiice.jpeg"/>
                <p>We have been in business since 1995, providing top-notch services for small business all over southern Copenhagen.</p>
            </WindowContent>
        </Window>
        </Draggable>
    );
}
