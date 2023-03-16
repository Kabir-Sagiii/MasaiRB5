import React from 'react';

function Button({countValue}) {

      
    return (
        <div  style={{marginTop:"30px"}}>
            <button >Like {countValue}</button>
        </div>
    );
}

export default Button;