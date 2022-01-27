import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom";

import "./Tarefa.css";

const Tarefa = ({ tarefa, handleTaskClick, handleTaskDeletion }) => {
  const history = useHistory();

  const handleTaskDetailsClick = () => {
    history.push(`/${tarefa.title}`);
  };

  return (
    <div
      className="tarefa-container"
      style={tarefa.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(tarefa.id)}>
        {tarefa.title}
      </div>
      <div className="buttons-container">
        <button
          className="remove-task-button"
          onClick={() => handleTaskDeletion(tarefa.id)}
        >
          <CgClose />
        </button>
        <button className="see-task-details" onClick={handleTaskDetailsClick}>
          <CgInfo />
        </button>
      </div>
    </div>
  );
};

export default Tarefa;
