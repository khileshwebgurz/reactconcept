import React, { useState, useEffect } from 'react';
import useDebounce from '../CustomHook/useDebounce';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Use the custom hook to debounce the search term with a 500ms delay
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const [results, setResults] = useState([]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Only call API when user stops typing for 500ms
      fetch(`https://jsonplaceholder.typicode.com/posts?q=${debouncedSearchTerm}`)
        .then((res) => res.json())
        .then((data) => setResults(data));
    } else {
      // Clear results if input is empty
      setResults([]);
    }
  }, [debouncedSearchTerm]); // Run effect only when debounced value changes

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {results.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchComponent;
