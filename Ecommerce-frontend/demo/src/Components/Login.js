import React,{useState} from 'react';
import axios from 'axios';
function Login() {
    const [user,setUser]= useState({
          emailId:'',
          password:''
    });

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

        const handleSubmit = async e => {
            e.preventDefault();
           
        };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} style={{alignItems:'center'}}>
                <label>Email Id
                    <input type='email' name='emailId' value={user.emailId} onChange={handleChange} placeholder='Enter EmailId'></input>
                </label>
                <br></br>
                <label>Password
                    <input type='password' name='password' value={user.password} onChange={handleChange} placeholder='Enter Password'></input>
                </label>
                <br></br>
                <button type='submit'>Submit</button>

            </form>
        </div>
    );
}

export default Login;