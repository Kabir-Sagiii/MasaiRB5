import {useState} from 'react';

function Form(props) {
    const [users,setUsers] = useState([])
           const [formdata,setFormData] = useState({
                name:"",
                password:"",
                email:"",
                city:"",
                gender:""
           })
      const getFormData = (event)=>{
                event.preventDefault()
                console.log(formdata)
                 setFormData({
                    name:"",
                    password:"",
                    email:"",
                    city:"",
                    gender:""
               })
                setUsers([...users,formdata])
                
      }
    return (
        <div style={{textAlign:"center",width:"500px",padding:"20px",margin:"30px auto",boxShadow:"0 0 10px black"}}>
              <h2>Register Form</h2>
              <form onSubmit={getFormData}>
                 
                 <div>
                 <input value={formdata.name} type="text" placeholder='User Name'
                    onChange={(e)=>{setFormData({
                          ...formdata,
                          name:e.target.value
                    })}}
                 />
                 </div><br/>
                 <div>
                 <input type="password" placeholder='Password'
                     onChange={(e)=>{setFormData({
                        ...formdata,
                        password:e.target.value
                  })}}
                 
                 />
                 </div><br/>
                 <div>
                 <input type="email" placeholder='Email Id'
                   onChange={(e)=>{setFormData({
                    ...formdata,
                    email:e.target.value
              })}}
                 
                 />
                 </div><br/>
                 <div>
                    <input type="radio" name="gender" value="male" onChange={(e)=>{setFormData({
                          ...formdata,
                          gender:e.target.value
                    })}}/>Male
                    <input type="radio" name="gender" value="female"
                    onChange={(e)=>{setFormData({
                        ...formdata,
                        gender:e.target.value
                  })}}
                    />Female
                 </div><br/>
                 <div>
                    <select onChange={(e)=>{
                        setFormData({
                            ...formdata,
                            city:e.target.value

                        })
                    }}>
                        <option>Select City</option>
                        <option>Mumbai</option>
                        <option>Delhi</option>
                        <option>Banglore</option>
                        <option>Hyderabad</option>
                    </select>
                 </div><br/>
                  <div>
                    <button >Register</button>
                  </div>
              </form><br/>
              <button onClick={()=>{console.log(users)}}>Get AllUsers</button>
        </div>
    );
}

export default Form;