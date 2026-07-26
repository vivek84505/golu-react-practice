import { useCallback, useState } from "react"
import CallbackChild from "./CallbackChild"



function CallbackDemo(){

      const [count,setCount] = useState(0)
 
      const [name,setName] = useState('vivek')

      const changeName = useCallback(() => {

        console.log("Function Recreated")

        setName(name === "vivek" ? "Vivek Deshpande" :  "vivek")



      },[name])

      //first iteration  current value ===> vivek     New value ===>Vivek Deshpande
      //second iteration  current value ===> Vivek Deshpande     New value ===>Vivek Deshpande
        


    return(
        <div>
            <h2>  CallbackDemo </h2>

             <h4>Count : {count} </h4>
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
                Increment
            </button>

            <CallbackChild name={name} changeName={changeName}/>

        </div>
    )
}

export default CallbackDemo