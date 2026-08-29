import { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResources } from '../redux/resourceSlice';
import { Link } from 'react-router-dom';

const ResourceCard = memo(({ resource }) => (
  <div style={{ border: '1px solid black', padding: '10px', margin: '10px 0' }}>
    <h3>{resource.title}</h3>
    <p>{resource.description}</p>
    <span style={{ backgroundColor: '#eee', padding: '5px' }}>{resource.subject}</span>
    <br /><br />
    <a href={`http://localhost:5000/${resource.fileUrl}`} target="_blank" rel="noreferrer">
      View Material
    </a>
  </div>
));

export default function Dashboard() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.resources);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchResources());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div>Loading resources...</div>;

  return (
    <div>
      <h2>Study Materials</h2>
      <Link to="/upload">
        <button style={{ marginBottom: '20px' }}>Upload New Material</button>
      </Link>
      
      {items.length === 0 ? (
        <p>No materials uploaded yet. Click the button above to add the first one!</p>
      ) : (
        <div>
          {items.map(res => <ResourceCard key={res._id} resource={res} />)}
        </div>
      )}
    </div>
  );
}