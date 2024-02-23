const Job = ({ task, onDelete }) => {
  return (
    <div>
      {task}
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Job;
