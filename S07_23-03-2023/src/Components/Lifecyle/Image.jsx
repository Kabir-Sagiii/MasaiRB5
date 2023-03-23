import {useState,useEffect} from 'react';

function Image(props) {
    const [image,setImage] = useState("data:image/jpeg;base64,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")
    const [name,setName] = useState("React JS")
    // useEffect(()=>{
    //     console.log("useEffect's callback is Called")
    //     return ()=>{
    //         // alert("Component will Unmount")
    //         console.log("Returned Function")
    //     }
    // },[])

                


     useEffect(()=>{
        console.log("useEffect's callback is Called")
        document.title = `${name} Image Component`
        localStorage.setItem('name',"Kabir")
        return ()=>{
           localStorage.removeItem('name')
        }
        
    })

   
    return (
        <div>
             {/* {console.log("JSX Console")} */}
            <h2 >{name} Image Component </h2>
            <img src={image} width="300" height="300" /> 
           <br/><br/> <button onClick={()=>
            {setImage("https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png")}}>Next JS</button>
           <button 
           onClick={()=>{setName("Vue JS")}}>Change Title</button>
        </div>
    );
}

export default Image;