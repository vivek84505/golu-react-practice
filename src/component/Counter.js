import { useEffect, useState } from "react";
import CounterShow from "./CounterShow";
import CounterAction from "./CounterAction";
import CounterDisplay from "./CounterDisplay";

function Counter() {
 
  const [mycounter, setCount] = useState(0);
  
  


 

  // useState ==> State variable declaration, initialization method mapping.

  //Hook
  // Hook is an inbuild function provided by React to achieve a certain task
  // Each hook has its own method and pattern
  // Each hook is places as per the usage

  // let mycounter = 777

 // Reload => Intitial value set.

 // Render => Maintain state value.


  


  const increment = (value) => {
   
   setCount(mycounter + value);
   
  };

  const decrement = (value) => {
    // console.log("decrement function called ============>")
    setCount(mycounter - value);
  //  mycounter = mycounter - value
    // console.log("mycounter ============>",mycounter)


  };

  // console.log("Counter Component Rendered============>")
  // console.log("New updated value passsing============>",mycounter)

  return (
    <div className="counter-container">
      <CounterShow counter={mycounter} />     
      <CounterAction  incrementCounter={increment} decrementCounter={decrement} />
      {(mycounter >= 18) ? (<h2>Adult</h2>) : (<h2>TeenAger</h2>)}
      { mycounter % 2 === 0 ? (<h2>Even</h2>) : (<h2>Odd</h2>) }
     
       {/* state */}
       {/* props */}
      
    </div>
  );
}

export default Counter;