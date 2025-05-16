// Debouncing using Simple setTimeout

import { useEffect, useState } from 'react';

export default function DebouncedSearch() {


  const [query, setQuery] = useState(''); //this will store the query from input field
  const [results, setResults] = useState([]); // this will store data that comes from API
  const [typingTimeout, setTypingTimeout] = useState(null);  
  
//   Every time the user types something:
// We start a setTimeout() that says: → “Wait 500ms, then make the API call.”
// But if the user types again before the 500ms is over, → we should cancel the last timeout.
// Otherwise, we’ll end up making multiple API calls — which we don't want.
// To cancel a timeout, we need its ID. That's what typingTimeout stores.

  useEffect(() => {

    // if query is empty just return as nothing is searched
    if (query === '') {
      setResults([]);
      return;
    }

    // if my query changes means i enter another word, then check if the typingtimeout exist means there is already a request done within 500ms ,
    // so clear previous timeout ,the reason for clearing previous time is that to cancel outdated API calls and ensure only the final input
    //  (after user stops typing) triggers the request. This avoids unnecessary calls and improves performance.

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    // This sets a timer for 500 milliseconds (half a second). After that delay, it runs the function inside: let say i enter 'h' it will execute function after
    // 500ms and in TypingTimeout my timeout id is set as 500ms but again i enter 'e' within 500 ms then my if condition is executed and clears previous time.
    // hence it will execute this function when i wait for 500 ms means times goes beyond 500ms.
    const timeout = setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts?q=${query}`)
        .then((res) => res.json())
        .then((data) => setResults(data));
    }, 500);

    setTypingTimeout(timeout);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="p-4">
      <input
        className="border px-2 py-1 w-full"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search posts..."
      />

      <ul className="mt-4">
        {results.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
