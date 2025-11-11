import { Window, WindowHeader, WindowContent } from 'react95';
import Draggable from 'react-draggable';
import {useRef} from "react";

export default function Home() {

    const nodeRef = useRef(null);
    return (
        <Draggable nodeRef={nodeRef}>
            <Window style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }} ref={nodeRef}>
                <WindowHeader>Welcome to Our Company</WindowHeader>
                <WindowContent>
                    <h2>Welcome to Our Company</h2>
                    <p>We are a modern company bringing your computer business into the 20th century!.</p>
                    <img src="internet.gif"/>

                </WindowContent>
            </Window>
        </Draggable>
    );
}
