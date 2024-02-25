import React,{useState} from 'react';
import axios from 'axios';
function Register() {
    const [user,setUser]= useState({
          firstName:'',
          lastName:'',
          emailId:'',
          password:''
    });

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

        const handleSubmit = async e => {
            e.preventDefault();
            try {
                const res = await axios.post('http://localhost:8080/register', user);
                console.log('Registered user:', res.data);
                // Handle success, e.g., show a success message or redirect
            } catch (error) {
                console.error('Registration failed:', error);
                // Handle error, e.g., display error message to the user
            }
        };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <lable>First Name
                <input type="text" name="firstName" value={user.firstName} onChange={handleChange} placeholder="Enter FirstName" required />
                   
                </lable>
                <br></br>
                <label>Last Name
                    <input type='text' name='lastName' value={user.lastName} onChange={handleChange} placeholder='Enter LastName'></input>
                </label>
                <br></br>
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

export default Register;