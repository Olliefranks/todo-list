import { useState } from "react";
import Job from "./Components/Job";
import List from "./Components/List";
import "./App.css";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [input, setInput] = useState("");
  const [completedJobs, setCompletedJobs] = useState([]);

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

  const completedJob = (id) => {
    setCompletedJobs([...completedJobs, id]);
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
            id={job.id}
            task={job.task}
            onDelete={() => deleteJob(job.id)}
            onComplete={() => completedJob(job.id)}
          />
        ))}
      </List>

      <div id="note">
        <img
          class="pic"
          src="https://dailydoodle.de/doodles/20210129-notepad.png"
        />
      </div>
    </div>
  );
};

export default App;
