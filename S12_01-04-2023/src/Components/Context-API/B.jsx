import {useContext} from 'react';
import myContext from './context';
import C from './C';
function B(props) {
          let data= useContext(myContext)
    return (
        <div>
            <h2>B Component : <span style={{color:"red"}}>{data}</span></h2>
            <C />
        </div>
    );
}

export default B;