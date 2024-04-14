import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'boxicons';

const SignUpForm = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post('https://e-commerce-web-tau-lyart.vercel.app/user/addUser', { formData })
      .then((response) => {
        alert('Account Successfully Created:', response.data);
        setFormData({ username: '', email: '', password: '' });
        navigate('/login-form');
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.data) {
          alert('Error Creating Account:', error.response.data);
        } else {
          alert('An error occurred:', error.message);
        }
      });
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <box-icon type='solid' name='user'></box-icon>
          <input
            type="text"
            name="username"
            placeholder='Username'
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <box-icon type='logo' name='gmail'></box-icon>
          <input
            type="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <box-icon type='solid' name='lock'></box-icon>
          <input
            type="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login-form">Log in</Link></p>
    </div>
  );
};

export default SignUpForm;
