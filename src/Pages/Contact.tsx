import { Window, WindowHeader, WindowContent, TextInput, Button } from 'react95';
import {useRef} from "react";
import Draggable from "react-draggable";

export default function Contact() {
    const nodeRef = useRef(null);
    return (
        <Draggable nodeRef={nodeRef}>
        <Window style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }} ref={nodeRef}>
            <WindowHeader>Contact Us</WindowHeader>
            <WindowContent>
                <h2>Contact Us</h2>
                <form>
                    <TextInput placeholder="Name" style={{ marginBottom: '10px', width: '100%' }} />
                    <TextInput placeholder="Email" style={{ marginBottom: '10px', width: '100%' }} />
                    <TextInput placeholder="Message" multiline rows={5} style={{ marginBottom: '10px', width: '100%' }} />
                    <Button type="submit">Send</Button>
                </form>
            </WindowContent>
        </Window>
        </Draggable>
    );
}
