import React from 'react';

function PostItems({posts}) {
    return (
        <div>
           <ol>
             {
                posts.length > 0 && posts.map((post)=>{
                    return <li>{post.title}</li>
                })
             }
           </ol>
        </div>
    );
}

export default PostItems;