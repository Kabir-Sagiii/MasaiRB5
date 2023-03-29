import {useState,useEffect} from 'react';
import PostItem from './PostItem';



function Post(props) {
     const [posts,setPosts] = useState([])
     const [page,setPage] = useState(1)
     useEffect(()=>{

        getPostInfo(page)

     },[page])

     const getPostInfo = async (pageno=1)=>{
       const res=   await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageno}`)
       let data = await res.json()
        console.log(data)
        setPosts(data)
     }
       const handlePage = (pageAction)=>{
             setPage(page + pageAction)
       }
    return (
        <div>
            <h2>Post component</h2>
            <PostItem posts={posts} />
            <button onClick={()=>{handlePage(-1)}}>Prev</button>
            <button>{page}</button>
            <button onClick={()=>{handlePage(+1)}}>Next</button>
           
            
        </div>
    );
}

export default Post;