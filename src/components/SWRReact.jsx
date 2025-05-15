import useSWR from 'swr'; //This hook handles fetching, caching, and revalidation for you.
import axios from 'axios';

// this is the function for fetching the data 
const fetcher = url => axios.get(url).then(res => res.data);

const Users = () =>{
    // useSWR has two parameters -> key (usually the API endpoint) , function to fetch data
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/todos', fetcher);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load users</p>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.title}</li>
      ))}
    </ul>
  );
}
export default Users;