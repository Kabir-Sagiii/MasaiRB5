import {useContext,useState} from 'react';
import {AuthContext} from "./CustomProvider"

function Login(props) {
    const [user,setUser] = useState({
        username:"",
        password:""
    })
         const {login}   = useContext(AuthContext)
    var style = {
        width:"300px",
        padding:"30px",
        textAlign:"center",
        margin:"100px auto 20px",
        boxShadow:"0 0 10px black"
    }
    const handleAuthentication = ()=>{
              if(user.username==="kabir" && user.password==="kabir@123"){
                login()
              } else {
                alert("Enter Proper Credentials")
              }
    }
    return (
        <div style={style}>
            <h2>Login Form</h2>
            <div>
                <input type="text" placeholder='username' onChange={(e)=>{setUser({
                    ...user,
                    username:e.target.value
                })}} />
            </div><br/>
            <div>
                <input type="password" placeholder='password' onChange={(e)=>{setUser({
                    ...user,
                    password:e.target.value
                })}} />
            </div><br/>
            <div>
                <input type="button" value="Login" onClick={handleAuthentication} />
            </div>
        </div>
    );
}

export default Login;