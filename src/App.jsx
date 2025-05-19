import ApiReactQuery from "./components/ApiReactQuery";
import SearchComponent from "./components/CustomDebounceHook";
import DebouncedSearch from "./components/DebounceReact";
import SignUpForm from "./components/SignupForm";
import Users from "./components/SWRReact";
import ScrollThrottle from "./components/ThrottleReact";
import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import PaginatedData from "./PaginationComponent/PaginatedData";

// Lazy load the Dashboard component
const Dashboard = React.lazy(() => import("./components/Dashboard"));

function App() {
  const [computationResult, setComputationResult] = useState(null);

  // Dynamically import the utility function on button click
  const handleHeavyComputation = async () => {
    const { heavyComputation } = await import("./components/utils");
    const result = heavyComputation();
    setComputationResult(result);
  };
  return (
    <>
      {/* <SignUpForm/> */}
      {/* <Users/> */}
      {/* <ApiReactQuery/> */}
      {/* <DebouncedSearch/> */}
      {/* <SearchComponent/> */}
      {/* <ScrollThrottle/> */}
      {/*                                      here down */}
      {/* <Router>
        <div className="app">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>

        
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Suspense>

        
          <div>
            <button onClick={handleHeavyComputation}>
              Run Heavy Computation
            </button>
            {computationResult && <p>{computationResult}</p>}
          </div>
        </div>
      </Router> */}

      {/* Paginated data */}
      <PaginatedData/>
    </>
  );
}

export default App;
