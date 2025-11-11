import { Window, WindowHeader, WindowContent, List, ListItem } from 'react95';
import {useRef} from "react";
import Draggable from "react-draggable";

export default function Services() {
    const nodeRef = useRef(null);
    return (
        <Draggable nodeRef={nodeRef}>
        <Window style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }} ref={nodeRef}>
            <WindowHeader>Our Services</WindowHeader>
            <WindowContent>
                <h2>Our Services</h2>
                <List>
                    <ListItem>Web Design</ListItem>
                    <ListItem>Consulting</ListItem>
                    <ListItem>Retro Software Development</ListItem>
                </List>
            </WindowContent>
        </Window></Draggable>
    );
}
