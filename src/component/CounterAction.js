function CounterAction(props){

    return(
        <div>
            {/* <h2 className="counter-value">Counter From Action: {props.counter}</h2> */}
            <div className="counter-buttons">
                <button onClick={()=>{props.incrementCounter(2)}}>Increment</button>
                <button onClick={() => {props.decrementCounter(2)}}>Decrement</button>
            </div>
        </div>
    )
}

export default CounterAction;