import { Component } from "react"

export default class Emoji extends Component {
    addEmoji = (text,emoji) => `${emoji} ${text} ${emoji}`;
    render(override) {
        let text = "I'm the emoji component";
        if(override) text = override;
        return (
            <div>{text}</div>
        );
    }
}