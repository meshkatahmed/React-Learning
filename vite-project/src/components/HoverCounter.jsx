import withCounter from "./HOC/withCounter";

const HoverCounter = (props) => {
    const {count,handleClick} = props;
    return (
        <div>
            <h1 onMouseOver={handleClick}>
                Hovered {count} times
            </h1>
        </div>
    );
}

export default withCounter(HoverCounter);