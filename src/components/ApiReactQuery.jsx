// useQuery is used to fetch, cache, and manage data from a server (API)
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const ApiReactQuery =()=> {
    
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: () => axios.get('https://jsonplaceholder.typicode.com/').then(res => res.data),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <ul>
      {data.map(user => <li key={user.id}>{user.title}</li>)}
    </ul>
  );
}
export default ApiReactQuery;