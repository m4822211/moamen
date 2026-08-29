import { useState, useContext } from 'react';
import { AuthContext } from '../context/Authcontext';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api/axiosConfig';


export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || formData.password.length < 6) {
      return setError('Valid email and 6+ character password required.');
    }
    
    try {
      const res = await api.post('/auth/login', formData);
      login(res.data);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="email" onChange={(e) => setFormData({...formData, email: e.target.value})} />
      <input type="password" onChange={(e) => setFormData({...formData, password: e.target.value})} />
      <button type="submit">Login</button>
      <p style={{ marginTop: '1rem' }}>Need an account? <Link to="/register">Register here</Link></p>
    </form>
  );
}