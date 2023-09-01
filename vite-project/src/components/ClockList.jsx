import Clock from "./Clock";

function ClockList({quantity}) {
    // const {quantity} = props;
    return (
        <div>
            {quantity.map(key=><Clock key={key}/>)}
        </div>
    );
}

export default ClockList;