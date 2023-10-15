import React, { useState } from 'react';
import './AuthForm.css';
import axios from 'axios';

const AuthForm = () => {

  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleToggleForm = () => {
    setIsSignUp(!isSignUp);
    setFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      axios.post('http://localhost:4000/user/addUser', formData)
        .then((response) => {
          alert('Account Successfully Created:', response.data);
          setFormData({
            username: '',
            email: '',
            password: '',
          });
        })
        .catch((error) => {
          alert('Error Creating Account:', error);
        });
    } else {
      axios.post('http://localhost:4000/user/checkUser', { formData })
        .then((response) => {
          alert('Successfully Logged In:', response.data);

          window.location.href = '/';
          setFormData({
            username: '',
            email: '',
            password: '',
          });
        })
        .catch((error) => {
          alert('Error Logging In:', error);
        });
    }
  };

  return (
    <div className="auth-container">
      <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
        )}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
      </form>
      <p onClick={handleToggleForm}>
        {isSignUp ? 'Already have an account? Log in' : 'Don\'t have an account? Sign up'}
      </p>
    </div>
  );
};

export default AuthForm;
