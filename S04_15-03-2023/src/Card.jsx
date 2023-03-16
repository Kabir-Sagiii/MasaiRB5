function Card({name,image,gender}){   //prope = { name:"Raj" gender:"male"  } //props.name
    return <div style={{
       width:"300px",textAlign:"center",padding:"20px",
       boxShadow:"0 0 10px black"
     }}> 
       <img src={image} width="100%" height="250px" />
     <h2> {name}</h2>
     <p>{gender}</p>
     <button>Profile</button>
            </div>
        
}

export default Card