import {useState} from 'react';
import B from './B';
import myContext from './context';

function A(props) {
    const [state,setState] = useState("")
    return (
        <div>
            <h2>A Component</h2>
            <button onClick={()=>{setState("Delhi")}}>Pass data to D Comp</button>
            <myContext.Provider value={state}>
            <B />
            </myContext.Provider>
           
        </div>
    );
}

export default A;