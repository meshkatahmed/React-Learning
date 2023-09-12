import withCounter from "./HOC/withCounter";

const ClickCounter = (props) => {
    const {count,handleClick} = props;
    return (
        <div>
            <button type="button" onClick={handleClick}>
                Clicked {count} times
            </button>
        </div>
    );
}

export default withCounter(ClickCounter);
