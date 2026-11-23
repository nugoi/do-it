"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasksArray, setTasksArray] = useState([]);

  const onChange = (e) => {
    setTask(e.target.value);
    console.log(task);
  };

  const addTask = () => {};

  const removeTask = (id) => {};

  const toggleTask = (id) => {};

  useEffect(() => {
    if (localStorage.getItem("todoTasks") !== null) return;

    const dataInStorage = JSON.parse(localStorage.getItem("todoTasks"));
    if (dataInStorage.length > 0) setTasksArray(dataInStorage);

    throw new Error("კავშირი არ არის დამყარებული");
  }, []);

  useEffect(() => {
    localStorage.setItem("todoTasks", JSON.stringify(tasksArray));
  }, [tasksArray]);

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className={styles.todoCont}>
      <div className={styles.inputCont}>
        <input
          type="text"
          onChange={onChange}
          value={task}
          onKeyDown={onKeyDown}
        />
        <button onClick={addTask}>Add Task</button>
        <ol className={styles.listCont}>
          {tasksArray.map((t, i, a) => {
            return (
              <div key={t.id} className={styles.taskCont}>
                <li
                  key={t.id}
                  onClick={() => toggleTask(t.id)}
                  className={t.completed ? styles.done : ""}
                >
                  {t.task}
                </li>
                <button
                  className={styles.rmBtn}
                  onClick={() => removeTask(t.id)}
                >
                  X
                </button>
              </div>
            );
          })}
          {tasksArray.length === 0 && <h2>("there is no tasks")</h2>}
        </ol>
      </div>
    </div>
  );
};

export default Todo;
