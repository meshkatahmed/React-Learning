export default function Text({addEmoji,addBracket}) {
    let text = "I'm JavaScript Language";
    if(addEmoji) text = addEmoji(text,'xxx');
    if(addBracket) text = addBracket(text);
    return <div>{text}</div>;
}