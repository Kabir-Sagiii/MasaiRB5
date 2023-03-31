import {useContext} from 'react';
import myContext from './context';

function D(props) {
           let city =  useContext(myContext)
    return (
        <div>
            <h2>D Component</h2>
            <p style={{color:"red",fontSize:"30px"}}>{city}</p>
        </div>
    );
}

export default D;