import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './EditorLogin.css'; // Importing CSS for styling
import toast from 'react-hot-toast';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const EditorLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const { user , setUser } = useContext(UserContext);
  const [justLoggedIn, setJustLoggedIn] = useState(false);
  const navigate = useNavigate()

  const MAX_ATTEMPTS = 10;
  const BLOCK_TIME = 300000; // 5 minutes in milliseconds

  useEffect(() => {
    // Check localStorage for block state on component load
    const blockData = JSON.parse(localStorage.getItem('blockData'));
    console.log(blockData);
    
    if (blockData && blockData.isBlocked) {
      const currentTime = Date.now();
      if (currentTime < blockData.blockUntil) {
        setIsBlocked(true);
        setTimeout(() => {
          setIsBlocked(false);
          localStorage.removeItem('blockData'); // Clear blocking state
        }, blockData.blockUntil - currentTime);
      } else {
        localStorage.removeItem('blockData'); // Remove expired block
        setError("")
      }
    }
    else {
      setError("")
    }

  }, []);

  useEffect(() => {
    // check if user already exist
    if(user && !justLoggedIn) {
      toast('You are already Logged in!')
      navigate('/');
    }
  }, [navigate, user, justLoggedIn]);

  useEffect(() => {
    if (isBlocked) {
      setError('Too many login attempts. Please try again later.');
    }
  },[isBlocked])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (isBlocked) {
      setError('Too many login attempts. Please try again later.');
      return;
    }

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      // Send login request
      toast('Trying to login')
      // const response = await axios.post('/api/login', { email, password });
      const response = {data:{success:true}}

      // Handle success
      if (response.data.success) {
        toast.success('Login successful!');
        navigate('/')
        setJustLoggedIn(true);
        setUser(email);
      } else {
        toast.error('Invalid credentials');
      }
    } catch (err) {
      // Increment login attempts
      const newAttempts = loginAttempts + 1;
      setLoginAttempts(newAttempts);

      if (newAttempts >= MAX_ATTEMPTS) {
        const blockUntil = Date.now() + BLOCK_TIME;
        setIsBlocked(true);
        localStorage.setItem('blockData', JSON.stringify({ isBlocked: true, blockUntil }));
        setTimeout(() => {
          setIsBlocked(false);
          localStorage.removeItem('blockData'); // Clear blocking state
        }, BLOCK_TIME);
      }

      setError(err.response?.data?.message || 'Invalid login credentials.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="login-button"
            disabled={isBlocked}
          >
            {isBlocked ? 'Blocked' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditorLogin;
