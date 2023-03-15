import {useState} from 'react'
import Button from './Button'

function Counter(props) {  // re-render
         let [count,setCount]   = useState(0)
        let  [name,setName]    = useState("Kabir")
        let [btn,setBtn] = useState("Increase Count Kabir")

    var countValue = 0

     var style = {
         width:"500px",
         boxShadow:"0 0 10px black",
         padding:"30px",
         textAlign:"center",
         margin:"100px auto"
     }
        const increaseCount = ()=>{
              setCount(count + 100)
              setName("MASAI")
              setBtn("Well Done")


            // countValue = countValue + 1
            // console.log(countValue)
        }
    return (
        <div style={style}>
            <h2>{name} changed Count Value to {count}</h2>
            <button onClick={increaseCount}>{btn}</button>

            <Button countValue={count}/>
        </div>
    );
}

export default Counter;