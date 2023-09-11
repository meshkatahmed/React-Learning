import { PureComponent } from "react";
import Emoji from "./emoji";

export default class Text extends Emoji {
    constructor(props) {
        super(props);
    }
    
    render() {
        let decoratedText = this.addEmoji("I'm JavaScript",'xxx');
        return super.render(decoratedText);
    }
}