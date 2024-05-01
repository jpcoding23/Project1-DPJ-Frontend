import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { IAdmin } from '../../Models/IAdmin';


//
function CreateAdminAcct() {

        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [role, setRole] = useState('');

        const [currentUser, setCurrentUser] = useState<IAdmin>()

        const navigate = useNavigate()
    
        const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setFirstName(event.target.value);
        };

        const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setLastName(event.target.value);
        };

        const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(event.target.value);
        };
    
        const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(event.target.value);
        };

        const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setRole(event.target.value);
        };
    
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log(firstName, lastName, email, password, role)
        // TODO: Implement user registration logic here
        let res = await axios.post('http://localhost:8080/admins', {firstName, lastName, email, password, role })
            .then((response) => {
                localStorage.setItem("firstName", response.data.firstName)
                localStorage.setItem("lastName", response.data.lastName)
                localStorage.setItem("email", response.data.email)
                navigate('/')
                return response.data
            }
            )
            .catch((error) => {
                localStorage.removeItem("firstName")
                localStorage.removeItem("lastName")
                localStorage.removeItem("email")
                alert("Unsuccessful registration. Please try again.")
                console.error(error)
            });
    }
        




  return (
    <div className='createAdminAcct'>

<h2>Register Admin</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">Firstname:</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Lastname:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div>
                    <label htmlFor="role">Role:</label>
                    <input
                        type="role"
                        id="role"
                        value={role}
                        onChange={handleRoleChange}
                    />
                </div>
                <button type="submit">Register</button>
            </form>   
    </div>
  )
}

export default CreateAdminAcct
