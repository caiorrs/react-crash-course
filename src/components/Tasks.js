import React from "react";
import Task from "./Task";

function Tasks({ tasks, onDelete, onToggle }) {
  return (
    <>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            onDelete={() => onDelete(task.id)}
            onToggle={() => onToggle(task.id)}
          />
        );
      })}
    </>
  );
}

Tasks.defaultProps = {
  tasks: [],
};

export default Tasks;
