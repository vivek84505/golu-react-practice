import Counter from "./Counter";
import { useEffect } from "react";

function CounterShow(props){
 
//   console.log("New updated value received 123============>",props.counter)
 
// Component Mounted => componentDidMount()
// Component Update => componentDidUpdate()
  // Component Will Unmount => componentWillUnmount()
  // if your depdendency array is empty then useEffect will only run once when the component is mounted

  useEffect(() => {

    console.log('CounterShow component Mounted')



    return () => {
      console.log('CounterShow component Unmounted')
    };


  },[props.counter])

    return(
        <div>
            <h2 className="counter-value">Counter from Show: {props.counter}</h2>
            
        </div>
    )
}

export default CounterShow;