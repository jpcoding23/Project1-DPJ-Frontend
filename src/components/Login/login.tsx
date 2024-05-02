import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function LoginForm(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      const response = await axios.post<{ data: any }>('http://localhost:8080/users/login', {
        email: email,
        password: password
      });
      console.log('Logged in user:', response.data);
    
      setError('User Log in');
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
      <button onClick={() => window.location.href='/register'}>Sign Up</button>
    </div>
  );
}

export default LoginForm;