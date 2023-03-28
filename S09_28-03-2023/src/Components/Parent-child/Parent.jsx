import {useState} from 'react';
import Child from './Child';

function Parent({children}) {
     const [text,setText] = useState("")
     const [childData,setChildData] = useState("")
    var style = {
        width:"500px",
        padding:"50px",
        textAlign:"center",
        margin:"50px auto 20px",
        boxShadow:"0 0 10px black"
    }
      const sendDataToChild = ()=>{
             setChildData(text)
      }
    return (
        <div style={style}>
            <h2>{children}</h2> 
             {/* <h2><Dummy /></h2> */}
            {/* <h2>Parent Component : <span style={{color:"red"}}>{children}</span></h2> */}
            <input type="text" placeholder='Enter Some Text' 
            onChange={(e)=>{setText(e.target.value)}}/>
            <button onClick={sendDataToChild}>Send Data to Child</button>
            <Child  data ={childData}/>
        </div>
    );
}

export default Parent;