import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axiosConfig';

export default function UploadForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [subject, setSubject] = useState('Statistics');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleUpload = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', title);
    data.append('description', description);
    data.append('subject', subject);
    data.append('file', file);

    try {
      await api.post('/resources', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      navigate('/dashboard');
    } catch (err) { console.error(err); }
  };

  return (
    <form onSubmit={handleUpload}>
      <h2>Upload Resource</h2>
      <input type="text" onChange={e => setTitle(e.target.value)} required />
      <textarea onChange={e => setDescription(e.target.value)} required />
      <select onChange={e => setSubject(e.target.value)}>
        <option>Statistics</option>
        <option>Computer Networking</option>
        <option>Machine Learning</option>
        <option>Web Development</option>
      </select>
      <input type="file" onChange={e => setFile(e.target.files[0])} required />
      <button type="submit">Upload</button>
    </form>
  );
}