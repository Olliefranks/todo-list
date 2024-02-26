import react from "react";

const Job = ({ task, id, onDelete, onComplete }) => {
  return (
    <div className={`job ${onComplete ? "completed" : ""}`}>
      {task}
      <button onClick={onDelete}>Delete</button>
      <button onClick={onComplete}>Complete</button>
    </div>
  );
};

export default Job;
