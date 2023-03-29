import {useState,useEffect}from 'react';

function Users(props) {
     const [user,setUser] = useState([])

          useEffect(()=>{
             getUser()
          },[])

    const getUser = async ()=>{
         var res= await  fetch("https://jsonplaceholder.typicode.com/users")
         var data = await res.json() 
           setUser(data)
            
    }
    return (
        <div>
            <h2>Users Component</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit, numquam pariatur ullam mollitia odio nam eveniet nulla dolorem quisquam amet, temporibus quas. Quam modi consequatur suscipit! Reiciendis libero obcaecati impedit nam sunt eaque doloremque eius, nulla possimus, et expedita minus ad quisquam minima cumque voluptatem, molestias similique ipsa. Recusandae error amet molestiae! Tenetur ipsum minus mollitia, itaque sed ad excepturi nam similique? Unde ullam minima eius, laudantium velit reprehenderit? Fugit repudiandae natus quia modi excepturi rerum dolorem blanditiis repellat, deleniti quo aperiam? Voluptates iusto ipsam magni dignissimos quis esse, repellat corrupti sint tenetur deserunt consequatur, repudiandae rem quo sed.</p>
            <button onClick={getUser}>Get Users</button>
            {
                user.length > 0 ? <ol> 
                 {
                    user.map((ele)=>{
                      return <li>{ele.name}</li>
                    })
                 }

                </ol> : <h2 style={{color:"red"}}>No Users Found</h2>
            }
        </div>
    );
}

export default Users;