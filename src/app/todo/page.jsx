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

  const addTask = () => {
    setTasksArray((prevTasks) => {
      return [
        ...prevTasks,
        { task: task, completed: false, id: crypto.randomUUID() },
      ];
    });
    setTask("");
  };

  const removeTask = (id) => {
    let res = tasksArray.filter((t) => t.id !== id);
    console.log(res);
  };

  useEffect(() => {
    console.log(tasksArray);
  }, [tasksArray]);

  return (
    <div className={styles.todoCont}>
      <input type="text" onChange={onChange} value={task} />
      <button onClick={addTask}>Add Task</button>
      <ol className={styles.listCont}>
        {tasksArray.map((t, i, a) => {
          return (
            <div>
              <li key={t.id}>{t.task}</li>
              <button onClick={() => removeTask(t.id)}>Remove</button>
            </div>
          );
        })}
        {tasksArray.length === 0 ? <h2>("there is no tasks")</h2> : null}
      </ol>
    </div>
  );
};

export default Todo;
