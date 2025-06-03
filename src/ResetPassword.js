import React, { useState } from 'react';
import './ResetPassword.css';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      alert('Password reset successfully!');
      navigate('/'); // ✅ Redirect to Login page
    } else {
      alert('Passwords do not match!')
    }
  };

  return (
    <div className="reset-container">
      <div className="reset-box">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Set New Password</button>
        </form>
        <p className="back-login" onClick={() => navigate('/')}>← Back to Login</p>
      </div>
    </div>
  );
};

export default ResetPassword;