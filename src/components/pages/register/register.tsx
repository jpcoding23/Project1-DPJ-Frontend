import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';



function RegisterPage(): JSX.Element { 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');


  const handleRegister = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    
      try {
        const response = await axios.post<{ data: any }>('http://localhost:8080/users/register', {
        firstName: firstName,
        lastName:lastName,
        email: email,
        password: password
      });

      // Handle the response from the server
      console.log('Registration successful:', response.data);
      setError('Registration successful:');
    } catch (error) {
      // Handle errors
      console.error('Registration failed:', error);
      setError('Invalid email or password');

    }
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleRegister}>
        
          <label>First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </label>
          <br />
          <label>Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </label>
          <br />

          <label>Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />

          <label>Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
export default RegisterPage;