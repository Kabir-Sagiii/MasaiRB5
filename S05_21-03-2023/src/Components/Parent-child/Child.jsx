import React from 'react';

function Child({data}) {
    var style = {
        boxShadow:"0 0 10px red",
        textAlign:"center",
        padding:"20px",
        marginTop:"50px"
    }
    return (
        <div style={style}>
            <h2>Child Component</h2>
            <p>{data}</p>
        </div>
    );
}

export default Child;