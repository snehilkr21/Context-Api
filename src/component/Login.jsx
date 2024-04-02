import React from 'react'
import { useState } from 'react'
import UserContext from '../Context/UserContext'
function Login() {
    const [userName,setUserName]  = useState("")
    const [password,setPassword] = useState("")
    const {setUser} = React.useContext(UserContext)
    const handleSubmit = (e) =>{
       e.preventDefault()
       setUser({userName,password})
    }

    return (
        <div>
            <h2>Login</h2>
            <input value ={userName} type='text' placeholder='userName' 
             onChange={(e)=>setUserName(e.target.value)}
            />
            <input value ={password} type='text' placeholder='password' 
            onChange={(e)=>{setPassword(e.target.value)}}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login