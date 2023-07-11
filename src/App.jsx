
//import Primary from "./sections/Primary";

//function App() {

  //return (
   // <div className="w-full h-full bg-red-500">
    //<Primary />

    //</div>
  //)
//}

//export default App

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
  return (
    <div className="App bg-cyan-50">
      <header>
        <Header />
      </header>
      {filters.length > 0 && (
        <div className={`bg-white shadow-md my-16 mx-10 p-8 flex flex-wrap`}>
          {filters.map((filter) => (
            <span className="m-3">
              <span
                className={`text-teal-500 bg-teal-100 font-bold p-2 rounded rounded-r-none`}
              >
                {filter}
              </span>
              <span
                className={`text-teal-100 bg-teal-500 font-bold cursor-pointer rounded-l-none p-2 rounded`}
                onClick={() => handleFilterClick(filter)}
              >
                ×
              </span>
            </span>
          ))}
        </div>
      )}

      {jobs.length === 0 ? (
        <p>Jobs are fetching...</p>
      ) : (
        filterdJobs.map((job) => (
          <Cards
            job={job}
            key={job.id}
            handleTagClick={handleTagClick}
          />
        ))
      )}
    </div>
  );
}
export default App;
