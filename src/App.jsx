import React, { useState, useEffect } from "react";
import data from "./assets/data.json";
import Cards from "./components/Cards";
import Header from "./components/Header";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);
  useEffect(() => {
    setJobs(data);
  }, []);

  const filterFunc = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level];
    if (languages) {
      tags.push(...languages);
    }
    if (tools) {
      tags.push(...tools);
    }

    return filters.every((f) => tags.includes(f));
  };

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };
  const filterdJobs = jobs.filter(filterFunc);

  const handleClearFilters = () => {
    setFilters([]);
  };

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      {filters.length > 0 && (
        <div
          className={`flex items-center justify-between font-display bg-white shadow-md my-16 mx-10 p-8 `}
        >
          <div className="flex flex-wrap">
            {filters.map((filter) => (
              <span className="m-3">
                <span
                  className={`text-teal-500 bg-teal-100 font-bold p-2 rounded rounded-r-none`}
                >
                  {filter}
                </span>
                <span
                  className={`text-teal-100 bg-teal-500 hover:text-white hover:bg-black font-bold cursor-pointer rounded-l-none p-2 rounded`}
                  onClick={() => handleFilterClick(filter)}
                >
                  ×
                </span>
              </span>
            ))}
          </div>
          <button
            className="text-teal-500 hover:cursor-pointer underline font-bold"
            onClick={handleClearFilters}
          >
            Clear
          </button>
        </div>
      )}
      {jobs.length === 0 ? (
        <p>Jobs are fetching...</p>
      ) : (
        filterdJobs.map((job) => (
          <Cards job={job} key={job.id} handleTagClick={handleTagClick} />
        ))
      )}
    </div>
  );
}
export default App;
