import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'boxicons';

const Password = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://e-commerce-web-tau-lyart.vercel.app/password/send_mail', { email })
      .then((response) => {
        alert('Email Sent Success:', response.data);
      })
      .catch((error) => {
        alert('Error:', error);
      });
  };

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <box-icon type='logo' name='gmail'></box-icon>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <p><Link to="/login-form">Back</Link></p>
      </div>
    </div>
  );
};

export default Password;
