import { useState } from "react";
import Job from "./Components/Job";
import List from "./Components/List";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const newJob = {
        id: Date.now(),
        task: input,
      };
      setJobs([...jobs, newJob]);
      setInput("");
    }
  };

  const deleteJob = (id) => {
    const updatedJobs = jobs.filter((job) => job.id !== id);
    setJobs(updatedJobs);
  };

  return (
    <div>
      <h1>My to do list app in react</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add Job</button>
      </form>

      <List>
        {jobs.map((job) => (
          <Job
            key={job.id}
            task={job.task}
            onDelete={() => deleteJob(job.id)}
          />
        ))}
      </List>
    </div>
  );
};

export default App;
