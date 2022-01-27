import React from "react";
import Tarefa from "./Tarefa";

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
  return (
    <>
      {tasks.map((tarefa) => (
        <Tarefa
          tarefa={tarefa}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      ))}
    </>
  );
};

export default Tasks;
