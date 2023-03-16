import {useState} from 'react'
import Button from './Button'

function Counter(props) {  // re-render
         let [count,setCount]   = useState(0)
       
     console.log("Counter Component Re-rendered")
  

     var style = {
         width:"300px",
         boxShadow:"0 0 10px black",
         padding:"30px",
         textAlign:"center",
         margin:"100px auto"
     }
        const increaseCount = ()=>{
            console.log("Hello")
           setCount((prevState)=>prevState + 1)
           console.log(count)   //0

          
             
             
}
    return (
        <div style={style}>
            <h2>Count Value is {count}</h2>
            <button onClick={increaseCount}>Increase Count</button>

           
        </div>
    );
}

export default Counter;