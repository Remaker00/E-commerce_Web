import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'boxicons';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post('https://e-commerce-web-tau-lyart.vercel.app/user/checkUser', { formData })
      .then((response) => {
        alert('Successfully Logged In:', response.data);

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', response.data.email);
        navigate('/productform');
        setFormData({ email: '', password: '' });
      })
      .catch((error) => {
        alert('Error Logging In:', error);
      });
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to='/'>Sign up</Link></p>
      <p>Forgot Password? <Link to='/forgetpassword'>Click Me</Link></p>
    </div>
  );
};

export default LoginForm;
