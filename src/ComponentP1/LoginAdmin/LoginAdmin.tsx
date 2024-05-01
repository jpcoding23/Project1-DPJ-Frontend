import React, { SyntheticEvent, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IAdmin } from '../../Models/IAdmin';
import './LoginAdmin.css'




function LoginAdmin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()


    let updateEmail = (e:SyntheticEvent) => {
        setEmail( (e.target as HTMLInputElement).value )
    }

    let updatePassword = (e:SyntheticEvent) => {
        setPassword( (e.target as HTMLInputElement).value )
    }


    let loginFunction = async() => {
        console.log(email, password)
        let res = await axios.post('http://localhost:8080/admins/login', {email, password})
                        .then((response) => {
                            localStorage.setItem("email", response.data.email)
                            localStorage.setItem("password", response.data.password)
                            navigate('/dashboardadmin')
                            return response.data}
                        )
                        .catch( (error) => {
                            localStorage.removeItem("email")
                            localStorage.removeItem("password")
                            alert("Unsuccessful login. Please try again.")
                            console.error(error)
                        });  
        //setCurrentUser(res)   
    }


return (
    <>
        <div className='loginForm'>
        
                <label>Email: <input id='email-input' type='email' onChange={updateEmail}></input></label>
                <label>Password: <input id='password-input' type='password' onChange={updatePassword}></input></label>

                <button onClick={loginFunction}>Login</button>
                {/* <h3>Logged in User: {currentUser?.username}</h3> */}         
        </div>

    </>
)
}

export default LoginAdmin
