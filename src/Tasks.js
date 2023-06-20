import React from "react";
import Task from "./Task";
import { FaTimes } from "react-icons/fa";

export default function Tasks({ task, onDelete, onRemainder, filteredTask }) {
  return (
    <>
      {filteredTask.length
        ? filteredTask.map((tas) => {
            return (
              <div
                className={tas.remainder ? "tasks borderr" : "tasks"}
                onDoubleClick={() => onRemainder(tas.id)}
              >
                <h4>
                  {tas.text}
                  <FaTimes className="fa" onClick={() => onDelete(tas.id)} />
                </h4>
                <p>{tas.day}</p>
              </div>
            );
          })
        : task.map((tas) => (
            <Task
              key={tas.id}
              tass={tas}
              onDelete={onDelete}
              onRemainder={onRemainder}
            />
          ))}
    </>
  );
}
