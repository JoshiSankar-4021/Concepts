import { useState } from "react";
function Counter(){

    
    const [count, setCount]= useState(0);
    //use state: const [state, setState] = useState(initialState);
    function increment(){
        return setCount(count+1);
    }
    function decrement(){
        return setCount(count-1);
    }
    var add=()=>{
        return setCount(count+1);
    }
    var sub=()=>{
        return setCount(count-1);
    }
    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button><br></br>
            <button onClick={()=>{setCount(count+1)}}>Increment1</button>
            <button onClick={()=>{setCount(count-1)}}>Decrement1</button>
            <button onClick={add}>Increment2</button>
            <button onClick={sub}>Decremnt2</button>
        </div>
    )
}
export default Counter;