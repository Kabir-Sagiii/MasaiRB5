import React from 'react';

function PostItem({posts}) {
    return (
        <div>
            {
                posts.length >0 && <div> 
                   
                    <ol>
                    {
                        posts.map((post)=>{
                         return <li>{post.title}</li>
                        })
                    }
                    </ol>
                    </div>
            }
        </div>
    );
}

export default PostItem;