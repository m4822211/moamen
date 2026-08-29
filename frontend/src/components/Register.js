import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api/axiosConfig';

export default function Register() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', formData);
      alert('Registration successful! Please log in.');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register for StudyHub</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="text" placeholder="Username" onChange={e => setFormData({...formData, username: e.target.value})} required />
      <input type="email" placeholder="Email" onChange={e => setFormData({...formData, email: e.target.value})} required />
      <input type="password" placeholder="Password (min 6 chars)" onChange={e => setFormData({...formData, password: e.target.value})} required />
      <button type="submit">Create Account</button>
      <p style={{ marginTop: '1rem' }}>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </form>
  );
}