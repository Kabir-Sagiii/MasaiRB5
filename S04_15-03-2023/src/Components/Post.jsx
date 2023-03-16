import {useState} from 'react';
import PostItems from './PostItems';
import NoData from './NoData';

function Post(props) {
    const [state,setState] = useState([])

    const removePost = ()=>{
         setState([])
    }

     const getPost = async ()=>{
      const res  = await  fetch("https://jsonplaceholder.typicode.com/posts")
        const data= await res.json()   
        console.log(data)  
        setState(data)         
     }
    return (
        <div>
            <h2>My Posts Information</h2>
            <button onClick={getPost}>Get Post</button>&nbsp;&nbsp;&nbsp;
            <button onClick={removePost}>Remove Post</button>
            {
                state.length > 0 ?
                <PostItems posts={state} /> : 
                <NoData />
            }

        </div>
    );
}

export default Post;